'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

export default function Actualites() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  const fetchLatestArticles = async () => {
    try {
      const response = await fetch("/api/admin/articles");
      const data = await response.json();
      // Prendre les 3 derniers articles (les plus récents)
      const latestArticles = data.slice(0, 3);
      setArticles(latestArticles);
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

  if (loading) {
    return (
      <section id="actualites" className="w-full bg-gray-100 pt-[90px] pb-[90px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin h-12 w-12 border-b-2 border-[#003233]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="actualites" className="w-full bg-gray-100 pt-[90px] pb-[90px] px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-800 font-extrabold mb-4">
            Dernières Nouvelles
          </h2>
          <div className="py-2">
            <motion.hr
              initial={{ width: 0 }}
              whileInView={{ width: "160px" }}
              transition={{ duration: 0.8 }}
              className="border-t-2 border-[#cf8e02] mb-6"
            />
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-full">
            Restez informé des derniers développements de Kerith Ressources, de nos projets miniers et de nos initiatives stratégiques.
          </p>
        </div>

        {/* News Cards */}
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Aucune actualité pour le moment. Revenez bientôt !
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden flex flex-col bg-white hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/news/${article.slug}`}>
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[250px] overflow-hidden cursor-pointer">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 hover:scale-110"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003233] to-[#0f2a3d]">
                        <span className="text-white text-lg font-bold">
                          KERITH
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="py-5 flex flex-col flex-1 px-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
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
                    <span>{formatDate(article.date)}</span>
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
                  <Link href={`/news/${article.slug}`}>
                    <h3 className="text-gray-800 text-xl font-semibold mb-3 hover:text-[#cf8e02] transition-colors duration-300 cursor-pointer line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-base font-light mb-4 leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-[#cf8e02] font-extrabold underline hover:text-[#f59e0b] transition-colors mt-auto inline-flex items-center gap-1 group"
                  >
                    Lire la suite
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
              </motion.div>
            ))}
          </div>
        )}

        {/* Voir toutes les actualités button */}
        {articles.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 bg-[#003233] text-white px-8 py-3 hover:bg-[#004d4d] transition-colors font-semibold"
            >
              Voir toutes les actualités
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}