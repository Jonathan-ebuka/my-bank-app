import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { PageTitle } from "@/components/PageTitle";
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
  const items = getProductsByCategory(category.slug);

  return (
    <div className="px-4 pt-10">
      <PageTitle count={items.length}>{category.name}</PageTitle>
      <p className="mt-4 max-w-sm text-lg text-muted">{category.blurb}</p>
      <div className="mt-8">
        <ProductGrid
          products={items}
          filters={<CategoryNav active={category.slug} />}
        />
      </div>
    </div>
  );
}
