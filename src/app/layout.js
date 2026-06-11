import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: "Tripurari Tiles and Marble | Bhurkunda, Jharkhand",
  description: "Premium tiles, granite, and marble store in Bhurkunda. Dealer of Orientbell Tiles. Get the best designs for your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-heading: ${cormorant.style.fontFamily};
            --font-body: ${montserrat.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
