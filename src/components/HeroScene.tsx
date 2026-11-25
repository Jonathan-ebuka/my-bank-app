/** Illustrated room used as the hero backdrop until real photography is added. */
export function HeroScene({ className }: { className?: string }) {
  const slats = Array.from({ length: 17 }, (_, index) => 512 + index * 36);

  return (
    <svg
      viewBox="0 0 1600 1000"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <rect width="1600" height="1000" fill="#5a4838" />
      <rect y="760" width="1600" height="240" fill="#43352a" />
      <rect y="752" width="1600" height="10" fill="#4d3d30" />

      {/* soft light falling across the wall */}
      <path d="M0 0h620L300 760H0z" fill="#fff" opacity="0.04" />
      <path d="M900 0h260L960 760H740z" fill="#fff" opacity="0.03" />

      {/* framed print */}
      <rect x="1180" y="250" width="190" height="250" fill="#6d5846" />
      <rect x="1200" y="270" width="150" height="210" fill="#e9dfd0" />
      <circle cx="1275" cy="350" r="42" fill="#c8672e" />
      <rect x="1200" y="410" width="150" height="70" fill="#a98c6c" />

      {/* floor lamp */}
      <rect x="296" y="420" width="8" height="390" fill="#2c231c" />
      <ellipse cx="300" cy="812" rx="60" ry="10" fill="#2c231c" />
      <path d="M240 420h120l-28-130h-64z" fill="#e9dfd0" />
      <path d="M210 420h180L520 812H80z" fill="#f4f0ea" opacity="0.05" />

      {/* slatted bench */}
      <ellipse cx="820" cy="842" rx="400" ry="16" fill="#2c231c" opacity="0.45" />
      {slats.map((x) => (
        <rect key={x} x={x} y="520" width="12" height="150" fill="#a8733f" />
      ))}
      <rect x="490" y="500" width="660" height="26" rx="8" fill="#b9824a" />
      <rect x="470" y="500" width="30" height="340" rx="8" fill="#9a6a3c" />
      <rect x="1140" y="500" width="30" height="340" rx="8" fill="#9a6a3c" />
      <rect x="470" y="690" width="700" height="34" rx="8" fill="#b9824a" />
      <rect x="470" y="590" width="700" height="18" rx="8" fill="#9a6a3c" />
      {/* cushions */}
      <rect x="506" y="640" width="314" height="64" rx="22" fill="#f4f0ea" />
      <rect x="826" y="640" width="314" height="64" rx="22" fill="#f4f0ea" />
      <rect x="520" y="540" width="150" height="112" rx="26" fill="#ece5d8" />
      <rect x="990" y="548" width="136" height="104" rx="26" fill="#c8672e" />

      {/* plant */}
      <rect x="1372" y="700" width="96" height="112" rx="10" fill="#c8672e" />
      <path d="M1420 700c-10-120-70-170-110-190 60 0 100 60 110 120 0-110 30-190 70-230-10 90-30 180-50 240 30-70 80-110 120-120-50 40-100 110-120 180z" fill="#7b8a63" />
    </svg>
  );
}
