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

export function ProductGrid({
  products,
  filters,
}: {
  products: Product[];
  filters?: React.ReactNode;
}) {
  const [sort, setSort] = useState<SortKey>("featured");
  const sorted = [...products].sort(sorters[sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {filters}
        <label className="label flex items-center gap-2 rounded-full border border-line py-1.5 pl-4 pr-2">
          <span className="text-muted">Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="label bg-transparent pr-1 outline-offset-4"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
        {sorted.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
