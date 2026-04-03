'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mines.cd/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-15.27.28.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/70" />

        {/* Ghost Text */}
        <motion.span
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute text-white font-extrabold text-[8rem] md:text-[12rem] lg:text-[14rem] uppercase select-none pointer-events-none"
        >
          Kerith
        </motion.span>

        {/* Title & Short Description */}
        <div className="relative max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4"
          >
            À propos de Kerith Resources SARL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 md:text-lg"
          >
            KERITH RESOURCES SARL est une société minière congolais engagée dans une exploitation responsable, durable et innovante de ses 30 concessions à Luozi, Kongo-Central.
          </motion.p>
        </div>
      </div>

      {/* Body Title with Ghost */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-3xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          À propos de nous
          <motion.span
            className="absolute text-[#0f2a3d] font-extrabold text-[6rem] md:text-[10rem] lg:text-[12rem] top-0 left-14 transform -translate-y-1/4 pointer-events-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            À propos
          </motion.span>
        </motion.h2>

        {/* Main Text */}
        <div className="space-y-8 text-gray-800 text-lg md:text-xl leading-relaxed">
          <p>
            KERITH RESOURCES SARL est une société minière de droit congolais qui détient trente (30) concessions situées dans le territoire de Luozi, en province du Kongo-Central. La société a obtenu le Permis de Recherches n°16000, couvrant 15 carrés miniers, et bénéficie de droits exclusifs pour prospecter et rechercher des substances minérales telles que le fer, le cuivre, la bauxite et l’or.
          </p>
          <p>
            Engagée dans une exploitation responsable et durable, Kerith Resources place l’innovation et le respect des normes environnementales et sociales au cœur de sa stratégie de développement. La société s’assure du suivi strict des travaux de prospection, de la conservation des échantillons, et de la réhabilitation des zones étudiées, conformément aux exigences du Code Minier et du Règlement Minier de la RDC.
          </p>
          <p>
            Dans une démarche stratégique et internationale, Kerith Resources a récemment signé une joint-venture avec Asia Mineral Limited (AML), une entreprise japonaise, pour la création de Kivuvu Kongo Mines, dédiée à l’exploitation et la transformation du manganèse dans la province du Kongo-Central. Ce partenariat, supervisé par la Première Ministre Judith Suminwa, ambitionne d’exploiter jusqu’à 2 millions de tonnes de manganèse par an et de créer plus de 2.500 emplois, tout en valorisant les communautés locales et le développement régional.
          </p>
          <p>
            KERITH RESOURCES SARL vise à maximiser le potentiel minéral de la RDC dans le respect des principes de responsabilité sociale et environnementale, tout en contribuant à l’essor économique et à la stabilité de la région des Grands Lacs. La société se positionne comme un acteur clé de la transformation du secteur extractif congolais, avec une vision claire et durable pour l’avenir.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;