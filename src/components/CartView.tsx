"use client";

import Link from "next/link";
import { clearCart, removeFromCart, setQuantity, useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { PageTitle } from "./PageTitle";
import { PillLink } from "./Pill";
import { ProductArt } from "./ProductArt";

const FREE_DELIVERY_FROM = 500;
const DELIVERY_FEE = 49;

export function CartView() {
  const { items, count, subtotal } = useCart();
  const delivery = subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;

  return (
    <div className="px-4 pt-10">
      <PageTitle count={count}>Cart</PageTitle>

      {items.length === 0 ? (
        <div className="mt-10 border-t border-line pt-8">
          <p className="max-w-sm text-lg text-muted">
            Your cart is empty at the moment. Find something you&apos;ll love
            living with.
          </p>
          <div className="mt-6">
            <PillLink href="/shop">Continue shopping</PillLink>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_24rem]">
          <div>
            <ul className="border-t border-line">
              {items.map(({ product, quantity }) => (
                <li key={product.slug} className="flex gap-4 border-b border-line py-4">
                  <Link href={`/products/${product.slug}`} className="shrink-0">
                    <ProductArt
                      kind={product.art}
                      tint={product.tint}
                      accent={product.accent}
                      className="h-28 w-28 sm:h-36 sm:w-36"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                    <div className="flex flex-wrap justify-between gap-x-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="label hover:opacity-60"
                      >
                        {product.name}
                      </Link>
                      <p className="text-2xl font-light tracking-[-0.05em] tabular-nums">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </div>
                    <div className="label flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-line">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${product.name}`}
                          onClick={() => setQuantity(product.slug, quantity - 1)}
                          className="h-9 w-9 text-base"
                        >
                          −
                        </button>
                        <span className="w-6 text-center tabular-nums">{quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${product.name}`}
                          onClick={() => setQuantity(product.slug, quantity + 1)}
                          className="h-9 w-9 text-base"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.slug)}
                        className="label text-muted underline underline-offset-4 hover:text-ink"
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
              className="label mt-4 text-muted underline underline-offset-4 hover:text-ink"
            >
              Clear cart
            </button>
          </div>

          <aside className="h-fit bg-tile p-6 lg:sticky lg:top-16">
            <h2 className="label">Order summary</h2>
            <dl className="label mt-6 space-y-3">
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
              <div className="flex items-end justify-between border-t border-line pt-4">
                <dt>Total</dt>
                <dd className="text-5xl font-light normal-case tracking-[-0.05em] tabular-nums">
                  {formatPrice(subtotal + delivery)}
                </dd>
              </div>
            </dl>
            <button
              type="button"
              disabled
              className="label mt-8 h-11 w-full cursor-not-allowed rounded-full bg-ink text-bone opacity-40"
            >
              Checkout
            </button>
            <p className="label mt-3 text-center text-muted">
              Online payment isn&apos;t set up yet
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
