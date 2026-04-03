"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const featureContent: any = {
  exploration: {
    title: "Exploration & Prospection avancée",
    description:
      "Analyse approfondie des gisements de manganèse à Luozi avec des méthodes modernes visant à identifier des ressources exploitables à fort potentiel.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190",
    content: `
      Kerith Resources mène des campagnes d’exploration avancées dans le territoire de Luozi, 
      combinant études géologiques, analyses structurales et prospection terrain.

      L’objectif est d’identifier et de quantifier les ressources minérales avec précision,
      afin de garantir une exploitation rentable et durable.
    `,
  },

  geologie: {
    title: "Richesse minérale du Kongo Central",
    description:
      "Implanté dans une zone géologique stratégique, le projet bénéficie d’un environnement naturellement favorable à la concentration du manganèse.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da",
    content: `
      Le projet s’inscrit dans une province manganésifère reconnue du supergroupe du Congo occidental.

      Les formations géologiques, notamment les schistes calcaires et les structures tectoniques,
      favorisent l’enrichissement naturel du manganèse, offrant un potentiel important de développement.
    `,
  },

  production: {
    title: "Production & transformation locale",
    description:
      "Une capacité ciblée de 2 millions de tonnes par an avec transformation locale pour maximiser la valeur.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    content: `
      Le projet vise une production industrielle à grande échelle avec une capacité estimée à 
      2 millions de tonnes de manganèse par an.

      Une partie stratégique du projet repose sur la transformation locale afin de créer plus de valeur
      et renforcer l’industrialisation de la RDC.
    `,
  },

  impact: {
    title: "Impact économique & développement local",
    description:
      "Création de 2.500 emplois et contribution directe à la croissance économique et sociale du Kongo Central.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    content: `
      Le projet KIVUVU représente un levier majeur pour le développement régional.

      Avec la création de plus de 2.500 emplois, il contribue directement à l’économie locale,
      tout en améliorant les conditions de vie des communautés environnantes.
    `,
  },
};

export default function FeaturePage() {
  const params = useParams();
  const slug = params.slug as string;

  const feature = featureContent[slug];

  if (!feature) {
    return <div className="p-20 text-center">Feature non trouvée</div>;
  }

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.image})` }}
        />
        <div className="absolute inset-0 bg-[#0f2a3d]/75" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            {feature.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl"
          >
            {feature.description}
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une vision stratégique
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
            {feature.content}
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["2M tonnes/an", "2 500 emplois", "30 concessions", "Projet structurant"].map(
            (stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 shadow rounded-xl"
              >
                <p className="text-2xl font-bold text-[#003233]">{stat}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Intéressé par ce projet ?
        </motion.h3>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-[#003233] text-white px-8 py-3 font-semibold hover:opacity-90"
          >
            Nous contacter
          </Link>

          <Link
            href="/"
            className="border border-black px-8 py-3 font-semibold hover:bg-black hover:text-white"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>

    </div>
  );
}