"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import {
  FREE_DELIVERY_LABEL,
  LOCATION,
  RETURNS_LABEL,
  STORE_NAME,
  WARRANTY_LABEL,
} from "@/lib/format";
import { categories } from "@/lib/products";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop all" },
  ...categories.map((category) => ({
    href: `/shop/${category.slug}`,
    label: category.name,
  })),
  { href: "/cart", label: "Cart" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bone/80 text-ink backdrop-blur-md">
        <div className="label grid h-12 grid-cols-3 items-center px-4">
          {/* The logo does a full reload of the home page so it restarts from the top. */}
          <Link
            href="/"
            onClick={(event) => {
              event.preventDefault();
              history.scrollRestoration = "manual";
              // A deliberate hard reload, not a client-side route change.
              // eslint-disable-next-line @next/next/no-location-assign-relative-destination
              window.location.assign("/");
            }}
            className="flex h-12 items-center justify-self-start"
          >
            {STORE_NAME}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
            className="label flex h-12 items-center gap-2 justify-self-center px-3"
          >
            <span aria-hidden="true" className="relative block h-2 w-6">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
          <div className="flex items-center gap-6 justify-self-end">
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="hidden h-12 items-center hover:opacity-60 sm:flex"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              aria-label={`Cart, ${count} items`}
              className="flex h-12 items-center hover:opacity-60"
            >
              Cart ({count})
            </Link>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        data-lenis-prevent
        inert={!open}
        className={`fixed inset-0 z-30 flex flex-col justify-between overflow-y-auto bg-bone px-4 pb-6 pt-20 transition-[clip-path,visibility] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] ${
          open
            ? "visible [clip-path:inset(0)]"
            : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label="Main">
          <ul>
            {menuLinks.map((link, index) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-2 sm:py-3"
                >
                  <span className="label w-6 text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[clamp(2rem,6.5vh,4.5rem)] transition-transform duration-300 group-hover:translate-x-3">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="label mt-8 text-muted">
{LOCATION} · {FREE_DELIVERY_LABEL} · {RETURNS_LABEL} · {WARRANTY_LABEL}
        </p>
      </div>
    </>
  );
}
