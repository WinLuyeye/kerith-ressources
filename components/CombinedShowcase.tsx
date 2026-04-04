'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function MineralShowcase() {
  const minerals = [
    {
      name: "NDOKOLO",
      type: "Minéralisation contrôlée par faille avec concentration résiduelle",
      description1: "La zone de Ndokolo présente une minéralisation contrôlée par des failles géologiques, où les processus résiduels ont concentré le manganèse à la surface.",
      description2: "Échantillon flottant (non in situ) : NDK01 avec une teneur exceptionnelle de 45,24 % Mn, indiquant un potentiel remarquable pour une exploitation minière responsable.",
      grade: "45,24 % Mn",
      sampleType: "Échantillon flottant (non in situ)",
      img: "/ndokolo.jpg", // Remplace par ton chemin d'image
      reverse: false,
    },
    {
      name: "MBONDIKA",
      type: "Minéralisation massive de haute teneur (colluviale)",
      description1: "Mbondika est caractérisée par une minéralisation massive de haute teneur en manganèse, formée par des dépôts colluviaux concentrés par gravité.",
      description2: "Échantillon composite MDK01 : 43 % Mn, illustrant la richesse du gisement et son intérêt pour des projets miniers à forte valeur ajoutée.",
      grade: "43 % Mn",
      sampleType: "Échantillon composite",
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
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Minéralisations Identifiées
          </h2>

          {/* ligne animée */}
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-[#cf8e02] mb-6"
          />

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl">
            Les travaux de prospection ont permis d&apos;identifier deux zones à fort potentiel en manganèse,
            avec des teneurs exceptionnelles dépassant 43 % Mn.
          </p>
        </motion.div>

        {minerals.map((mineral, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              mineral.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              className="relative w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden "
              initial={{ opacity: 0, x: mineral.reverse ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={mineral.img}
                  alt={`Minéralisation ${mineral.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </motion.div>

              {/* Badge de teneur sur l'image */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 text-sm font-bold">
                {mineral.grade}
              </div>

              {/* overlay subtil au hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition duration-300"></div>
            </motion.div>

            {/* TEXTE */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center px-5"
              initial={{ opacity: 0, x: mineral.reverse ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Type d'échantillon */}
              <span className="text-sm font-semibold text-[#cf8e02] uppercase tracking-wider mb-2">
                {mineral.sampleType}
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                {mineral.name}
              </h3>

              <h4 className="text-xl md:text-2xl font-semibold text-gray-500 mb-4">
                {mineral.type}
              </h4>

              {/* ligne animée */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-[#cf8e02] mb-4"
              />

              <p className="text-gray-700 text-lg font-medium mb-2">
                {mineral.description1}
              </p>

              <p className="text-gray-700 text-base font-light leading-relaxed mb-4">
                {mineral.description2}
              </p>

              {/* Carte récapitulative */}
              <div className="mt-4 p-4 bg-white  border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[#0f2a3d]">{mineral.grade}</span>
                    <span className="text-xs text-gray-500">Teneur en Mn</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-700">{mineral.sampleType}</span>
                    <span className="text-xs text-gray-500">Référence échantillon</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}