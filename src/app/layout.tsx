// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import React from "react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primedoorsupply.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FenceGrid — Interior Door Sales & Installation",
  description:
    "Measurement, supply, and professional installation of interior doors in Citrus County & nearby areas. Fast, clean, and reliable.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FenceGrid — Interior Door Sales & Installation",
    description:
      "Interior door measurement, supply, and installation. Fast, clean, and reliable.",
    url: siteUrl,
    siteName: "FenceGrid",
    images: [{ url: "/opengraph-image.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
