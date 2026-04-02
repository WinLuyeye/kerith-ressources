// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Autres sections de votre site */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contenu supplémentaire */}
          </div>
        </div>
      </section>
    </main>
  );
}