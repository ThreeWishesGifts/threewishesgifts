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
