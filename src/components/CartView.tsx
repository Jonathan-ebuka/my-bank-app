"use client";

import Link from "next/link";
import { clearCart, removeFromCart, setQuantity, useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { ProductArt } from "./ProductArt";

const FREE_DELIVERY_FROM = 500;
const DELIVERY_FEE = 49;

export function CartView() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line px-6 py-16 text-center">
        <p className="font-display text-2xl">Your cart is empty</p>
        <p className="mt-2 text-muted">Find something you&apos;ll love living with.</p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-2.5 font-medium text-cream"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  const delivery = subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <div>
        <ul className="divide-y divide-line border-y border-line">
          {items.map(({ product, quantity }) => (
            <li key={product.slug} className="flex gap-4 py-5">
              <Link href={`/products/${product.slug}`} className="shrink-0">
                <ProductArt
                  kind={product.art}
                  tint={product.tint}
                  accent={product.accent}
                  className="h-24 w-28 rounded-xl sm:h-28 sm:w-36"
                />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div className="flex justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-medium hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="font-medium tabular-nums">
                    {formatPrice(product.price * quantity)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${product.name}`}
                      onClick={() => setQuantity(product.slug, quantity - 1)}
                      className="h-9 w-9"
                    >
                      −
                    </button>
                    <span className="w-6 text-center tabular-nums">{quantity}</span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${product.name}`}
                      onClick={() => setQuantity(product.slug, quantity + 1)}
                      className="h-9 w-9"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.slug)}
                    className="text-muted underline hover:text-ink"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={clearCart}
          className="mt-4 text-sm text-muted underline hover:text-ink"
        >
          Clear cart
        </button>
      </div>

      <aside className="h-fit rounded-2xl bg-sand/60 p-6">
        <h2 className="font-display text-xl font-semibold">Order summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Delivery</dt>
            <dd className="tabular-nums">
              {delivery === 0 ? "Free" : formatPrice(delivery)}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
            <dt>Total</dt>
            <dd className="tabular-nums">{formatPrice(subtotal + delivery)}</dd>
          </div>
        </dl>
        <button
          type="button"
          disabled
          className="mt-6 h-11 w-full cursor-not-allowed rounded-full bg-ink font-medium text-cream opacity-50"
        >
          Checkout
        </button>
        <p className="mt-2 text-center text-xs text-muted">
          Online payment isn&apos;t set up yet.
        </p>
      </aside>
    </div>
  );
}
