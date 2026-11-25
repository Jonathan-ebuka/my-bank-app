const LETTERS = "Hearth&Oak".split("");

export function Wordmark({
  as: Tag = "p",
  animate = false,
}: {
  as?: "h1" | "p";
  animate?: boolean;
}) {
  return (
    <Tag
      aria-label="Hearth & Oak"
      className={`wordmark ${animate ? "wordmark-rise" : ""}`}
    >
      {LETTERS.map((letter, index) => (
        <span
          key={index}
          aria-hidden="true"
          style={{ "--i": index } as React.CSSProperties}
        >
          {letter}
        </span>
      ))}
    </Tag>
  );
}
