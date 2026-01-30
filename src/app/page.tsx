import { Navbar } from "@/components/Navbar";
import { LogoTicker } from "@/components/LogoTicker";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { VideoBanner } from "@/components/VideoBanner";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <div className="relative">
        <Navbar />
        <VideoBanner />
      </div>
      <LogoTicker />

      <ProductShowcase />
      <FAQs />
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
