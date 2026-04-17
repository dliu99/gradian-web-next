import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marks | Download Today",
  description:
    "The #1 interface for Infinite Campus",
  keywords: [
    "Infinite Campus",
    "Marks app",
    "Bessy",
    "Bessy app",
    "Marks infinite campus"
  ],
  authors: [{ name: "Gradian" }],
  openGraph: {
    title: "Gradian — Master Your Grades",
    description:
      "Seamlessly sync with Infinite Campus, predict final grades instantly, and manage your schedule.",
    url: "https://marks.cx",
    siteName: "Gradian",
    images: [
      {
        url: "/simulator-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Marks App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marks | Download Today",
    description:
      "The #1 interface for Infinite Campus",
    images: ["/simulator-screenshot.png"],
  },
  metadataBase: new URL("https://marks.cx"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-black text-[#f5f5f7]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
