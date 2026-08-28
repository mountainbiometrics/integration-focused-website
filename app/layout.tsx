import type { Metadata } from "next";
import { Inter, Instrument_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-serif",
});

export const metadata: Metadata = {
  title: "MTN | It’s time to trust your data",
  description: "MTN Guide maps what your systems mean, from schemas rather than records, and keeps that map current as they change. The layer that has to exist before clinical AI works.",
  keywords: [
    "trusted data",
    "AI readiness",
    "data engineering",
    "semantic mapping",
    "schema mapping",
    "data lineage",
    "clinical data",
    "healthcare interoperability",
    "EHR integration",
    "sequential data",
  ],
  openGraph: {
    title: "MTN | It’s time to trust your data",
    description: "MTN Guide maps what your systems mean, from schemas rather than records, and keeps that map current as they change.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
