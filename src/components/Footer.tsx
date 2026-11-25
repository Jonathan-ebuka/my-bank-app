import Link from "next/link";
import { categories } from "@/lib/products";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="mt-32 bg-ink text-bone">
      <div className="grid gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <p className="display max-w-xs text-3xl lg:col-span-2">
          Furniture made to be lived with.
        </p>
        <div>
          <p className="label text-bone/50">Shop</p>
          <ul className="label mt-4 space-y-2">
            <li>
              <Link href="/shop" className="hover:opacity-60">
                All pieces
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/shop/${category.slug}`} className="hover:opacity-60">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-bone/50">Good to know</p>
          <ul className="label mt-4 space-y-2">
            <li>Free delivery over $500</li>
            <li>30-day returns</li>
            <li>5-year frame guarantee</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line-light pt-4">
        <Wordmark />
      </div>
    </footer>
  );
}
