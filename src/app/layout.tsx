import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/data/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Viza Ltd | UK Immigration Advice & Visa Assistance",
    template: "%s | Viza Ltd",
  },
  description:
    "Professional UK immigration advice and visa assistance. IAA regulated Level 1. Skilled Worker, Student, Spouse, Visitor visas and naturalisation.",
  keywords: [
    "UK immigration",
    "visa advice",
    "IAA regulated",
    "Skilled Worker visa",
    "Student visa",
    "Spouse visa",
  ],
  icons: {
    icon: [
      { url: brand.icon, sizes: "32x32", type: "image/png" },
      { url: brand.icon192, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: brand.appleIcon, sizes: "180x180", type: "image/png" }],
    shortcut: brand.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
