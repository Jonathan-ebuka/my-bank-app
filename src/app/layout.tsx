import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Motion } from "@/components/Motion";
import { STORE_NAME } from "@/lib/format";
import "./globals.css";

/**
 * On a refresh, stop the browser from jumping back to where the visitor had
 * scrolled, so the page starts again from the top. This has to run before the
 * page is shown; Motion.tsx hands scroll restoration back afterwards so the
 * back button still returns people to their place.
 */
const START_AT_TOP_ON_REFRESH = `try{var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="reload"){history.scrollRestoration="manual";window.scrollTo(0,0)}}catch(e){}`;

const grotesk = Hanken_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${STORE_NAME} — Modern furniture from Lagos, Nigeria`,
    template: `%s — ${STORE_NAME}`,
  },
  description:
    "A Lagos furniture brand bringing original, minimal and modern coffee tables, shelves, nightstands, credenzas and cabinets to Nigerian homes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Script id="start-at-top" strategy="beforeInteractive">
          {START_AT_TOP_ON_REFRESH}
        </Script>
        <Header />
        <main className="flex-1 pt-12">{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <Motion />
        </Suspense>
      </body>
    </html>
  );
}
