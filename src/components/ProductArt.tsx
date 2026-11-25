import type { ArtKind } from "@/lib/products";

interface ProductArtProps {
  kind: ArtKind;
  tint: string;
  accent: string;
  className?: string;
}

const WOOD = "#5b4332";
const SHADE = "rgba(42, 36, 31, 0.14)";
const LIGHT = "rgba(255, 255, 255, 0.28)";

function Piece({ kind, accent }: { kind: ArtKind; accent: string }) {
  switch (kind) {
    case "sofa":
      return (
        <>
          <rect x="40" y="62" width="160" height="50" rx="14" fill={accent} />
          <rect x="40" y="62" width="160" height="50" rx="14" fill={SHADE} />
          <rect x="24" y="78" width="30" height="50" rx="12" fill={accent} />
          <rect x="186" y="78" width="30" height="50" rx="12" fill={accent} />
          <rect x="50" y="94" width="68" height="26" rx="8" fill={accent} />
          <rect x="122" y="94" width="68" height="26" rx="8" fill={accent} />
          <rect x="50" y="94" width="68" height="8" rx="4" fill={LIGHT} />
          <rect x="122" y="94" width="68" height="8" rx="4" fill={LIGHT} />
          <rect x="36" y="128" width="6" height="12" rx="2" fill={WOOD} />
          <rect x="198" y="128" width="6" height="12" rx="2" fill={WOOD} />
        </>
      );
    case "armchair":
      return (
        <>
          <rect x="78" y="48" width="84" height="64" rx="22" fill={accent} />
          <rect x="78" y="48" width="84" height="64" rx="22" fill={SHADE} />
          <rect x="62" y="80" width="26" height="46" rx="11" fill={accent} />
          <rect x="152" y="80" width="26" height="46" rx="11" fill={accent} />
          <rect x="84" y="94" width="72" height="28" rx="9" fill={accent} />
          <rect x="84" y="94" width="72" height="8" rx="4" fill={LIGHT} />
          <path d="M74 126 l-6 16" stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
          <path d="M166 126 l6 16" stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case "table":
      return (
        <>
          <rect x="34" y="72" width="172" height="14" rx="6" fill={accent} />
          <rect x="34" y="72" width="172" height="5" rx="2.5" fill={LIGHT} />
          <path d="M54 86 l-8 54" stroke={accent} strokeWidth="7" strokeLinecap="round" />
          <path d="M186 86 l8 54" stroke={accent} strokeWidth="7" strokeLinecap="round" />
          <path d="M54 86 l-8 54" stroke={SHADE} strokeWidth="7" strokeLinecap="round" />
          <path d="M186 86 l8 54" stroke={SHADE} strokeWidth="7" strokeLinecap="round" />
        </>
      );
    case "chair":
      return (
        <>
          <rect x="88" y="34" width="64" height="40" rx="12" fill={accent} />
          <rect x="88" y="34" width="64" height="12" rx="6" fill={LIGHT} />
          <rect x="94" y="72" width="6" height="22" fill={WOOD} />
          <rect x="140" y="72" width="6" height="22" fill={WOOD} />
          <rect x="80" y="90" width="80" height="14" rx="6" fill={accent} />
          <rect x="80" y="90" width="80" height="14" rx="6" fill={SHADE} />
          <path d="M90 104 l-6 38" stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
          <path d="M150 104 l6 38" stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case "bed":
      return (
        <>
          <rect x="30" y="40" width="180" height="62" rx="12" fill={accent} />
          <rect x="30" y="40" width="180" height="62" rx="12" fill={SHADE} />
          <rect x="24" y="88" width="192" height="36" rx="10" fill="#f8f4ec" />
          <rect x="24" y="102" width="192" height="22" rx="8" fill={accent} />
          <rect x="46" y="74" width="62" height="24" rx="10" fill="#ffffff" />
          <rect x="132" y="74" width="62" height="24" rx="10" fill="#ffffff" />
          <rect x="34" y="124" width="8" height="14" rx="2" fill={WOOD} />
          <rect x="198" y="124" width="8" height="14" rx="2" fill={WOOD} />
        </>
      );
    case "shelf":
      return (
        <>
          <rect x="74" y="18" width="92" height="124" rx="4" fill={accent} />
          {[26, 55, 84, 113].map((y) => (
            <rect key={y} x="82" y={y} width="76" height="23" fill="rgba(42,36,31,0.32)" />
          ))}
          <rect x="88" y="32" width="6" height="17" fill="#f8f4ec" />
          <rect x="96" y="29" width="7" height="20" fill="#b4532a" />
          <rect x="105" y="34" width="5" height="15" fill="#6f7f63" />
          <rect x="128" y="63" width="22" height="15" rx="2" fill="#f8f4ec" />
          <rect x="88" y="92" width="7" height="15" fill="#c08a2b" />
          <rect x="97" y="89" width="6" height="18" fill="#f8f4ec" />
          <circle cx="140" cy="126" r="8" fill="#6f7f63" />
        </>
      );
    case "desk":
      return (
        <>
          <rect x="30" y="64" width="180" height="12" rx="5" fill={accent} />
          <rect x="30" y="64" width="180" height="4" rx="2" fill={LIGHT} />
          <rect x="132" y="76" width="68" height="34" rx="3" fill={accent} />
          <rect x="132" y="76" width="68" height="34" rx="3" fill={SHADE} />
          <rect x="158" y="84" width="16" height="3" rx="1.5" fill="#f8f4ec" />
          <rect x="158" y="99" width="16" height="3" rx="1.5" fill="#f8f4ec" />
          <rect x="40" y="76" width="6" height="66" rx="2" fill={WOOD} />
          <rect x="194" y="110" width="6" height="32" rx="2" fill={WOOD} />
          <rect x="60" y="46" width="34" height="18" rx="2" fill="#f8f4ec" />
        </>
      );
    case "lamp":
      return (
        <>
          <path d="M98 24 h44 l14 44 h-72 z" fill={accent} />
          <path d="M98 24 h44 l4 12 h-52 z" fill={LIGHT} />
          <rect x="117" y="68" width="6" height="64" fill={WOOD} />
          <ellipse cx="120" cy="136" rx="30" ry="6" fill={WOOD} />
        </>
      );
    case "nightstand":
      return (
        <>
          <rect x="76" y="50" width="88" height="72" rx="6" fill={accent} />
          <rect x="84" y="58" width="72" height="26" rx="3" fill={SHADE} />
          <rect x="84" y="90" width="72" height="26" rx="3" fill={SHADE} />
          <rect x="112" y="69" width="16" height="4" rx="2" fill="#f8f4ec" />
          <rect x="112" y="101" width="16" height="4" rx="2" fill="#f8f4ec" />
          <rect x="84" y="122" width="6" height="20" rx="2" fill={WOOD} />
          <rect x="150" y="122" width="6" height="20" rx="2" fill={WOOD} />
        </>
      );
  }
}

export function ProductArt({ kind, tint, accent, className }: ProductArtProps) {
  return (
    <svg
      viewBox="0 0 240 160"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ backgroundColor: tint }}
    >
      <ellipse cx="120" cy="142" rx="92" ry="6" fill="rgba(42, 36, 31, 0.1)" />
      <Piece kind={kind} accent={accent} />
    </svg>
  );
}
