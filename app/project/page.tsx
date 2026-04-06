'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const Projet = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar />

      {/* Hero Section avec photo du Chairman */}
      <div
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mines.cd/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-15.27.28.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/70" />

        {/* Ghost Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden md:block absolute text-[40px] sm:text-[60px] md:text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none"
        >
          Projet
        </motion.h1>

        {/* Contenu principal Hero */}
        <div className="max-w-7xl relative px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-extrabold text-white leading-tight mb-6"
            >
              Projet Minier
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-base sm:text-lg md:text-xl text-gray-300"
            >
              Kerith Resources SARL détient 30 concessions minières à Luozi, Kongo-Central,
              avec un potentiel exceptionnel en manganèse et des infrastructures stratégiques.
            </motion.p>
          </div>

        </div>
      </div>

      {/* Body Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Ghost Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-3xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          Présentation du projet
          <motion.span
            className="absolute text-[#0f2a3d] font-extrabold text-[6rem] md:text-[10rem] lg:text-[12rem] top-0 left-14 transform -translate-y-1/4 pointer-events-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            Kerith
          </motion.span>
        </motion.h2>

        {/* Contexte & Concessions */}
        <div className="space-y-8 text-gray-800 text-lg md:text-xl leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Contexte & Concessions</h3>
            <p>
              Kerith Resources SARL détient trente (30) concessions minières situées dans le territoire de <strong>Luozi</strong>, province du <strong>Kongo-Central</strong>. La société bénéficie également d’un partenariat stratégique avec le <strong>Service Géologique National du Congo (SGNC)</strong>, incluant des droits d’usufruit sur les Zones de Recherches Géologiques (ZRG) n°025 et n°026.
            </p>
          </motion.div>

          {/* Géologie */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Contexte géologique</h3>
            <p>
              Le projet se situe dans le <strong>Supergroupe Ouest-Congolien</strong>, une province métallogénique à manganèse reconnue. La minéralisation est contrôlée par des structures tectoniques liées à l’orogenèse panafricaine. Les unités stratigraphiques (calcaires dolomitiques, schistes calcareux) constituent des pièges géochimiques favorables. Le potentiel d’expansion des ressources reste important, car la zone a été peu explorée avec des méthodes modernes.
            </p>
          </motion.div>

          {/* Minéralisation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Minéralisation identifiée</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mbondika</strong> : minéralisation massive (colluvial) – Échantillon composite à <span className="font-bold text-green-700">43 % Mn</span>.</li>
              <li><strong>Ndokolo</strong> : minéralisation contrôlée par faille – Échantillon de surface à <span className="font-bold text-green-700">45,24 % Mn</span>.</li>
            </ul>
          </motion.div>

          {/* Logistique */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Infrastructures & Logistique</h3>
            <p>Plusieurs options d’acheminement sont disponibles pour évacuer la production :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Option 1</strong> : Luozi → Port de Banana (470 km par rail).</li>
              <li><strong>Option 2</strong> : Luozi → Boma (320 km) puis barge → Banana (90 km).</li>
              <li><strong>Option 3</strong> : Luozi → Matadi (270 km) puis barge → Banana (180 km).</li>
              <li><strong>Option 4</strong> : Luozi → Kimbemba (2,7 km par barge/convoyeur) → Matadi (230 km) → barge → océan (180 km).</li>
              <li><strong>Option 5</strong> : Luozi → Kimbemba (2,7 km) → Kimpese (90 km) → Matadi (140 km) → barge → océan (180 km).</li>
            </ul>
          </motion.div>

          {/* Énergie */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Alimentation électrique</h3>
            <p>
              Le projet peut s’appuyer sur les barrages <strong>Inga</strong> et <strong>Zongo</strong>, garantissant un approvisionnement énergétique fiable pour les opérations minières.
            </p>
          </motion.div>

          {/* Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Engagement responsable</h3>
            <p>
              Kerith Resources place l’innovation et le respect des normes environnementales et sociales au cœur de sa stratégie. La société assure le suivi des prospections, la conservation des échantillons et la réhabilitation des zones étudiées, conformément au Code Minier de la RDC.
            </p>
          </motion.div>

          {/* Partenariat */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h3 className="text-2xl font-extrabold text-[#0f2a3d] mb-4"> Partenariat stratégique</h3>
            <p>
              Une joint-venture avec <strong>Asia Mineral Limited (AML)</strong> (Japon) a été signée pour créer <strong>Kivuvu Kongo Mines</strong>, dédiée à l’exploitation et la transformation du manganèse. L’objectif est d’atteindre <strong>2 millions de tonnes par an</strong> et de créer <strong>plus de 2.500 emplois</strong>.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projet;