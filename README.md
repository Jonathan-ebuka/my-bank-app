# Hearth & Oak — furniture store

A furniture storefront built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's inside

- `src/app` — pages: home, `/shop`, `/shop/[category]`, `/products/[slug]`, `/cart`
- `src/lib/products.ts` — the product catalogue and categories (edit this to change what's for sale)
- `src/lib/cart.ts` — cart state, saved in the browser's local storage
- `src/components` — header, footer, product cards, illustrations and cart UI

Product pictures are SVG illustrations drawn in `src/components/ProductArt.tsx`,
standing in until real photography is added. Checkout is not connected to a
payment provider yet.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — lint the code
