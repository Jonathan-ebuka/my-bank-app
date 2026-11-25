import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { getCategory, type Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        <ProductArt
          kind={product.art}
          tint={product.tint}
          accent={product.accent}
          className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-cream px-2.5 py-1 text-xs font-medium">
            New
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium group-hover:underline">{product.name}</h3>
          <p className="text-sm text-muted">{getCategory(product.category)?.name}</p>
        </div>
        <p className="font-medium tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
