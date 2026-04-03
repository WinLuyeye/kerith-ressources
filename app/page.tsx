// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import Actualites from '@/components/Actualites';
import CombinedShowcase from '@/components/CombinedShowcase';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <AboutSection />
      <CombinedShowcase />
      <Actualites />
      <TeamSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}