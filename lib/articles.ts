import fs from 'fs';
import path from 'path';
import { Article } from '@/types/article';

const articlesFilePath = path.join(process.cwd(), 'data', 'articles.json');

// S'assurer que le dossier data existe
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'data'), { recursive: true });
}

// Initialiser le fichier s'il n'existe pas
if (!fs.existsSync(articlesFilePath)) {
  fs.writeFileSync(articlesFilePath, JSON.stringify([], null, 2));
}

export const getArticles = (): Article[] => {
  const data = fs.readFileSync(articlesFilePath, 'utf-8');
  return JSON.parse(data);
};

export const saveArticles = (articles: Article[]): void => {
  fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
};

export const addArticle = (article: Article): void => {
  const articles = getArticles();
  articles.unshift(article); // Ajouter au début
  saveArticles(articles);
};

export const updateArticle = (id: string, updatedArticle: Article): void => {
  const articles = getArticles();
  const index = articles.findIndex(a => a.id === id);
  if (index !== -1) {
    articles[index] = updatedArticle;
    saveArticles(articles);
  }
};

export const deleteArticle = (id: string): void => {
  const articles = getArticles();
  const filteredArticles = articles.filter(a => a.id !== id);
  saveArticles(filteredArticles);
};

export const getArticleById = (id: string): Article | undefined => {
  const articles = getArticles();
  return articles.find(a => a.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const articles = getArticles();
  return articles.find(a => a.slug === slug);
};