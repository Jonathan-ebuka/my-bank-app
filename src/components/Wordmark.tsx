const LETTERS = "Hearth&Oak".split("");

/** Edge-to-edge store name; each letter is its own span so it can animate. */
export function Wordmark({
  as: Tag = "p",
  className = "",
  ...rest
}: {
  as?: "h1" | "p";
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag aria-label="Hearth & Oak" className={`wordmark ${className}`} {...rest}>
      {LETTERS.map((letter, index) => (
        <span key={index} aria-hidden="true">
          {letter}
        </span>
      ))}
    </Tag>
  );
}
