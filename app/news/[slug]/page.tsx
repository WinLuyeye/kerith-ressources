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
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
          <h1 className="text-4xl font-bold text-[#1f2937] mb-4">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-8">
            Désolé, l'article que vous recherchez n'existe pas.
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

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a3d]/80 to-[#0f2a3d]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {article.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-gray-300"
            >
              <span>Par {article.author}</span>
              <span>•</span>
              <span>{formatDate(article.date)}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#1f2937] mb-8 text-center">
              Articles similaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    {related.image ? (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003233] to-[#0f2a3d]">
                        <span className="text-white font-bold">KERITH</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#1f2937] mb-2 line-clamp-2 group-hover:text-[#cf8e02] transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatDate(related.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 bg-[#003233] text-white px-6 py-3 rounded-lg hover:bg-[#004d4d] transition-colors"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour aux actualités
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;