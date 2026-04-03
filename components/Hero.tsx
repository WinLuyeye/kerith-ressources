'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Révéler le potentiel minier du Kongo-Central',
      ghost: 'Kerith',
      description:
        "Kerith Resources développe un projet minier stratégique en RDC avec 30 concessions à Luozi, en mettant l’accent sur une exploitation responsable, durable et tournée vers l’innovation.",
      image:
        'https://mines.cd/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-15.27.28.jpeg',
    },
    {
      title: 'Un portefeuille minier à fort potentiel',
      ghost: 'Mining',
      description:
        "Grâce à un partenariat avec le Service Géologique National du Congo (SGNC), nous accédons à des zones riches en ressources offrant des opportunités importantes d’exploration et de croissance.",
      image:
        'https://afrique.lalibre.be/wp-content/uploads/2022/12/RDC-lor-le-cuivre-le-cobalt-le%CC%81tain-et-le-zinc-enregistrent-une-baisse-de-prix-cette-semaine-sur-le-marche%CC%81-international-Mercuriales.png',
    },
    {
      title: 'Une approche responsable et durable',
      ghost: 'Sustainable',
      description:
        "Nous intégrons des normes environnementales et sociales strictes afin de garantir un développement minier durable, bénéfique pour les communautés locales et les partenaires.",
      image:
        'https://www.tsieleka.com/wp-content/uploads/2020/09/MINESMETAUX-PRIMAIRES.jpg',
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
        <motion.div
          key={index}
          className="absolute inset-0"
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1.05 }}
            animate={{ scale: index === currentSlide ? 1 : 1.05, x: index === currentSlide ? 0 : 20 }}
            transition={{ duration: 6, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[#0f2a3d]/75" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Ghost Text */}
          <motion.h1
            key={slides[currentSlide].ghost}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.05, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none"
          >
            {slides[currentSlide].ghost}
          </motion.h1>

          <div className="max-w-3xl relative">
            {/* Title */}
            <motion.h2
              key={slides[currentSlide].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-extrabold text-white leading-tight mb-6"
            >
              {slides[currentSlide].title}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={slides[currentSlide].description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
      <motion.button
        className="cursor-pointer bg-white text-black px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold"
        whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }} // léger zoom + couleur
        whileTap={{ scale: 0.95 }} // effet clic
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        Découvrir le projet
      </motion.button>

      <motion.button
        className="cursor-pointer border border-white text-white px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base"
        whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120, delay: 0.1 }}
      >
        Nous contacter
      </motion.button>
            </motion.div>

            {/* Small text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-gray-400 mt-6 text-sm"
            >
              Un projet structuré autour d’actifs stratégiques et d’un fort potentiel de croissance.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-6 sm:left-10 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${index === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;