import Link from "next/link";
import {
  categories,
  getProductsByCategory,
  products,
  type CategorySlug,
} from "@/lib/products";

const base =
  "label rounded-full border px-4 py-1.5 whitespace-nowrap transition-colors";
const idle = "border-line hover:border-ink";
const selected = "border-ink bg-ink text-bone";

export function CategoryNav({ active }: { active?: CategorySlug }) {
  return (
    <nav
      aria-label="Categories"
      className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4"
    >
      <Link
        href="/shop"
        aria-current={active ? undefined : "page"}
        className={`${base} ${active ? idle : selected}`}
      >
        All ({products.length})
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/shop/${category.slug}`}
          aria-current={active === category.slug ? "page" : undefined}
          className={`${base} ${active === category.slug ? selected : idle}`}
        >
          {category.name} ({getProductsByCategory(category.slug).length})
        </Link>
      ))}
    </nav>
  );
}
