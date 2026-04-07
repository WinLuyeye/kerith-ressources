"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

const ArticleDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (params.slug) {
      fetchArticle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  const fetchArticle = async () => {
    try {
      const response = await fetch("/api/admin/articles");
      const allArticles = await response.json();
      const currentArticle = allArticles.find(
        (a: Article) => a.slug === params.slug
      );
      setArticle(currentArticle);

      // Get related articles (excluding current)
      const related = allArticles
        .filter((a: Article) => a.slug !== params.slug)
        .slice(0, 3);
      setRelatedArticles(related);
    } catch (error) {
      console.error("Erreur lors du chargement de l'article:", error);
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
      <div className="bg-gray-100 w-full min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003233]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-gray-100 w-full min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
          <h1 className="text-4xl font-bold text-[#1f2937] mb-4">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-8">
            Désolé, l&apos;article que vous recherchez n&apos;existe pas.
          </p>
          <Link
            href="/actualites"
            className="bg-[#003233] text-white px-6 py-3 rounded-lg hover:bg-[#004d4d] transition-colors"
          >
            Retour aux actualités
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar />

      {/* Hero Section avec effet ghost text */}
      <div
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/70" />

        {/* Ghost Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden md:block absolute text-[40px] sm:text-[60px] md:text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none"
        >
          Article
        </motion.h1>

        {/* Contenu principal Hero */}
        <div className="max-w-7xl relative px-6 md:px-12 flex flex-col items-center justify-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 max-w-5xl"
          >
            {article.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center justify-center gap-4 text-gray-300 text-base sm:text-lg"
          >
            <span>Par {article.author}</span>
            <span>•</span>
            <span>{formatDate(article.date)}</span>
          </motion.div>
        </div>
      </div>

      {/* Content Section avec style inspiré du projet */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Ghost Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-3xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          Contenu de l&apos;article
          <motion.span
            className="absolute text-[#0f2a3d] font-extrabold text-[6rem] md:text-[10rem] lg:text-[12rem] top-0 left-14 transform -translate-y-1/4 pointer-events-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            {article.title.split(' ')[0]}
          </motion.span>
        </motion.h2>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-8 text-gray-800 text-lg md:text-xl leading-relaxed"
        >
          {article.content.split('\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              className="mb-4"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Related Articles Section */}
        {/* {relatedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24"
          >
            <h3 className="relative text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 ">
              Articles similaires
              <motion.span
                className="absolute text-[#0f2a3d] font-extrabold text-[4rem] md:text-[7rem] lg:text-[8rem] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.08 }}
                transition={{ duration: 1 }}
              >
                Similaires
              </motion.span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Link
                    href={`/news/${related.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block transform hover:-translate-y-2"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {related.image ? (
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003233] to-[#0f2a3d]">
                          <span className="text-white font-bold text-2xl">KERITH</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-[#1f2937] mb-3 line-clamp-2 group-hover:text-[#cf8e02] transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {formatDate(related.date)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )} */}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className=" mt-16"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-3 bg-[#003233] text-white px-8 py-4 rounded-lg hover:bg-[#004d4d] transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            <svg
              className="w-4 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour aux actualités
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;