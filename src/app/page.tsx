import Link from "next/link";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { categories, getFeaturedProducts } from "@/lib/products";

const promises = [
  { title: "Honest materials", text: "Solid timber, natural fabrics and finishes that age well." },
  { title: "Free delivery over $500", text: "Brought into the room of your choice, packaging taken away." },
  { title: "5-year guarantee", text: "Every frame and joint is covered for five years." },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-clay">
            New season collection
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Furniture made to be lived with.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">
            Sofas, tables and beds in solid timber and natural fabrics, designed
            to look better with every year at home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-clay px-7 py-3 font-medium text-white hover:bg-clay-dark"
            >
              Shop the collection
            </Link>
            <Link
              href="/shop/living-room"
              className="rounded-full border border-ink px-7 py-3 font-medium hover:bg-ink hover:text-cream"
            >
              Living room
            </Link>
          </div>
        </div>
        <ProductArt
          kind="sofa"
          tint="#ece2d3"
          accent="#b4532a"
          className="aspect-[4/3] w-full rounded-3xl"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-3xl font-semibold">Shop by room</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.slug} href={`/shop/${category.slug}`} className="group">
              <ProductArt
                kind={category.art}
                tint={category.tint}
                accent={category.accent}
                className="aspect-[4/3] w-full rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
              />
              <p className="mt-3 font-medium group-hover:underline">{category.name}</p>
              <p className="text-sm text-muted">{category.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold">Customer favourites</h2>
          <Link href="/shop" className="text-sm font-medium underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="grid gap-8 rounded-3xl bg-ink px-8 py-10 text-cream sm:grid-cols-3">
          {promises.map((promise) => (
            <div key={promise.title}>
              <h3 className="font-display text-xl font-semibold">{promise.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{promise.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
