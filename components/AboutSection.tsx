"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "../public/Logo3.jpg";
export default function AboutSection() {
  return (
    <section id="about" className="w-full pt-[90px] pb-[90px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* TEXTE */}
          <motion.div
            className="lg:w-5/12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.5rem] text-[#1f2937] mb-1">À propos</h2>

            {/* Ligne animée */}
            <div className="py-4 overflow-hidden">
              <motion.hr
                initial={{ width: 0 }}
                whileInView={{ width: "160px" }}
                transition={{ duration: 0.8 }}
                className="border-t-2 border-[#cf8e02]"
              />
            </div>

            <p className="text-[#1f2937] text-lg font-medium mb-4">
              KERITH RESSOURCES SARL
            </p>

            <p className="text-[#1f2937] text-base font-light leading-relaxed mb-6">
              KERITH RESOURCES SARL est une société minière de droit congolais
              qui détient trente (30) concessions situées dans le territoire de
              Luozi, en province du Kongo-Central. La société a obtenu le Permis
              de Recherches n°16000, couvrant 15 carrés miniers, et bénéficie de
              droits exclusifs pour prospecter et rechercher des substances
              minérales telles que le fer, le cuivre, la bauxite et l’or...
            </p>

            {/* BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="hover:bg-white hover:text-[#003233] hover:border hover:border-[#003233]  relative inline-block overflow-hidden bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light border border-transparent transition-all duration-300"
              >
                <span className="relative z-10">A savoir plus</span>

                {/* effet slide bg */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="lg:w-7/12 mt-10 lg:mt-0 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden "
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={img}
                fill
                style={{ objectFit: "cover" }}
                priority
                alt="Kerith Resources"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
