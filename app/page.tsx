// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HighlightsAlt from '@/components/HighlightsAlt';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
       <HighlightsAlt />
      {/* Autres sections de votre site */}
      <section className="py-16 bg-gray-100 text-red-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md"></div>
              <h3 className="text-xl font-semibold mb-4">Service 1</h3>
              <p className="text-gray-600">Description du service 1.</p>
            </div>
          </div>
      </section>
    </main>
  );
}