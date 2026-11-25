"use client";

import Link from "next/link";
import { useState } from "react";
import { addToCart } from "@/lib/cart";

export function AddToCart({ slug }: { slug: string }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-ink">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="h-11 w-11 text-lg"
          >
            −
          </button>
          <span aria-live="polite" className="w-8 text-center tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => value + 1)}
            className="h-11 w-11 text-lg"
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
          className="h-11 flex-1 rounded-full bg-clay px-8 font-medium text-white hover:bg-clay-dark"
        >
          Add to cart
        </button>
      </div>
      <p role="status" className="mt-3 min-h-5 text-sm text-muted">
        {added && (
          <>
            Added to your cart.{" "}
            <Link href="/cart" className="font-medium text-ink underline">
              View cart
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
