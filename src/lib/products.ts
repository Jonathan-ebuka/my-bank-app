export type CategorySlug =
  | "living-room"
  | "bedroom"
  | "dining"
  | "office"
  | "lighting";

export type ArtKind =
  | "sofa"
  | "armchair"
  | "table"
  | "chair"
  | "bed"
  | "shelf"
  | "desk"
  | "lamp"
  | "nightstand";

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
  art: ArtKind;
  tint: string;
  accent: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Price in whole US dollars. */
  price: number;
  description: string;
  material: string;
  dimensions: string;
  art: ArtKind;
  /** Background tint behind the illustration. */
  tint: string;
  /** Main colour of the illustrated piece. */
  accent: string;
  featured?: boolean;
  isNew?: boolean;
}

export const categories: Category[] = [
  {
    slug: "living-room",
    name: "Living room",
    blurb: "Sofas, armchairs and tables to gather around.",
    art: "sofa",
    tint: "#e9e3d7",
    accent: "#b4532a",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    blurb: "Calm, solid pieces for slow mornings.",
    art: "bed",
    tint: "#dfe2d6",
    accent: "#6f7f63",
  },
  {
    slug: "dining",
    name: "Dining",
    blurb: "Tables and chairs made for long dinners.",
    art: "table",
    tint: "#ebe1d3",
    accent: "#9a6a3c",
  },
  {
    slug: "office",
    name: "Home office",
    blurb: "Desks and storage that keep work tidy.",
    art: "desk",
    tint: "#dcdfdc",
    accent: "#4f6672",
  },
  {
    slug: "lighting",
    name: "Lighting",
    blurb: "Warm light for every corner.",
    art: "lamp",
    tint: "#ece4cf",
    accent: "#c08a2b",
  },
];

export const products: Product[] = [
  {
    slug: "alba-three-seater-sofa",
    name: "Alba Three-Seater Sofa",
    category: "living-room",
    price: 1290,
    description:
      "A deep, low sofa with feather-wrapped cushions and a solid oak frame. Generous enough for the whole family, refined enough for the front room.",
    material: "Oak frame, woven linen blend",
    dimensions: "W 220 × D 95 × H 78 cm",
    art: "sofa",
    tint: "#e9e3d7",
    accent: "#b4532a",
    featured: true,
  },
  {
    slug: "nora-lounge-armchair",
    name: "Nora Lounge Armchair",
    category: "living-room",
    price: 540,
    description:
      "A compact armchair with a curved back that holds you just right. Pairs well with a reading lamp and a quiet afternoon.",
    material: "Ash legs, bouclé upholstery",
    dimensions: "W 78 × D 82 × H 80 cm",
    art: "armchair",
    tint: "#dfe2d6",
    accent: "#6f7f63",
    featured: true,
    isNew: true,
  },
  {
    slug: "pebble-coffee-table",
    name: "Pebble Coffee Table",
    category: "living-room",
    price: 320,
    description:
      "A softly rounded coffee table in solid walnut, finished with hard-wax oil so the grain keeps its depth.",
    material: "Solid walnut",
    dimensions: "W 110 × D 60 × H 38 cm",
    art: "table",
    tint: "#ebe1d3",
    accent: "#7a4a2b",
  },
  {
    slug: "linden-bookshelf",
    name: "Linden Bookshelf",
    category: "living-room",
    price: 460,
    description:
      "Five open shelves in a slim frame. Tall enough for a library, light enough not to crowd the room.",
    material: "Oak veneer, steel fixings",
    dimensions: "W 90 × D 32 × H 190 cm",
    art: "shelf",
    tint: "#e6e0d5",
    accent: "#9a6a3c",
  },
  {
    slug: "haven-platform-bed",
    name: "Haven Platform Bed",
    category: "bedroom",
    price: 980,
    description:
      "A low platform bed with an upholstered headboard and slatted base. No box spring needed.",
    material: "Solid oak, wool-blend headboard",
    dimensions: "W 168 × L 212 × H 95 cm (queen)",
    art: "bed",
    tint: "#dfe2d6",
    accent: "#6f7f63",
    featured: true,
  },
  {
    slug: "juno-nightstand",
    name: "Juno Nightstand",
    category: "bedroom",
    price: 210,
    description:
      "Two soft-close drawers and a top just big enough for a book, a glass and a lamp.",
    material: "Solid ash",
    dimensions: "W 45 × D 40 × H 52 cm",
    art: "nightstand",
    tint: "#e9e3d7",
    accent: "#a9793f",
    isNew: true,
  },
  {
    slug: "marlow-dining-table",
    name: "Marlow Dining Table",
    category: "dining",
    price: 1150,
    description:
      "A six-seat dining table with a thick solid top and tapered legs. Built to take decades of dinners.",
    material: "Solid oak",
    dimensions: "W 180 × D 90 × H 75 cm",
    art: "table",
    tint: "#ebe1d3",
    accent: "#9a6a3c",
    featured: true,
  },
  {
    slug: "wren-dining-chair",
    name: "Wren Dining Chair",
    category: "dining",
    price: 185,
    description:
      "A light, stackable chair with a shaped seat and curved backrest. Comfortable long after dessert.",
    material: "Beech, natural lacquer",
    dimensions: "W 46 × D 50 × H 80 cm",
    art: "chair",
    tint: "#e6e0d5",
    accent: "#b4532a",
  },
  {
    slug: "atlas-writing-desk",
    name: "Atlas Writing Desk",
    category: "office",
    price: 620,
    description:
      "A clean-lined desk with two slim drawers and a hidden cable channel along the back edge.",
    material: "Walnut veneer, powder-coated steel",
    dimensions: "W 140 × D 65 × H 74 cm",
    art: "desk",
    tint: "#dcdfdc",
    accent: "#4f6672",
    isNew: true,
  },
  {
    slug: "fern-task-chair",
    name: "Fern Task Chair",
    category: "office",
    price: 275,
    description:
      "A supportive everyday chair with a moulded seat that looks at home outside the office too.",
    material: "Moulded plywood, wool seat pad",
    dimensions: "W 50 × D 52 × H 82 cm",
    art: "chair",
    tint: "#dfe2d6",
    accent: "#4f6672",
  },
  {
    slug: "sol-floor-lamp",
    name: "Sol Floor Lamp",
    category: "lighting",
    price: 240,
    description:
      "A slender floor lamp with a linen shade that throws a warm, even glow. Dimmable foot switch included.",
    material: "Brass-finished steel, linen shade",
    dimensions: "Ø 40 × H 155 cm",
    art: "lamp",
    tint: "#ece4cf",
    accent: "#c08a2b",
    featured: true,
  },
  {
    slug: "ember-table-lamp",
    name: "Ember Table Lamp",
    category: "lighting",
    price: 120,
    description:
      "A small ceramic lamp for bedside tables and bookshelves, glazed by hand in a deep terracotta.",
    material: "Glazed ceramic, cotton shade",
    dimensions: "Ø 24 × H 38 cm",
    art: "lamp",
    tint: "#e9e3d7",
    accent: "#b4532a",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((product) => product.category === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}
