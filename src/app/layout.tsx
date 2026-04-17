import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gradian — Master Your Grades",
  description:
    "Seamlessly sync with Infinite Campus, predict final grades instantly, and manage your schedule with an intelligent, natively designed iOS experience.",
  keywords: [
    "Infinite Campus",
    "Grades App",
    "Student Planner",
    "Finals Calculator",
    "Gradian",
    "iOS",
  ],
  authors: [{ name: "Gradian" }],
  openGraph: {
    title: "Gradian — Master Your Grades",
    description:
      "Seamlessly sync with Infinite Campus, predict final grades instantly, and manage your schedule.",
    url: "https://gradian.tech",
    siteName: "Gradian",
    images: [
      {
        url: "/simulator-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Gradian App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradian — Master Your Grades",
    description:
      "Seamlessly sync with Infinite Campus, predict final grades instantly, and manage your schedule.",
    images: ["/simulator-screenshot.png"],
  },
  metadataBase: new URL("https://gradian.tech"),
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
