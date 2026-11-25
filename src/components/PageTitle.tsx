/** Oversized page heading with an item count in a ring. */
export function PageTitle({
  children,
  count,
}: {
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <h1 className="display flex items-start gap-3 text-[clamp(3.5rem,13vw,11rem)]">
      {children}
      {count !== undefined && (
        <span className="mt-[0.08em] grid h-[0.5em] w-[0.5em] shrink-0 place-items-center rounded-full border border-line">
          <span className="text-[0.2em] tracking-[-0.03em]">{count}</span>
        </span>
      )}
    </h1>
  );
}
