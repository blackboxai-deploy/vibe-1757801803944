import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Departamento en Venta - Condominio Gran Océano | Viña del Mar",
  description: "Exclusivo departamento de 119 m² + terraza de 9 m² en Torre E, piso 9, con vista panorámica a la bahía de Valparaíso. Condominio Gran Océano, Recreo, Viña del Mar. UF 9.000",
  keywords: "departamento venta, Viña del Mar, Recreo, Gran Océano, vista al mar, Valparaíso, propiedad, inmuebles Chile",
  openGraph: {
    title: "Departamento en Venta - Condominio Gran Océano",
    description: "Exclusivo departamento 119m² + terraza, vista panorámica bahía de Valparaíso",
    url: "https://gran-oceano-property.com",
    siteName: "Gran Océano Property",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}