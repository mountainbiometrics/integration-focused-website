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
  description: "MTN is a trusted guide to your organization’s data. MTN Guide maps what your systems mean and when it applies, from schemas rather than records, so teams and AI can act with confidence.",
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
    "financial services data",
    "AI ROI",
  ],
  openGraph: {
    title: "MTN | It’s time to trust your data",
    description: "MTN is a trusted guide to your organization’s data: what it means, where it lives, and how it fits together over time, without requiring access to sensitive records.",
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
