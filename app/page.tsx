import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import WhyFursa from "@/components/sections/WhyFursa";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SuccessStories from "@/components/sections/SuccessStories";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <WhyFursa />
      <Stats />
      <Features />
      <HowItWorks />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
