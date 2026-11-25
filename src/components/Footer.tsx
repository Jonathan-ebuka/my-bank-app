import Link from "next/link";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sand/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-xl font-semibold">
            Hearth<span className="text-clay">&amp;</span>Oak
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Considered furniture in honest materials, made to be lived with for
            a long time.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/shop/${category.slug}`} className="hover:text-ink">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Good to know</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Free delivery on orders over $500</li>
            <li>30-day returns</li>
            <li>5-year frame guarantee</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
