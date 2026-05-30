import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
