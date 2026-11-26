import Link from "next/link";
import { DragScroller } from "@/components/DragScroller";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Arrow, PillLink } from "@/components/Pill";
import { Photo } from "@/components/Photo";
import { ProductCard } from "@/components/ProductCard";
import { Wordmark } from "@/components/Wordmark";
import { COORDINATES, formatPrice, LOCATION, STORE_NAME } from "@/lib/format";
import {
  categories,
  getFeaturedProducts,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/products";

const STORY =
  "Nigerian homes deserve furniture with a point of view of its own. So we started in Lagos, with original shapes, nothing extra, and pieces that look better for every year they are lived with.";

const MARQUEE = ["Lagos, Nigeria", "Original", "Minimal", "Modern", "Made for Nigerian homes"];

const roots = [
  {
    title: "Based in Lagos",
    text: "Slyko Living is a Nigerian brand, run from Lagos. This city is home, and it shapes everything we choose to make and sell.",
  },
  {
    title: "Original, minimal, modern",
    text: "We set out to bring something fresh to the Nigerian furniture space: clean lines, honest materials and shapes you won't find in every showroom.",
  },
  {
    title: "Made for Nigerian homes",
    text: "For full houses, long Sunday afternoons and guests who stay for one more plate. Priced in naira, always.",
  },
];

/** Where the collage tiles sit around each category title, by tile index. */
const collage = [
  { box: "left-4 top-[7%] w-[38vw] md:left-[5vw] md:top-[10%] md:w-[21vw]", drift: 50 },
  { box: "bottom-[6%] right-4 w-[42vw] md:right-[6vw] md:bottom-[9%] md:w-[25vw]", drift: 110 },
  { box: "hidden md:block md:left-[23vw] md:bottom-[5%] md:w-[14vw]", drift: 170 },
];
const collageMirrored = [
  { box: "right-4 top-[7%] w-[38vw] md:right-[5vw] md:top-[10%] md:w-[21vw]", drift: 50 },
  { box: "bottom-[6%] left-4 w-[42vw] md:left-[6vw] md:bottom-[9%] md:w-[25vw]", drift: 110 },
  { box: "hidden md:block md:right-[23vw] md:bottom-[5%] md:w-[14vw]", drift: 170 },
];

export default function HomePage() {
  const spotlight = getProduct("reed-nightstand") ?? products[0];
  const featured = getFeaturedProducts();
  const latest = products
    .filter((product) => product.isNew)
    .slice(0, 4);

  return (
    <>
      {/* Hero: a tall section whose stage stays pinned while the sequence plays. */}
      <section data-hero className="relative h-[340vh] bg-ink text-bone">
        <div
          data-hero-stage
          className="sticky top-12 h-[calc(100svh-3rem)] overflow-hidden"
        >
          <div data-hero-bg className="absolute inset-0 origin-bottom">
            <Photo
              src="/home/hero.jpg"
              alt=""
              sizes="100vw"
              eager
              quality={90}
              className="hidden h-full w-full sm:block"
              imageClassName="object-[50%_64%]"
            />
            <Photo
              src="/products/birch-sideboard-1.jpg"
              alt=""
              sizes="100vw"
              eager
              className="h-full w-full sm:hidden"
            />
            <div className="absolute inset-0 bg-ink/45" />
          </div>

          <div data-hero-scrim className="absolute inset-0 bg-ink" />

          <Wordmark as="h1" stacked data-hero-word className="absolute inset-x-0 top-0 origin-top" />

          <div data-hero-intro className="absolute bottom-10 left-4 md:left-[6vw]">
            <div data-hero-intro-inner>
              <p className="label text-bone/70">{LOCATION} · {COORDINATES}</p>
              <p className="mt-3 max-w-[22rem] uppercase leading-snug">
                Original, minimal, modern furniture from Lagos, made for
                Nigerian homes.
              </p>
              <div className="mt-6">
                <PillLink href="/shop" tone="light">
                  Explore collection
                </PillLink>
              </div>
            </div>
          </div>

          <div
            data-hero-statement
            className="pointer-events-none absolute inset-0 grid place-items-center px-4 text-center"
          >
            <h2 className="display text-[clamp(2.5rem,7vw,7rem)]">
              Original.
              <br />
              Minimal.
              <br />
              Proudly Nigerian.
            </h2>
          </div>

          <Link
            href={`/products/${spotlight.slug}`}
            data-hero-tile
            className="group absolute left-1/2 top-[7%] block w-[min(40svh,72vw)] -translate-x-1/2 bg-bone text-ink"
          >
            <Photo
              src={spotlight.images[0]}
              alt={spotlight.name}
              sizes="(min-width: 640px) 40svh, 72vw"
              className="aspect-square w-full"
              imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="label flex items-center justify-between gap-4 border-t border-line px-4 py-3">
              <span>{spotlight.name}</span>
              <span className="tabular-nums">{formatPrice(spotlight.price)}</span>
            </div>
          </Link>

          <p
            data-hero-caption
            className="display pointer-events-none absolute inset-x-0 bottom-[5%] text-center text-[clamp(2.5rem,9vw,9rem)]"
          >
            Piece of the week
          </p>
        </div>
      </section>

      {/* Running band that places the brand */}
      <div aria-hidden="true" className="overflow-hidden border-b border-line py-4">
        <div className="marquee label flex w-max gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, index) => (
            <span key={index} className="flex items-center gap-10">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            </span>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <section className="grid items-center gap-16 px-4 py-32 md:grid-cols-12 md:px-[6vw] md:py-48">
        <div className="relative md:col-span-5">
          <div data-parallax="40" className="w-[72%]">
            <div data-clip>
              <Photo
                src="/products/loop-coffee-table-1.jpg"
                alt=""
                sizes="(min-width: 768px) 30vw, 70vw"
                className="aspect-[4/5] w-full"
              />
            </div>
          </div>
          <div data-parallax="120" className="absolute -bottom-[12%] right-0 w-[44%]">
            <div data-clip>
              <Photo
                src="/products/cane-side-table-1.jpg"
                alt=""
                sizes="(min-width: 768px) 18vw, 44vw"
                className="aspect-square w-full"
              />
            </div>
          </div>
        </div>
        <div data-reveal-group className="md:col-span-6 md:col-start-7">
          <p data-reveal-item className="display text-[clamp(1.75rem,3.3vw,3.25rem)] leading-[1.04]">
            Welcome to {STORE_NAME}, a Lagos furniture brand bringing
            original, minimal and modern pieces to Nigerian homes.
          </p>
          <p data-reveal-item className="mt-8 max-w-sm text-muted">
            We started with one aim: to bring a new kind of furniture into the
            Nigerian furniture space. Fewer, better pieces, chosen with care
            and priced in naira.
          </p>
          <div data-reveal-item className="mt-8">
            <PillLink href="#story">Our story</PillLink>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div data-reveal className="flex items-end justify-between gap-4 px-4">
          <h2 className="display text-[clamp(2rem,4.4vw,4rem)]">Featured pieces</h2>
          <p className="label flex items-center gap-2 text-muted">
            Drag <Arrow className="h-4 w-4" />
          </p>
        </div>
        <div data-reveal-group className="mt-6">
          <DragScroller>
            {featured.map((product) => (
              <div
                key={product.slug}
                data-reveal-item
                className="w-[70vw] shrink-0 sm:w-[38vw] lg:w-[27vw]"
              >
                <ProductCard
                  product={product}
                  sizes="(min-width: 1024px) 27vw, (min-width: 640px) 38vw, 70vw"
                />
              </div>
            ))}
          </DragScroller>
        </div>
      </section>

      {/* Categories: one full-height collage each */}
      <div className="pt-24">
        {categories.map((category, index) => {
          const slots = index % 2 === 0 ? collage : collageMirrored;
          const pieces = getProductsByCategory(category.slug).slice(0, slots.length);
          return (
            <section
              key={category.slug}
              className="relative grid min-h-[105svh] place-items-center"
            >
              {pieces.map((piece, slot) => (
                <div key={piece.slug} className={`absolute ${slots[slot].box}`}>
                  <div data-parallax={slots[slot].drift}>
                    <div data-clip>
                      <Photo
                        src={piece.images[0]}
                        alt=""
                        sizes="(min-width: 768px) 25vw, 42vw"
                        className="aspect-[4/5] w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/*
                The title is drawn in white with a "difference" blend, so it
                turns dark over the pale page and light over dark parts of a
                photo. The wrapper must not create its own layer, or the
                title would have nothing to blend with.
              */}
              <div data-reveal-group className="px-4 text-center">
                <p data-reveal-item className="label relative z-10 text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                </p>
                <h2
                  data-reveal-item
                  className="display relative z-10 mt-3 text-[clamp(3rem,13vw,13rem)] text-white mix-blend-difference"
                >
                  {category.name}
                </h2>
                <div data-reveal-item className="relative z-10 mt-6">
                  <PillLink href={`/shop/${category.slug}`}>
                    Shop {category.name}
                  </PillLink>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Story */}
      <section id="story" className="scroll-mt-12 px-4 py-40 md:px-[10vw] md:pb-40 md:pt-56">
        <p className="label text-muted">Our story</p>
        <p data-words className="display mt-6 text-[clamp(2rem,5.6vw,5.5rem)] leading-[1]">
          {STORY.split(" ").map((word, index) => (
            <span key={index} data-word>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      {/* Rooted in Lagos */}
      <section className="px-4 pb-32 md:pb-40">
        <h2 data-reveal className="display text-[clamp(2rem,4.4vw,4rem)]">
          Rooted in Lagos
        </h2>
        <div className="mt-8 grid md:grid-cols-3">
          {roots.map((root, index) => (
            <div
              key={root.title}
              data-reveal
              className="border-t border-line py-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0"
            >
              <p className="label text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="display mt-10 text-3xl">{root.title}</h3>
              <p className="mt-3 max-w-xs text-muted">{root.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest arrivals */}
      <section className="px-4">
        <div data-reveal className="flex items-end justify-between gap-4">
          <h2 className="display text-[clamp(2rem,4.4vw,4rem)]">Latest arrivals</h2>
          <Link href="/shop" className="label underline underline-offset-4 hover:opacity-60">
            View all
          </Link>
        </div>
        <div data-reveal-group className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 lg:grid-cols-4">
          {latest.map((product) => (
            <div key={product.slug} data-reveal-item>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section data-reveal-group className="flex flex-col items-center px-4 pt-40 text-center md:pt-56">
        <h2 data-reveal-item className="display text-[clamp(2.5rem,9vw,9rem)]">
          Subscribe to our
          <br />
          newsletter
        </h2>
        <p data-reveal-item className="mt-6 max-w-sm text-muted">
          New pieces and the occasional early look, straight from Lagos. No
          noise.
        </p>
        <div data-reveal-item className="mt-10 flex w-full justify-center text-left">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
