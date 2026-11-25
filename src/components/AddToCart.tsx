"use client";

import Link from "next/link";
import { useState } from "react";
import { addToCart } from "@/lib/cart";
import { Arrow, pillBadge, pillShell, pillTones } from "./Pill";

export function AddToCart({ slug }: { slug: string }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="label flex items-center rounded-full border border-ink">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="h-11 w-11 text-base"
          >
            −
          </button>
          <span aria-live="polite" className="w-6 text-center tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => value + 1)}
            className="h-11 w-11 text-base"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            addToCart(slug, quantity);
            setAdded(true);
          }}
          className={`${pillShell} ${pillTones.dark.shell} min-w-48 flex-1`}
        >
          Add to cart
          <span className={`${pillBadge} ${pillTones.dark.badge}`}>
            <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
          </span>
        </button>
      </div>
      <p role="status" className="label mt-3 min-h-5 text-muted">
        {added && (
          <>
            Added to your cart —{" "}
            <Link href="/cart" className="text-ink underline underline-offset-4">
              View cart
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
