import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.name, description: category.blurb } : {};
}

export default async function CategoryPage({
  params,
}: PageProps<"/shop/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">{category.name}</h1>
      <p className="mt-2 text-muted">{category.blurb}</p>
      <div className="mt-6">
        <CategoryNav active={category.slug} />
      </div>
      <div className="mt-6">
        <ProductGrid products={getProductsByCategory(category.slug)} />
      </div>
    </div>
  );
}
