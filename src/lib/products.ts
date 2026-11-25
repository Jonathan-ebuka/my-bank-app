export type CategorySlug =
  | "coffee-tables"
  | "shelves"
  | "nightstands"
  | "credenzas"
  | "cabinets";

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Price in whole Nigerian naira. */
  price: number;
  description: string;
  material: string;
  /** Photo paths under /public, main photo first. */
  images: string[];
  featured?: boolean;
  isNew?: boolean;
}

export const categories: Category[] = [
  {
    slug: "coffee-tables",
    name: "Coffee tables",
    blurb: "Low, sculptural tables to gather the room around.",
  },
  {
    slug: "shelves",
    name: "Shelves",
    blurb: "Open shelving for books, objects and everything between.",
  },
  {
    slug: "nightstands",
    name: "Nightstands",
    blurb: "Quiet bedside companions with room for the essentials.",
  },
  {
    slug: "credenzas",
    name: "Credenzas",
    blurb: "Long, low storage for the living room.",
  },
  {
    slug: "cabinets",
    name: "Cabinets",
    blurb: "Closed storage with real presence.",
  },
];

export const products: Product[] = [
  {
    slug: "arco-coffee-table",
    name: "Arco Coffee Table",
    category: "coffee-tables",
    price: 480_000,
    description:
      "A single sweep of dark timber that folds from top to leg in one soft curve.",
    material: "Dark walnut finish",
    images: ["/products/arco-coffee-table-1.jpg"],
    featured: true,
  },
  {
    slug: "sora-coffee-table",
    name: "Sora Coffee Table",
    category: "coffee-tables",
    price: 390_000,
    description:
      "A warm, honey-toned waterfall table with rounded shoulders and visible grain.",
    material: "Solid acacia",
    images: ["/products/sora-coffee-table-1.jpg"],
  },
  {
    slug: "pebble-nesting-tables",
    name: "Pebble Nesting Tables",
    category: "coffee-tables",
    price: 520_000,
    description:
      "Two rounded tables that tuck together or drift apart as the room needs.",
    material: "Walnut finish",
    images: ["/products/pebble-nesting-tables-1.jpg"],
    isNew: true,
  },
  {
    slug: "kumo-coffee-table",
    name: "Kumo Coffee Table",
    category: "coffee-tables",
    price: 450_000,
    description:
      "A long, pale top floating on a cross-shaped base, with a stepped edge detail.",
    material: "Ash veneer",
    images: ["/products/kumo-coffee-table-1.jpg"],
  },
  {
    slug: "duo-nesting-table",
    name: "Duo Nesting Table",
    category: "coffee-tables",
    price: 560_000,
    description:
      "Two waterfall tables, one sliding over the other, for a surface that grows on demand.",
    material: "Solid oak",
    images: ["/products/duo-nesting-table-1.jpg"],
    featured: true,
  },
  {
    slug: "elle-coffee-tables",
    name: "Elle Coffee Tables",
    category: "coffee-tables",
    price: 540_000,
    description:
      "A pair of L-shaped tables that interlock into one or split into two.",
    material: "Walnut finish",
    images: ["/products/elle-coffee-tables-1.jpg"],
  },
  {
    slug: "loop-coffee-table",
    name: "Loop Coffee Table",
    category: "coffee-tables",
    price: 430_000,
    description:
      "An open, rounded frame with a shelf beneath for books and trays.",
    material: "Solid acacia",
    images: ["/products/loop-coffee-table-1.jpg"],
  },
  {
    slug: "orbit-display-shelf",
    name: "Orbit Display Shelf",
    category: "shelves",
    price: 1_250_000,
    description:
      "A statement shelf with pill-shaped boards and sliding panels in timber, stone and woven finishes.",
    material: "Oak with mixed-material panels",
    images: ["/products/orbit-display-shelf-1.jpg"],
    featured: true,
  },
  {
    slug: "porthole-bookshelf",
    name: "Porthole Bookshelf",
    category: "shelves",
    price: 890_000,
    description:
      "Two tiers of walnut with round cut-outs in every upright, as good empty as it is full.",
    material: "Solid walnut",
    images: [
      "/products/porthole-bookshelf-1.jpg",
      "/products/porthole-bookshelf-2.jpg",
    ],
    featured: true,
  },
  {
    slug: "cubby-console-shelf",
    name: "Cubby Console Shelf",
    category: "shelves",
    price: 620_000,
    description:
      "Four softly rounded cubbies on slim legs, sized for a hallway or behind a sofa.",
    material: "Walnut finish",
    images: ["/products/cubby-console-shelf-1.jpg"],
  },
  {
    slug: "dowel-shelf",
    name: "Dowel Shelf",
    category: "shelves",
    price: 340_000,
    description:
      "Three light shelves threaded onto round oak posts.",
    material: "Solid oak",
    images: ["/products/dowel-shelf-1.jpg"],
  },
  {
    slug: "slot-shelf",
    name: "Slot Shelf",
    category: "shelves",
    price: 480_000,
    description:
      "Boards and uprights that slot together without fixings. Shown in natural ash and with red edges.",
    material: "Ash, natural or red-edged",
    images: [
      "/products/slot-shelf-1.jpg",
      "/products/slot-shelf-2.jpg",
    ],
    isNew: true,
  },
  {
    slug: "rosso-steel-shelf",
    name: "Rosso Steel Shelf",
    category: "shelves",
    price: 560_000,
    description:
      "A tall, slim shelf in a confident red that turns storage into the focal point.",
    material: "Powder-coated steel",
    images: [
      "/products/rosso-steel-shelf-1.jpg",
      "/products/rosso-steel-shelf-2.jpg",
    ],
  },
  {
    slug: "ply-low-shelf",
    name: "Ply Low Shelf",
    category: "shelves",
    price: 290_000,
    description:
      "A compact three-tier shelf with exposed plywood edges.",
    material: "Birch plywood",
    images: [
      "/products/ply-low-shelf-1.jpg",
      "/products/ply-low-shelf-2.jpg",
    ],
  },
  {
    slug: "reed-nightstand",
    name: "Reed Nightstand",
    category: "nightstands",
    price: 310_000,
    description:
      "Two deep drawers with fluted fronts inside a softly rounded frame.",
    material: "Solid timber with fluted drawer fronts",
    images: ["/products/reed-nightstand-1.jpg"],
    featured: true,
  },
  {
    slug: "fold-nightstand",
    name: "Fold Nightstand",
    category: "nightstands",
    price: 240_000,
    description:
      "One curved sheet of oak forms the top and sides, with a single drawer set beneath.",
    material: "Oak veneer",
    images: ["/products/fold-nightstand-1.jpg"],
  },
  {
    slug: "dune-nightstand",
    name: "Dune Nightstand",
    category: "nightstands",
    price: 280_000,
    description:
      "Two handle-free drawers under a rounded top.",
    material: "Walnut finish",
    images: ["/products/dune-nightstand-1.jpg"],
    isNew: true,
  },
  {
    slug: "cane-side-table",
    name: "Cane Side Table",
    category: "nightstands",
    price: 195_000,
    description:
      "Bent rattan arches over an open shelf for books and magazines.",
    material: "Rattan",
    images: ["/products/cane-side-table-1.jpg"],
  },
  {
    slug: "bubble-credenza",
    name: "Bubble Credenza",
    category: "credenzas",
    price: 720_000,
    description:
      "A low block with circles and pills carved out for books, records and speakers. Shown in three finishes.",
    material: "Lacquered timber or wood finish",
    images: [
      "/products/bubble-credenza-1.jpg",
      "/products/bubble-credenza-2.jpg",
      "/products/bubble-credenza-3.jpg",
    ],
    featured: true,
    isNew: true,
  },
  {
    slug: "clay-low-credenza",
    name: "Clay Low Credenza",
    category: "credenzas",
    price: 840_000,
    description:
      "Four handle-free doors in a terracotta finish, set low to the floor.",
    material: "Matte lacquer",
    images: ["/products/clay-low-credenza-1.jpg"],
  },
  {
    slug: "birch-sideboard",
    name: "Birch Sideboard",
    category: "credenzas",
    price: 780_000,
    description:
      "Four flush doors in pale birch, lifted on two recessed plinths.",
    material: "Birch plywood",
    images: ["/products/birch-sideboard-1.jpg"],
  },
  {
    slug: "olive-media-unit",
    name: "Olive Media Unit",
    category: "credenzas",
    price: 650_000,
    description:
      "Two doors, a drawer and an open shelf in a deep olive finish.",
    material: "Lacquered timber",
    images: ["/products/olive-media-unit-1.jpg"],
  },
  {
    slug: "long-walnut-console",
    name: "Long Walnut Console",
    category: "credenzas",
    price: 920_000,
    description:
      "Two long boards and four uprights. Low, open and generously long.",
    material: "Solid walnut",
    images: ["/products/long-walnut-console-1.jpg"],
    featured: true,
  },
  {
    slug: "nook-media-console",
    name: "Nook Media Console",
    category: "credenzas",
    price: 540_000,
    description:
      "A low console with open compartments at different heights. Shown in oak and walnut.",
    material: "Oak or walnut finish",
    images: [
      "/products/nook-media-console-1.jpg",
      "/products/nook-media-console-2.jpg",
    ],
  },
  {
    slug: "dowel-low-bench",
    name: "Dowel Low Bench",
    category: "credenzas",
    price: 380_000,
    description:
      "A long, two-tier bench on round posts for a hallway or under a window.",
    material: "Solid oak",
    images: ["/products/dowel-low-bench-1.jpg"],
  },
  {
    slug: "arch-burl-dresser",
    name: "Arch Burl Dresser",
    category: "cabinets",
    price: 1_150_000,
    description:
      "Six drawers with burl fronts set under three soft arches.",
    material: "Timber with burl-veneer drawer fronts",
    images: ["/products/arch-burl-dresser-1.jpg"],
    featured: true,
  },
  {
    slug: "olive-cabinet",
    name: "Olive Cabinet",
    category: "cabinets",
    price: 690_000,
    description:
      "Three doors over three drawers in a deep olive finish.",
    material: "Lacquered timber",
    images: ["/products/olive-cabinet-1.jpg"],
  },
  {
    slug: "arch-console-cabinet",
    name: "Arch Console Cabinet",
    category: "cabinets",
    price: 980_000,
    description:
      "A tall, slim console with arched openings and boldly figured drawer fronts.",
    material: "Ash with figured-veneer drawer fronts",
    images: ["/products/arch-console-cabinet-1.jpg"],
    isNew: true,
  },
  {
    slug: "record-cabinet",
    name: "Record Cabinet",
    category: "cabinets",
    price: 610_000,
    description:
      "A home for a turntable on top and four bays of records below.",
    material: "Oak veneer",
    images: ["/products/record-cabinet-1.jpg"],
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
