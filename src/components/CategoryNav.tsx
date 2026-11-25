import Link from "next/link";
import { categories, type CategorySlug } from "@/lib/products";

const base = "rounded-full border px-4 py-1.5 text-sm whitespace-nowrap";
const idle = "border-line text-muted hover:border-ink hover:text-ink";
const selected = "border-ink bg-ink text-cream";

export function CategoryNav({ active }: { active?: CategorySlug }) {
  return (
    <nav aria-label="Categories" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      <Link
        href="/shop"
        aria-current={active ? undefined : "page"}
        className={`${base} ${active ? idle : selected}`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/shop/${category.slug}`}
          aria-current={active === category.slug ? "page" : undefined}
          className={`${base} ${active === category.slug ? selected : idle}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
