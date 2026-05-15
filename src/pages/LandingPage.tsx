import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Logos from '@/components/Logos/Logos';
import Stats from '@/components/Stats/Stats';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Stats />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
