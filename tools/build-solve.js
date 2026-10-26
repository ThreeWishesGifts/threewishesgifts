// Builds the password-gated debrief pages. Each debrief is encrypted inside its page
// (AES-GCM, key from PBKDF2) and unlocks client-side with the book's password.
//
// Usage:
//   node tools/build-solve.js                 build every book
//   node tools/build-solve.js coldcase        build one book
//   node tools/build-solve.js coldcase <pw>   build one book with a different password
//
// Per book, in private/<book>/ (gitignored, never deployed):
//   solve-content.html          the debrief, as an HTML fragment
//   <portrait>.(png|jpg|webp)   used where the fragment has {{PORTRAIT}}. A block wrapped in
//                               <!--PORTRAIT-->...<!--/PORTRAIT--> is dropped if no portrait exists.
//
// To add a book, add an entry to BOOKS below.

const fs = require('fs');
const path = require('path');
const { webcrypto } = require('crypto');

const BOOKS = {
  blackwater: {
    out: 'solve-blackwater',
    password: 'stepover26',
    pageTitle: 'The Blackwater Ledger',
    gateHeading: 'Case files beyond this point',
    portraitPattern: /^rosalind.*\.(png|jpe?g|webp)$/i,
  },
  coldcase: {
    out: 'solve-coldcase',
    password: 'wreath48',
    pageTitle: 'Cold Case: Christmas',
    gateHeading: 'The Winter Box is open beyond this point',
    portraitPattern: /^(cc-)?(myrtle|holly).*\.(png|jpe?g|webp)$/i,
  },
};

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
const ITERATIONS = 250000;
const root = path.join(__dirname, '..');

async function build(key, passwordOverride) {
  const book = BOOKS[key];
  const dir = path.join(root, 'private', key);
  const password = (passwordOverride || book.password).trim().toLowerCase();

  const contentPath = path.join(dir, 'solve-content.html');
  let html = fs.existsSync(contentPath)
    ? fs.readFileSync(contentPath, 'utf8')
    : '<h2>The debrief is on its way</h2><p>The full debrief is being prepared. Please check back soon.</p>';

  const portraitFile = fs.existsSync(dir) ? fs.readdirSync(dir).find((f) => book.portraitPattern.test(f)) : null;
  if (portraitFile) {
    const p = path.join(dir, portraitFile);
    const uri = 'data:' + MIME[path.extname(p).toLowerCase()] + ';base64,' + fs.readFileSync(p).toString('base64');
    html = html.split('{{PORTRAIT}}').join(uri).replace(/<!--\/?PORTRAIT-->/g, '');
  } else {
    html = html.replace(/<!--PORTRAIT-->[\s\S]*?<!--\/PORTRAIT-->/g, '');
    if (html.includes('{{PORTRAIT}}')) throw new Error(key + ': {{PORTRAIT}} used outside a PORTRAIT block and no portrait found');
    if (fs.existsSync(contentPath)) console.warn('  note: no portrait found in private/' + key + ', page built without it');
  }

  const subtle = webcrypto.subtle;
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const km = await subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const aes = await subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    km, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = new Uint8Array(await subtle.encrypt({ name: 'AES-GCM', iv }, aes, new TextEncoder().encode(html)));
  const b64 = (u8) => Buffer.from(u8).toString('base64');
  const payload = JSON.stringify({ s: b64(salt), v: b64(iv), c: b64(ct), i: ITERATIONS });

  const out = fs.readFileSync(path.join(__dirname, 'solve.template.html'), 'utf8')
    .split('__PAGE_TITLE__').join(book.pageTitle)
    .split('__GATE_HEADING__').join(book.gateHeading)
    .replace('__PAYLOAD__', () => payload);

  const outDir = path.join(root, book.out);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), out);
  console.log('Built ' + book.out + '/index.html (' + Math.round(out.length / 1024) + ' KB), content from ' +
    (fs.existsSync(contentPath) ? 'private/' + key + '/solve-content.html' : 'built-in placeholder'));
}

(async () => {
  const [key, pw] = process.argv.slice(2);
  const keys = key ? [key] : Object.keys(BOOKS);
  for (const k of keys) {
    if (!BOOKS[k]) throw new Error('Unknown book "' + k + '". Known: ' + Object.keys(BOOKS).join(', '));
    await build(k, pw);
  }
})();
