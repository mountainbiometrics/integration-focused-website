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
  title: "MTN | Close the Visibility Gap",
  description: "Close data visibility gaps during acquisitions, system changes, and multi-vendor environments. Keep reporting, revenue visibility, and operations live while systems evolve.",
  keywords: ["healthcare integration", "data integration", "healthcare rollups", "MSO", "revenue cycle management", "EHR integration"],
  openGraph: {
    title: "MTN | Close the Visibility Gap",
    description: "Close data visibility gaps during acquisitions and system changes. Keep visibility live while systems evolve.",
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
