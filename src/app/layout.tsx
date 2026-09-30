import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.firmName} · ${site.tagline}`,
  description:
    "Legal counsel and representation in corporate, commercial, property, family and civil matters.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
