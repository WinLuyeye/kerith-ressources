"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import img from "../public/construction.png";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr"); // "fr" ou "en"

  const text = {
    fr: {
      title: "EN CONSTRUCTION",
      description: "Notre site web est actuellement en construction.",
      emailPlaceholder: "Entrez votre adresse email",
      button: "PRÉVENEZ-MOI",
      footer: "Soyez informé dès le lancement",
    },
    en: {
      title: "UNDER CONSTRUCTION",
      description: "Our website is currently under construction.",
      emailPlaceholder: "Enter your email address",
      button: "NOTIFY ME",
      footer: "Be informed at launch",
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl text-center">

        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang("fr")}
            className={`cursor-pointer px-3 py-1 border ${lang === "fr" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
          >
            FR
          </button>
          <button
            onClick={() => setLang("en")}
            className={`cursor-pointer px-3 py-1 border ${lang === "en" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
          >
            EN
          </button>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          {text[lang].title}
        </motion.h1>

        {/* Image / Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Image
            src={img}
            alt="Construction"
            width={200}
            height={200}
            className="object-contain"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-6 text-sm sm:text-base"
        >
          {text[lang].description}
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder={text[lang].emailPlaceholder}
            className="px-4 py-3 w-full sm:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003233] "
          />
          <button className="px-6 py-3 text-white font-semibold hover:bg-[#004a4b] transition bg-[#003233] cursor-pointer ">
            {text[lang].button}
          </button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-sm mt-6"
        >
          {text[lang].footer}
        </motion.p>
      </div>
    </main>
  );
}