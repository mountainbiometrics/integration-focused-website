import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="microsite-premium">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
