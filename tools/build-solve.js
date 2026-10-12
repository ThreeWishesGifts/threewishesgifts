// Builds solve/index.html: the debrief is encrypted in the page and unlocks with the password.
//
// Usage:  node tools/build-solve.js [password]      (default password: stepover26)
//
// Reads (all optional, none are committed - see .gitignore):
//   private/solve-content.html                  the debrief, as an HTML fragment
//   private/rosalind-*.(png|jpg|webp)           portrait, used wherever the fragment says {{PORTRAIT}}
//
// Anything in private/ never leaves this machine; only the encrypted result is deployed.

const fs = require('fs');
const path = require('path');
const { webcrypto } = require('crypto');

const root = path.join(__dirname, '..');
const password = (process.argv[2] || 'stepover26').trim().toLowerCase();
const ITERATIONS = 250000;

const contentPath = path.join(root, 'private', 'solve-content.html');
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
const privateDir = path.join(root, 'private');
const portraitFile = fs.existsSync(privateDir)
  ? fs.readdirSync(privateDir).find((f) => /^rosalind.*\.(png|jpe?g|webp)$/i.test(f))
  : null;
const portraitPath = portraitFile ? path.join(privateDir, portraitFile) : null;

let html = fs.existsSync(contentPath)
  ? fs.readFileSync(contentPath, 'utf8')
  : '<h2>The debrief is on its way</h2><p>The full debrief is being prepared. Please check back soon.</p>';

if (portraitPath) {
  const mime = MIME[path.extname(portraitPath).toLowerCase()];
  const uri = 'data:' + mime + ';base64,' + fs.readFileSync(portraitPath).toString('base64');
  html = html.split('{{PORTRAIT}}').join(uri);
} else if (html.includes('{{PORTRAIT}}')) {
  console.warn('Warning: {{PORTRAIT}} used but no private/rosalind-*.(png|jpg|webp) portrait found.');
}

(async () => {
  const subtle = webcrypto.subtle;
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const km = await subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    km, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = new Uint8Array(await subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(html)));
  const b64 = (u8) => Buffer.from(u8).toString('base64');
  const payload = JSON.stringify({ s: b64(salt), v: b64(iv), c: b64(ct), i: ITERATIONS });

  const template = fs.readFileSync(path.join(__dirname, 'solve.template.html'), 'utf8');
  const out = template.replace('__PAYLOAD__', () => payload);
  fs.mkdirSync(path.join(root, 'solve'), { recursive: true });
  fs.writeFileSync(path.join(root, 'solve', 'index.html'), out);
  console.log('Built solve/index.html (' + Math.round(out.length / 1024) + ' KB), content from ' +
    (fs.existsSync(contentPath) ? 'private/solve-content.html' : 'built-in placeholder'));
})();
