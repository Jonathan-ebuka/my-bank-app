import Link from "next/link";
import {
  FREE_DELIVERY_LABEL,
  RETURNS_LABEL,
  WARRANTY_LABEL,
} from "@/lib/format";
import { categories } from "@/lib/products";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ember text-bone">
      <div aria-hidden="true" className="grain absolute inset-0 opacity-60 mix-blend-multiply" />
      <div className="relative">
        <div className="grid gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <p className="display max-w-xs text-3xl lg:col-span-2">
            Furniture made to be lived with.
          </p>
          <div>
            <p className="label text-bone/60">Shop</p>
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
            <p className="label text-bone/60">Good to know</p>
            <ul className="label mt-4 space-y-2">
              <li>{FREE_DELIVERY_LABEL}</li>
              <li>{RETURNS_LABEL}</li>
              <li>{WARRANTY_LABEL}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line-light pt-4">
          <Wordmark />
        </div>
      </div>
    </footer>
  );
}
