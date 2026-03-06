import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Chauhan | Fullstack Developer + AI Engineer",
  description:
    "Systems-minded fullstack engineer building from protocols and runtimes to AI-powered web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
