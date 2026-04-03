'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function CombinedShowcase() {
  const sections = [
    {
      title: "NDOKOLO",
      subtitle: "Régulation des défauts avec concentration résiduelle",
      text1: "Le site de Ndokolo présente une minéralisation contrôlée par des failles géologiques, où les processus résiduels ont concentré le manganèse à la surface.",
      text2: "Échantillon flottant (non in situ) : NDK01 avec une teneur exceptionnelle de 45.24% Mn, indiquant un potentiel intéressant pour l’exploitation minière responsable.",
      img: "/",
      reverse: false,
    },
    {
      title: "MBONDIKA",
      subtitle: "Mn massif de haute qualité (colluvial)",
      text1: "Mbondika est caractérisée par une minéralisation massive de haute teneur en manganèse, formée par des dépôts colluviaux concentrés par gravité.",
      text2: "Échantillon composite MDK01 : 43% Mn, illustrant la richesse du gisement et son intérêt pour des projets miniers à forte valeur ajoutée.",
      img: "https://environews-rdc.net/wp-content/uploads/2025/05/Manganese-Ore.jpeg",
      reverse: true,
    },
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 py-24 px-5">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Sites Miniers Stratégiques
          </h2>

          {/* ligne animée */}
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-[#cf8e02] mb-6"
          />

          <p className="text-gray-500 text-lg md:text-xl">
            Nous développons des projets miniers à forte valeur ajoutée...
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={index}

            // apparition
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}

            className={`flex flex-col md:flex-row items-center gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px]  overflow-hidden"
              initial={{ opacity: 0, x: section.reverse ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={section.img}
                  alt={section.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  className=""
                />
              </motion.div>

              {/* overlay subtil au hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300"></div>
            </motion.div>

            {/* TEXTE */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center px-5"
              initial={{ opacity: 0, x: section.reverse ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                {section.title}
              </h3>

              <h4 className="text-xl md:text-2xl font-semibold text-gray-500 mb-4">
                {section.subtitle}
              </h4>

              {/* ligne animée */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-[#f87171] mb-4"
              />

              <p className="text-gray-700 text-lg font-medium mb-2">
                {section.text1}
              </p>

              <p className="text-gray-700 text-base font-light leading-relaxed mb-4">
                {section.text2}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}