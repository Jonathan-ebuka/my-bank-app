import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { Photo } from "@/components/Photo";
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
    .slice(0, 4);
  const several = product.images.length > 1;

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_26rem]">
        {/* Photos: a swipeable row on phones, a stacked column on large screens. */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-1 overflow-x-auto lg:block lg:space-y-1 lg:overflow-visible">
          {product.images.map((src, index) => (
            <Photo
              key={src}
              src={src}
              alt={several ? `${product.name}, photo ${index + 1}` : product.name}
              sizes="(min-width: 1024px) calc(100vw - 26rem), 100vw"
              eager={index === 0}
              className={`h-[62svh] shrink-0 snap-center lg:h-[calc(100svh-3rem)] lg:w-full ${
                several ? "w-[88vw]" : "w-full"
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col justify-between gap-10 px-4 py-6 lg:sticky lg:top-12 lg:h-[calc(100svh-3rem)] lg:px-6">
          <div>
            <nav aria-label="Breadcrumb" className="label text-muted">
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
              {product.isNew && <span className="text-ink"> / New</span>}
            </nav>
            <h1 className="display mt-6 text-5xl">{product.name}</h1>
            <p className="mt-6 text-muted">{product.description}</p>
            <dl className="label mt-8 border-t border-line">
              <div className="flex justify-between gap-6 border-b border-line py-3">
                <dt className="text-muted">Material</dt>
                <dd className="text-right">{product.material}</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="text-6xl font-light tracking-[-0.06em] tabular-nums">
              {formatPrice(product.price)}
            </p>
            <div className="mt-6">
              <AddToCart slug={product.slug} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="px-4 pt-24">
          <h2 className="display text-4xl sm:text-5xl">
            More {category?.name}
          </h2>
          <div
            data-reveal-group
            className="mt-8 grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 xl:grid-cols-4"
          >
            {related.map((other) => (
              <div key={other.slug} data-reveal-item>
                <ProductCard product={other} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
