import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Motion } from "@/components/Motion";
import "./globals.css";

const grotesk = Hanken_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hearth & Oak — Furniture made to be lived with",
    template: "%s — Hearth & Oak",
  },
  description:
    "Considered furniture for the living room, bedroom, dining room and home office.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
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
