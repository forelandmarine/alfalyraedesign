import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphalyraedesign.com"),
  title: {
    default: "Alpha Lyrae Design",
    template: "%s · Alpha Lyrae Design",
  },
  description:
    "Alpha Lyrae Design. Yacht design, product design, 3D printing and project management. Studio in Rome, Italy.",
  openGraph: {
    title: "Alpha Lyrae Design",
    description:
      "Yacht design, product design, 3D printing and project management. Studio in Rome.",
    url: "https://alphalyraedesign.com",
    siteName: "Alpha Lyrae Design",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-[#0c1a2e] text-[#f5f0e8] antialiased">
        {children}
      </body>
    </html>
  );
}
