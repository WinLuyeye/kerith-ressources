'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    title: 'Révéler le potentiel minier du Kongo-Central',
    ghost: 'Kerith',
    description:
      "Kerith Resources développe un projet minier stratégique en RDC avec 30 concessions à Luozi, en mettant l’accent sur une exploitation responsable, durable et tournée vers l’innovation.",
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Un portefeuille minier à fort potentiel',
    ghost: 'Mining',
    description:
      "Grâce à un partenariat avec le Service Géologique National du Congo (SGNC), nous accédons à des zones riches en ressources offrant des opportunités importantes d’exploration et de croissance.",
    image:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Une approche responsable et durable',
    ghost: 'Sustainable',
    description:
      "Nous intégrons des normes environnementales et sociales strictes afin de garantir un développement minier durable, bénéfique pour les communautés locales et les partenaires.",
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2070&q=80',
  },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-[#0f2a3d]/75" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Ghost text */}
          <h1 className="hidden md:block absolute text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none">
            {slides[currentSlide].ghost}
          </h1>

          <div className="max-w-3xl relative">
            
            {/* TITLE */}
            <h2 className="
              text-4xl 
              sm:text-5xl 
              md:text-6xl 
              lg:text-7xl 
              xl:text-[85px] 
              font-bold 
              text-white 
              leading-tight 
              mb-6
            ">
              {slides[currentSlide].title}
            </h2>

            {/* DESCRIPTION */}
            <p className="
              text-base 
              sm:text-lg 
              md:text-xl 
              text-gray-300 
              mb-8 
              max-w-xl
            ">
              {slides[currentSlide].description}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button className="
                bg-white 
                text-black 
                px-6 py-3 
                sm:px-8 sm:py-3 
                text-sm sm:text-base 
                font-semibold 
                hover:opacity-90 
                transition
              ">
                Découvrir le projet
              </button>

              <button className="
                border border-white 
                text-white 
                px-6 py-3 
                sm:px-8 sm:py-3 
                text-sm sm:text-base
                hover:bg-white 
                hover:text-black 
                transition
              ">
                Nous contacter
              </button>
            </div>

            {/* SMALL TRANSITION TEXT */}
            <p className="text-gray-400 mt-6 text-sm">
              Un projet structuré autour d’actifs stratégiques et d’un fort potentiel de croissance.
            </p>

          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-6 sm:left-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${
              index === currentSlide
                ? 'w-10 bg-white'
                : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;