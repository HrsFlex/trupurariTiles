import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tripurari Tiles and Marble | Bhurkunda, Jharkhand",
  description: "Premium tiles, granite, and marble store in Bhurkunda. Dealer of Orientbell Tiles. Get the best designs for your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
