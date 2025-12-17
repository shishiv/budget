import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Outfit: fonte única do brandbook TriânguloTEC
// Pesos: light 300, regular 400, medium 500, semibold 600, bold 700, extrabold 800
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Budget",
  description: "Aplicativo de gerenciamento de finanças pessoais",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}
