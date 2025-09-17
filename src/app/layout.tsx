import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEWEAR - Moda de Qualidade para Todos os Estilos",
  description:
    "Descubra as últimas tendências da moda na BEWEAR. Roupas masculinas, femininas e acessórios de alta qualidade. Vista-se com confiança e estilo.",
  keywords: "moda, roupas, masculino, feminino, acessórios, estilo, qualidade",
  authors: [{ name: "BEWEAR" }],
  openGraph: {
    title: "BEWEAR - Moda de Qualidade",
    description: "Descubra as últimas tendências da moda na BEWEAR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
