# naliniprabhas.github.io

A static ecommerce storefront built with React + Vite + Tailwind, deployed to
GitHub Pages. Layout and design tokens are recreated from the
[Mini eCommerce](https://design-ecommerce.onrender.com/) reference template.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages.

**One-time setup:** in the repo, go to *Settings → Pages* and set **Source** to
**GitHub Actions**. Without this the workflow will fail at the deploy step.

The site is a GitHub *user* site served from the domain root, so `base` stays
`/` in `vite.config.ts`. No Vercel or other host is needed — the build output is
plain static files. The workflow copies `index.html` to `404.html` so that deep
links such as `/product/blazer-mid-77` are handed to the client-side router
instead of returning a hard 404.

## Structure

```
public/assets/img/   placeholder imagery (see caveat below)
src/data/            product catalogue and page copy — edit content here
src/components/      shared UI (Navbar, Footer, ProductCard, …)
src/components/home/ homepage sections, in render order
src/pages/           routed pages
src/index.css        design tokens in an @theme block
```

Content lives in `src/data/`, so adding or editing products and page copy does
not require touching component markup. `src/data/products.ts` drives the
featured row, the collection grid, and every product detail page.

## Routes

| Path              | Page                                    |
| ----------------- | --------------------------------------- |
| `/`               | Homepage (all 14 sections)              |
| `/collection`     | Product grid with client-side sorting   |
| `/product/:slug`  | Product detail with tabs and related    |
| `/sign-in`        | Sign-in form (presentational)           |
| `/sign-up`        | Sign-up form (presentational)           |
| anything else     | 404 page                                |

## Scope notes

This is a **browse-only catalogue** — there is no cart, checkout, or backend.
Product detail pages end in an "Enquire about this item" link rather than an
add-to-cart button, and the newsletter and auth forms are inert. Adding a real
cart later means either client-side state (localStorage) or a hosted checkout
such as Stripe Payment Links.

## ⚠️ Placeholder assets must be replaced before publishing

The images in `public/assets/img/` came from the reference template and are
**Nike product and marketing photography**; the logo contains the Nike swoosh.
The product names in `src/data/products.ts` are real Nike model names. These are
stand-ins for layout work only. Replace the imagery, the logo, and the product
names with your own before making the site public.

Icons whose source SVGs were white-on-transparent have local dark variants
(`logo-dark.svg`, `ic-play-dark.svg`, `ic-google-dark.svg`, `ic-github-dark.svg`)
for use on light backgrounds.

## Notes

`.npmrc` pins the public npm registry so installs work on machines whose global
npm config points at a private registry.
