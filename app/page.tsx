import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutUs } from "@/components/home/AboutUs";
import { BusinessFeatures, ProviderFeatures } from "@/components/home/FeaturesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero/>
        <AboutUs/>
        <BusinessFeatures />
        <HowItWorks />
        <ProviderFeatures />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}