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
  title: "La P'tite Pizzeria - Meilleure Pizza Artisanale à Saint-Macaire",
  description:
    "Découvrez les délicieuses pizzas artisanales de La P'tite Pizzeria à Saint-Macaire. Livraison rapide et service en restaurant. Commandez dès maintenant !",
  icons: {
    icon: "./assets/img/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
