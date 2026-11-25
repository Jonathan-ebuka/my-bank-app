import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-4xl font-semibold">We couldn&apos;t find that page</h1>
      <p className="mt-3 text-muted">It may have moved, or the piece is no longer in the collection.</p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-ink px-6 py-2.5 font-medium text-cream"
      >
        Back to the shop
      </Link>
    </div>
  );
}
