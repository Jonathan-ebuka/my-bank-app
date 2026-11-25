import Link from "next/link";
import { DragScroller } from "@/components/DragScroller";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Arrow, PillLink } from "@/components/Pill";
import { Photo } from "@/components/Photo";
import { ProductCard } from "@/components/ProductCard";
import { Wordmark } from "@/components/Wordmark";
import { formatPrice, STORE_NAME } from "@/lib/format";
import {
  categories,
  getFeaturedProducts,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/products";

const STORY =
  "Good furniture outlasts fashion. It gathers the marks of a life well lived and looks better for every one of them.";

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
              src="/products/long-walnut-console-1.jpg"
              alt=""
              sizes="100vw"
              eager
              className="hidden h-full w-full sm:block"
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
              <p className="max-w-[22rem] uppercase leading-snug">
                Bring warmth and character home with furniture made to be
                lived with for years.
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
              Made slowly.
              <br />
              Kept for a
              <br />
              lifetime.
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
            Welcome to {STORE_NAME}, where furniture is designed slowly,
            built properly and priced fairly.
          </p>
          <p data-reveal-item className="mt-8 max-w-sm text-muted">
            Every piece in the collection is made from materials we would want
            in our own homes, by workshops we know by name.
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
              <div data-reveal-group className="relative z-10 px-4 text-center">
                <p data-reveal-item className="label text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                </p>
                <h2 data-reveal-item className="display mt-3 text-[clamp(3rem,13vw,13rem)]">
                  {category.name}
                </h2>
                <div data-reveal-item className="mt-6">
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
      <section id="story" className="scroll-mt-12 px-4 py-40 md:px-[10vw] md:py-56">
        <p className="label text-muted">Our story</p>
        <p data-words className="display mt-6 text-[clamp(2rem,5.6vw,5.5rem)] leading-[1]">
          {STORY.split(" ").map((word, index) => (
            <span key={index} data-word>
              {word}{" "}
            </span>
          ))}
        </p>
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
          New pieces, workshop notes and the occasional early look. No noise.
        </p>
        <div data-reveal-item className="mt-10 flex w-full justify-center text-left">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
