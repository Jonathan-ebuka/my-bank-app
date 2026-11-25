import Link from "next/link";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const tones = {
  dark: {
    shell: "border-ink text-ink hover:bg-ink hover:text-bone",
    badge: "bg-ink text-bone group-hover:bg-bone group-hover:text-ink",
  },
  light: {
    shell: "border-bone text-bone hover:bg-bone hover:text-ink",
    badge: "bg-bone text-ink group-hover:bg-ink group-hover:text-bone",
  },
};

export const pillShell =
  "group inline-flex items-center justify-between gap-4 rounded-full border py-1.5 pl-5 pr-1.5 label transition-colors duration-300";
export const pillBadge =
  "grid h-8 w-8 place-items-center rounded-full transition-colors duration-300";

export function PillLink({
  href,
  tone = "dark",
  children,
}: {
  href: string;
  tone?: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${pillShell} ${tones[tone].shell}`}>
      {children}
      <span className={`${pillBadge} ${tones[tone].badge}`}>
        <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export const pillTones = tones;
