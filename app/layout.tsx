import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartProvider";

export const metadata: Metadata = {
  title: "Figlmüller » Home of the Original Wiener Schnitzel",
  description: "We at Figlmüller serve traditional Viennese Cuisine. Explore: locations, opening hours, online reservation, recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-[#F6F6EE]">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
