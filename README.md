# Three Wishes Gifts

Static site for [threewishesgifts.com](https://threewishesgifts.com) — a mum-and-daughter studio selling digital planners, journals and invitation suites on [Etsy](https://www.etsy.com/shop/ThreeWishesGiftsShop).

## Pages

| Path | Purpose |
| --- | --- |
| `index.html` | Home — hero, category highlights, featured products, about preview |
| `about.html` | Our Story — full About Us copy and illustrations |
| `shop.html` | Shop — all 33 products with category filters, pricing and links to Etsy |
| `assets/styles.css` | Shared design system (colours, layout, components) |
| `assets/script.js` | Shared behaviour — nav, scroll reveal, star fields |
| `assets/products.js` | Product catalogue (title, price, image, Etsy link) rendered on Home + Shop |
| `assets/logo.jpg` | Shop logo, also used as favicon |
| `assets/about/` | About page illustrations |
| `assets/products/` | Product imagery (Etsy listing photos + custom mockups) |
| `robots.txt` | Allows indexing |

## Updating products

Edit the `PRODUCTS` array in `assets/products.js` — each entry has `title`, `category`, `price`, `was` (original price), `img`, and `url` (the Etsy listing link). Both the Home page's featured grid and the Shop page's full grid render from this one file.

Prices are pulled from the shop's Etsy listings (EUR); the live localized price and checkout always happens on Etsy.

## After every deploy: bump the cache-busting version

Hostinger's CDN (hCDN) caches `assets/styles.css`, `assets/script.js` and `assets/products.js` for 7 days at the edge, separately from your git deploy — pushing new CSS/JS will **not** show up live until the cached copy expires, unless the URL changes. Every `<link>`/`<script>` tag for those three files carries a `?v=` query string for this reason.

Before pushing a change to any of those three files, bump the `?v=...` value (any new string works — a timestamp is easiest) on **every** reference in `index.html`, `about.html` and `shop.html`:

```
sed -i "s/?v=[0-9]*/?v=$(date +%Y%m%d%H%M)/g" index.html about.html shop.html
```

HTML pages themselves are not edge-cached, so changes to page content/markup go live on the next deploy without this step.

## Local preview

Any static file server works, e.g.:

```
npx serve .
```

## Deploy to Hostinger

The site is plain static HTML — copy the repo contents into `public_html/`.

**Option A — Hostinger Git integration (recommended)**
1. hPanel → *Websites* → *Advanced* → *GitHub / Git*
2. Repository: `Elateve/threewishesgifts`, branch: `main`, path: `/public_html`
3. Enable *Auto-deploy* so every push to `main` redeploys.

**Option B — Manual**
Upload all files (`index.html`, `about.html`, `shop.html`, `assets/`, `robots.txt`) into `public_html/` via hPanel File Manager or SFTP.
