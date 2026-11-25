"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const sorters: Record<SortKey, (a: Product, b: Product) => number> = {
  featured: (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

export function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>("featured");
  const sorted = [...products].sort(sorters[sort]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4 text-sm">
        <p className="text-muted">
          {products.length} {products.length === 1 ? "piece" : "pieces"}
        </p>
        <label className="flex items-center gap-2">
          <span className="text-muted">Sort by</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="rounded-full border border-line bg-cream px-3 py-1.5"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
