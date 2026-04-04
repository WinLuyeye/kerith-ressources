"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set cookie
        document.cookie = `admin_token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
        console.log('Cookie set, redirecting to dashboard...');
        // Force un petit délai pour que le cookie soit bien enregistré
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 100);
      } else {
        setError(data.error || 'Identifiants incorrects');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-[#003233]">Admin KERITH</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[#003233] block text-sm font-medium mb-2">Nom d&apos;utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-[#003233] w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#003233] ">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[#003233] w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003233]"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="text-[#003233] cursor-pointer w-full bg-[#003233] text-white p-2 rounded hover:bg-[#004d4d] transition-colors disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}