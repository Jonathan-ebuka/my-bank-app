import Link from "next/link";
import { DragScroller } from "@/components/DragScroller";
import { Arrow, PillLink } from "@/components/Pill";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Wordmark } from "@/components/Wordmark";
import { formatPrice } from "@/lib/format";
import {
  categories,
  getFeaturedProducts,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/products";

const promises = [
  {
    title: "Honest materials",
    text: "Solid timber, natural fabrics and finishes that age well.",
  },
  {
    title: "Free delivery over $500",
    text: "Brought into the room of your choice, packaging taken away.",
  },
  {
    title: "5-year guarantee",
    text: "Every frame and joint is covered for five years.",
  },
];

export default function HomePage() {
  const spotlight = getProduct("nora-lounge-armchair") ?? products[0];
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="bg-ink pb-24 text-bone">
        <Wordmark as="h1" animate />

        <div className="fade-up grid gap-12 px-4 pt-12 md:grid-cols-12 md:px-[6vw]">
          <div className="md:col-span-4">
            <p className="max-w-[22rem] uppercase leading-snug">
              Sofas, tables and beds in solid timber and natural fabrics — made
              to look better with every year at home.
            </p>
            <div className="mt-6">
              <PillLink href="/shop" tone="light">
                Explore collection
              </PillLink>
            </div>
          </div>
          <h2 className="display text-[clamp(2.25rem,5.2vw,5rem)] md:col-span-8 md:text-right">
            Quiet pieces for
            <br />
            rooms that are
            <br />
            really lived in
          </h2>
        </div>

        <Reveal className="mx-auto mt-24 w-[min(26rem,calc(100%-2rem))]">
          <Link href={`/products/${spotlight.slug}`} className="group block bg-bone text-ink">
            <div className="overflow-hidden">
              <ProductArt
                kind={spotlight.art}
                tint="#f3f0e8"
                accent={spotlight.accent}
                className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="flex items-end justify-between gap-4 border-t border-line p-4">
              <div>
                <p className="label text-muted">Piece of the week</p>
                <p className="label mt-1">{spotlight.name}</p>
              </div>
              <p className="text-3xl font-light tracking-[-0.05em] tabular-nums">
                {formatPrice(spotlight.price)}
              </p>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="grid gap-10 px-4 py-28 md:grid-cols-12 md:px-[6vw]">
        <Reveal className="md:col-span-4">
          <ProductArt
            kind="lamp"
            tint="#e8e2d6"
            accent="#c08a2b"
            className="aspect-[4/5] w-full max-w-sm"
          />
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6">
          <p className="display text-[clamp(1.75rem,3.4vw,3.25rem)] leading-[1.02]">
            Welcome to Hearth &amp; Oak — furniture designed slowly, built
            properly and priced fairly.
          </p>
          <p className="mt-8 max-w-sm text-muted">
            Every piece in the collection is made from materials we would want
            in our own homes, by workshops we know by name.
          </p>
          <div className="mt-8">
            <PillLink href="/shop">Shop all {products.length} pieces</PillLink>
          </div>
        </Reveal>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4 px-4">
          <h2 className="display text-[clamp(2rem,4.4vw,4rem)]">
            Featured pieces
          </h2>
          <p className="label flex items-center gap-2 text-muted">
            Drag <Arrow className="h-4 w-4" />
          </p>
        </div>
        <div className="mt-6">
          <DragScroller>
            {featured.map((product) => (
              <div key={product.slug} className="w-[70vw] shrink-0 sm:w-[38vw] lg:w-[27vw]">
                <ProductCard product={product} />
              </div>
            ))}
          </DragScroller>
        </div>
      </section>

      <section className="px-4 pt-32">
        <p className="label text-muted">Shop by room</p>
        <ul className="mt-4 border-t border-line">
          {categories.map((category, index) => (
            <li key={category.slug} className="border-b border-line">
              <Link
                href={`/shop/${category.slug}`}
                className="group relative flex items-center gap-4 py-3 sm:py-4"
              >
                <span className="label w-8 self-start pt-2 text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="display flex-1 text-[clamp(2.5rem,9vw,8.5rem)] transition-transform duration-500 ease-out group-hover:translate-x-[2vw]">
                  {category.name}
                </span>
                <ProductArt
                  kind={category.art}
                  tint={category.tint}
                  accent={category.accent}
                  className="pointer-events-none absolute right-[18vw] top-1/2 z-10 hidden h-44 w-56 -translate-y-1/2 rotate-3 scale-90 opacity-0 transition duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 lg:block"
                />
                <span className="label hidden text-muted sm:block">
                  {getProductsByCategory(category.slug).length} pieces
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-bone">
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid px-4 pt-32 md:grid-cols-3">
        {promises.map((promise, index) => (
          <Reveal
            key={promise.title}
            className="border-t border-line py-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <p className="label text-muted">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="display mt-10 text-3xl">{promise.title}</h3>
            <p className="mt-3 max-w-xs text-muted">{promise.text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
