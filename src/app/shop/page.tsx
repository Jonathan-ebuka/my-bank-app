import type { Metadata } from "next";
import { CategoryNav } from "@/components/CategoryNav";
import { PageTitle } from "@/components/PageTitle";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Shop all" };

export default function ShopPage() {
  return (
    <div className="px-4 pt-10">
      <PageTitle count={products.length}>All</PageTitle>
      <div className="mt-8">
        <ProductGrid products={products} filters={<CategoryNav />} />
      </div>
    </div>
  );
}
