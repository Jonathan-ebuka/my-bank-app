import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { formatPrice } from "@/lib/format";
import {
  getCategory,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((other) => other.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        {category && (
          <>
            {" / "}
            <Link href={`/shop/${category.slug}`} className="hover:text-ink">
              {category.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <ProductArt
          kind={product.art}
          tint={product.tint}
          accent={product.accent}
          className="aspect-[4/3] w-full rounded-3xl"
        />
        <div>
          {product.isNew && (
            <p className="text-sm font-medium uppercase tracking-widest text-clay">New</p>
          )}
          <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl tabular-nums">{formatPrice(product.price)}</p>
          <p className="mt-5 text-muted">{product.description}</p>

          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-muted">Material</dt>
              <dd className="text-right">{product.material}</dd>
            </div>
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-muted">Dimensions</dt>
              <dd className="text-right">{product.dimensions}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <AddToCart slug={product.slug} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold">
            More from {category?.name.toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((other) => (
              <ProductCard key={other.slug} product={other} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
