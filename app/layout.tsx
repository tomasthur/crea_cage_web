import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const borghsCC = localFont({
  src: [
    {
      path: "../public/fonts/BorghsCC-Normal.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crea Cage - Rocková Kapela",
  description: "Oficiálna webová stránka rockovej kapely Crea Cage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${borghsCC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
