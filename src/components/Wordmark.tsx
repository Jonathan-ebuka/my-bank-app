function Letters({ text }: { text: string }) {
  return text.split("").map((letter, index) => (
    <span key={index} data-letter aria-hidden="true">
      {letter}
    </span>
  ));
}

/**
 * Edge-to-edge store name; each letter is its own element so it can animate.
 * With `stacked`, phones get two taller rows instead of one small line.
 */
export function Wordmark({
  as: Tag = "p",
  stacked = false,
  className = "",
  ...rest
}: {
  as?: "h1" | "p";
  stacked?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag aria-label="Hearth & Oak" className={className} {...rest}>
      <span className={`wordmark ${stacked ? "hidden sm:flex" : ""}`}>
        <Letters text="Hearth&Oak" />
      </span>
      {stacked && (
        <>
          <span className="wordmark wordmark-row sm:hidden">
            <Letters text="Hearth" />
          </span>
          <span className="wordmark wordmark-row justify-start sm:hidden">
            <Letters text="&Oak" />
          </span>
        </>
      )}
    </Tag>
  );
}
