"use client";

import Link from "next/link";
import { LucidePickaxe, Factory, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Exploration & Prospection avancée",
    description:
      "Analyse approfondie des gisements de manganèse à Luozi avec des méthodes modernes visant à identifier des ressources exploitables à fort potentiel.",
    link: "/features/exploration",
    icon: LucidePickaxe,
  },
  {
    title: "Richesse minérale du Kongo Central",
    description:
      "Implanté dans une zone géologique stratégique, le projet bénéficie d’un environnement naturellement favorable à la concentration du manganèse.",
    link: "/features/geologie",
    icon: Factory,
  },
  {
    title: "Production & transformation locale",
    description:
      "Développement d’une capacité industrielle visant jusqu’à 2 millions de tonnes par an, avec une transformation sur place pour maximiser la valeur.",
    link: "/features/production",
    icon: TrendingUp,
  },
  {
    title: "Impact économique & développement local",
    description:
      "Création de 2.500 emplois et contribution directe à la croissance économique et sociale du Kongo Central et de la RDC.",
    link: "/features/impact",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="relative z-20 px-6 bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}

                // apparition
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}

                // 🔥 HOVER GLOBAL
                // whileHover={{
                //   y: -12,
                //   scale: 1.02,
                // }}

                className="relative bg-gray-200 p-8 pt-16 group  transition-all duration-300 shadow-md hover:shadow-2xl hover:bg-white"
              >
                {/* glow effect */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#003233]/10 to-transparent"></div>

                {/* ICON */}
                <motion.div
                  // whileHover={{
                  //   scale: 1.15,
                  //   rotate: 6,
                  // }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#003233] text-white p-4 rounded-lg shadow-lg"
                >
                  <Icon size={50} />
                </motion.div>

                {/* CONTENT */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#003233] transition">
                  {service.title}
                </h3>

                <p className="text-base font-light text-black mb-6">
                  {service.description}
                </p>

                {/* BUTTON */}
                {/* <Link
                  href={service.link}
                  className="text-sm font-bold text-[#003233] relative inline-block"
                >
                  <span className="relative z-10">
                    En savoir plus →
                  </span>

                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003233] transition-all duration-300 group-hover:w-full"></span>
                </Link> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}