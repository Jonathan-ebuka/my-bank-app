"use client";

import { useSyncExternalStore } from "react";
import { getProduct, type Product } from "./products";

export interface CartLine {
  slug: string;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

const STORAGE_KEY = "slyko-living-cart";
const EMPTY: CartLine[] = [];

let lines: CartLine[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function read(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter(
      (line): line is CartLine =>
        typeof line?.slug === "string" &&
        Number.isInteger(line?.quantity) &&
        line.quantity > 0 &&
        getProduct(line.slug) !== undefined,
    );
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (loaded) return;
  loaded = true;
  lines = read();
}

function commit(next: CartLine[]) {
  lines = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be unavailable (private mode); the cart still works in memory.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    lines = read();
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  ensureLoaded();
  return lines;
}

function getServerSnapshot() {
  return EMPTY;
}

export function addToCart(slug: string, quantity = 1) {
  ensureLoaded();
  const existing = lines.find((line) => line.slug === slug);
  commit(
    existing
      ? lines.map((line) =>
          line.slug === slug
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        )
      : [...lines, { slug, quantity }],
  );
}

export function setQuantity(slug: string, quantity: number) {
  ensureLoaded();
  commit(
    quantity <= 0
      ? lines.filter((line) => line.slug !== slug)
      : lines.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
  );
}

export function removeFromCart(slug: string) {
  setQuantity(slug, 0);
}

export function clearCart() {
  commit(EMPTY);
}

export function useCart() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const items: CartItem[] = current.flatMap((line) => {
    const product = getProduct(line.slug);
    return product ? [{ product, quantity: line.quantity }] : [];
  });
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  return { items, count, subtotal };
}
