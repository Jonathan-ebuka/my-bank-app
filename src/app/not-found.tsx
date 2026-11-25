import { PageTitle } from "@/components/PageTitle";
import { PillLink } from "@/components/Pill";

export default function NotFound() {
  return (
    <div className="px-4 pt-10">
      <PageTitle>Not found</PageTitle>
      <p className="mt-6 max-w-sm text-lg text-muted">
        This page may have moved, or the piece is no longer in the collection.
      </p>
      <div className="mt-6">
        <PillLink href="/shop">Back to the shop</PillLink>
      </div>
    </div>
  );
}
