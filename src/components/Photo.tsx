import Image from "next/image";

/**
 * A cropped photo that fills its box. Size the box with `className`
 * (for example an aspect ratio); `sizes` tells the browser how wide it renders.
 */
export function Photo({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-tile ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        draggable={false}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
