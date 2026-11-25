import { STORE_NAME } from "@/lib/format";

const [FIRST, SECOND] = STORE_NAME.split(" ");

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
    <Tag aria-label={STORE_NAME} className={className} {...rest}>
      <span className={`wordmark ${stacked ? "hidden sm:flex" : ""}`}>
        <Letters text={FIRST} />
        <span aria-hidden="true" className="w-[0.3em]" />
        <Letters text={SECOND} />
      </span>
      {stacked && (
        <>
          <span className="wordmark wordmark-row sm:hidden">
            <Letters text={FIRST} />
          </span>
          <span className="wordmark wordmark-row sm:hidden">
            <Letters text={SECOND} />
          </span>
        </>
      )}
    </Tag>
  );
}
