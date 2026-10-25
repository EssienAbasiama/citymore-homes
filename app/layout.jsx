import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CITYMORE HOMES LIMITED — Refined Living, Realised",
  description:
    "CITYMORE HOMES LIMITED is a premier real estate company helping clients buy, sell, and manage exceptional homes. Discover curated properties and white-glove service.",
  keywords: [
    "real estate",
    "luxury homes",
    "property",
    "Citymore Homes",
    "buy a home",
    "sell a home",
  ],
  openGraph: {
    title: "CITYMORE HOMES LIMITED",
    description: "Refined living, realised. Curated properties and white-glove service.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
