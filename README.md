# Hearth & Oak — furniture store

A furniture storefront built with Next.js (App Router), TypeScript and Tailwind CSS,
with GSAP ScrollTrigger and Lenis for scroll-driven motion.

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
- `src/components/Motion.tsx` — smooth scrolling and all scroll animation, driven by
  `data-*` attributes (`data-reveal`, `data-clip`, `data-parallax`, …) on the markup

Product pictures and the hero backdrop are SVG illustrations (`ProductArt.tsx`,
`HeroScene.tsx`) standing in until real photography is added. The newsletter form
is not connected to a mailing service. Checkout is not connected to a
payment provider yet.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — lint the code
