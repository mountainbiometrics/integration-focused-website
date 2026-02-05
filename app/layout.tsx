import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MTN | Full Data Visibility From Day One",
  description: "Close data visibility gaps during acquisitions, system changes, and multi-vendor environments. Keep reporting, revenue visibility, and operations live while systems evolve.",
  keywords: ["healthcare integration", "data integration", "healthcare rollups", "MSO", "revenue cycle management", "EHR integration"],
  openGraph: {
    title: "MTN | Full Data Visibility From Day One",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
