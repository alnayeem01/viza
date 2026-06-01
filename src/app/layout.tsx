import { Geist, Geist_Mono } from "next/font/google";
import { brand } from "@/data/brand";
import { rootMetadata } from "@/data/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...rootMetadata,
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
