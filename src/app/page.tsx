import { Header } from "@/components/catering/header";
import { Hero } from "@/components/catering/hero";
import { Keunggulan } from "@/components/catering/keunggulan";
import { Layanan } from "@/components/catering/layanan";
import { MenuSection } from "@/components/catering/menu-section";
import { Alur } from "@/components/catering/alur";
import { Testimoni } from "@/components/catering/testimoni";
import { Cta } from "@/components/catering/cta";
import { Footer } from "@/components/catering/footer";
import { FloatingWa } from "@/components/catering/floating-wa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Keunggulan />
        <Layanan />
        <MenuSection />
        <Alur />
        <Testimoni />
        <Cta />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
