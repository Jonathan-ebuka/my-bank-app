"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop/living-room", label: "Living room" },
  { href: "/shop/bedroom", label: "Bedroom" },
  { href: "/shop/dining", label: "Dining" },
];

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
          Hearth<span className="text-clay">&amp;</span>Oak
        </Link>
        <nav aria-label="Main" className="hidden gap-7 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/shop" className="text-muted hover:text-ink md:hidden">
            Shop
          </Link>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-1.5 font-medium hover:bg-ink hover:text-cream"
          >
            Cart
            <span
              aria-label={`${count} items in cart`}
              className="grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-xs text-white"
            >
              {count}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
