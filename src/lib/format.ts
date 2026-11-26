/** The store's name, shown in the header, footer, hero and page titles. */
export const STORE_NAME = "Slyko Living";

/** Where the store is based, and the city's map coordinates. */
export const LOCATION = "Lagos, Nigeria";
export const COORDINATES = "6.5244° N, 3.3792° E";

/** The store's currency. Change it here to reprice the whole site's display. */
export const CURRENCY = "NGN";

/** Orders at or above this subtotal are delivered free. */
export const FREE_DELIVERY_FROM = 750_000;

/** Flat delivery charge below the free-delivery threshold. */
export const DELIVERY_FEE = 75_000;

const currency = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: CURRENCY,
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return currency.format(amount);
}

export const FREE_DELIVERY_LABEL = `Free delivery over ${formatPrice(FREE_DELIVERY_FROM)}`;

/** Service promises shown in the menu and footer. */
export const RETURNS_LABEL = "7-day returns";
export const WARRANTY_LABEL = "1-year warranty";
