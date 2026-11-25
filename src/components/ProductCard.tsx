import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      draggable={false}
      className="group block"
    >
      <div className="relative overflow-hidden">
        <ProductArt
          kind={product.art}
          tint={product.tint}
          accent={product.accent}
          className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {product.isNew && (
          <span className="label absolute left-3 top-3 rounded-full border border-ink px-2.5 py-0.5">
            New
          </span>
        )}
      </div>
      <div className="px-1 pt-3">
        <h3 className="label flex items-center gap-2">
          {product.name}
          <span
            aria-hidden="true"
            className="hidden h-px w-4 shrink-0 bg-current transition-[width] duration-300 group-hover:w-10 sm:block"
          />
        </h3>
        <p className="mt-1 text-3xl font-light tracking-[-0.05em] tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
