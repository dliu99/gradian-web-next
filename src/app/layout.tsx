import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gradian — Master Your Grades",
  description:
    "Seamlessly sync with Infinite Campus, predict final grades instantly, and manage your schedule with an intelligent, natively designed iOS experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-black text-[#f5f5f7]">{children}</body>
    </html>
  );
}
