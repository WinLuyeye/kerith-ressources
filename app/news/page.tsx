"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

const Actualites = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/admin/articles");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Erreur lors du chargement des articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/80" />

        <motion.h1
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden md:block absolute text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none"
        >
          Actualités
        </motion.h1>

        <div className="max-w-7xl relative px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-extrabold text-white leading-tight mb-6"
          >
            Actualités
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Restez informés des dernières nouvelles et événements de KERITH
            RESOURCES SARL
          </motion.p>
        </div>
      </div>

      {/* Articles Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header with ghost text */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="absolute text-[#0f2a3d] font-extrabold text-[2rem] md:text-[4rem] lg:text-[6rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
          >
            Publications
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f2937] mb-4 relative z-10">
            Nos dernières actualités
          </h2>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-[#cf8e02] mx-auto"
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez nos projets, réalisations et événements marquants
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003233]"></div>
          </div>
        ) : articles.length === 0 ? (
          <div className="py-20">
            <p className="text-gray-500 text-lg">
              Aucune actualité pour le moment. Revenez bientôt !
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <Link href={`/news/${article.slug}`}>
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003233] to-[#0f2a3d]">
                        <span className="text-white text-lg font-bold">
                          KERITH
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-6">
                  {/* Date and Author */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(article.date)}
                    </time>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {article.author}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="text-xl font-bold text-[#1f2937] mb-3 line-clamp-2 hover:text-[#cf8e02] transition-colors duration-300">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#003233] font-semibold hover:text-[#cf8e02] transition-colors duration-300 group"
                  >
                    <span>Lire la suite</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-[#003233] to-[#0f2a3d] py-16 mt-8">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Restez informés
            </h3>
            <p className="text-gray-300 mb-6">
              Abonnez-vous à notre newsletter pour recevoir nos dernières
              actualités
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cf8e02]"
              />
              <button
                type="submit"
                className="bg-[#cf8e02] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b87a00] transition-colors"
              >
                S'abonner
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;