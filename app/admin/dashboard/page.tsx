"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    image: null as File | null,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch('/api/admin/articles');
    const data = await response.json();
    setArticles(data);
  };

  const handleLogout = () => {
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('excerpt', formData.excerpt);
    formDataToSend.append('author', formData.author);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }
    if (editingArticle) {
      formDataToSend.append('id', editingArticle.id);
    }

    const response = await fetch('/api/admin/articles', {
      method: editingArticle ? 'PUT' : 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      await fetchArticles();
      resetForm();
      alert(editingArticle ? 'Article modifié avec succès' : 'Article créé avec succès');
    } else {
      alert('Erreur lors de l\'enregistrement');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', excerpt: '', author: '', image: null });
    setEditingArticle(null);
    setShowForm(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      const response = await fetch('/api/admin/articles', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await fetchArticles();
        alert('Article supprimé');
      }
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      author: article.author,
      image: null,
    });
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#003233] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin KERITH - Actualités</h1>
          <div className="space-x-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#cf8e02] px-4 py-2 rounded hover:bg-[#b87a00] transition-colors"
            >
              {showForm ? 'Annuler' : 'Nouvel article'}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">
              {editingArticle ? 'Modifier l\'article' : 'Nouvel article'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Titre *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Auteur *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Extrait *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contenu *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                  className="w-full p-2 border rounded"
                />
                {editingArticle?.image && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Image actuelle :</p>
                    <Image src={editingArticle.image} alt="Current" width={100} height={100} className="mt-1 rounded" />
                  </div>
                )}
              </div>
              <div className="space-x-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#003233] text-white px-4 py-2 rounded hover:bg-[#004d4d] transition-colors disabled:opacity-50"
                >
                  {loading ? 'Enregistrement...' : editingArticle ? 'Modifier' : 'Créer'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          <h2 className="text-xl font-bold">Articles publiés</h2>
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex gap-4">
                {article.image && (
                  <Image src={article.image} alt={article.title} width={150} height={100} className="rounded object-cover" />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <p className="text-sm text-gray-600">Par {article.author} - {new Date(article.date).toLocaleDateString('fr-FR')}</p>
                  <p className="text-gray-700 mt-2">{article.excerpt}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(article)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}