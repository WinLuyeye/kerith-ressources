import { NextResponse } from 'next/server';
import { getArticles, addArticle, deleteArticle, updateArticle } from '@/lib/articles';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// Vérifier le token admin
function verifyToken(request: Request) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return false;
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

// GET - Récupérer tous les articles
export async function GET() {
  const articles = getArticles();
  return NextResponse.json(articles);
}

// POST - Créer un nouvel article
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const author = formData.get('author') as string;
    const image = formData.get('image') as File;
    
    let imageUrl = '';
    
    // Sauvegarder l'image
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${image.name}`;
      const filePath = path.join(process.cwd(), 'public/uploads/articles', fileName);
      await writeFile(filePath, buffer);
      imageUrl = `/uploads/articles/${fileName}`;
    }
    
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const article = {
      id: uuidv4(),
      title,
      content,
      excerpt,
      image: imageUrl,
      date: new Date().toISOString(),
      author,
      slug: `${slug}-${Date.now()}`,
    };
    
    addArticle(article);
    return NextResponse.json({ success: true, article });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un article
export async function PUT(request: Request) {
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const author = formData.get('author') as string;
    const image = formData.get('image') as File | null;
    
    const articles = getArticles();
    const existingArticle = articles.find(a => a.id === id);
    
    if (!existingArticle) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 });
    }
    
    let imageUrl = existingArticle.image;
    
    if (image && image.size > 0) {
      // Supprimer l'ancienne image
      if (existingArticle.image) {
        const oldImagePath = path.join(process.cwd(), 'public', existingArticle.image);
        try {
          await unlink(oldImagePath);
        } catch (e) {}
      }
      
      // Sauvegarder la nouvelle image
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${image.name}`;
      const filePath = path.join(process.cwd(), 'public/uploads/articles', fileName);
      await writeFile(filePath, buffer);
      imageUrl = `/uploads/articles/${fileName}`;
    }
    
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const updatedArticle = {
      ...existingArticle,
      title,
      content,
      excerpt,
      image: imageUrl,
      author,
      slug: `${slug}-${Date.now()}`,
    };
    
    updateArticle(id, updatedArticle);
    return NextResponse.json({ success: true, article: updatedArticle });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'article' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un article
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const articles = getArticles();
    const article = articles.find(a => a.id === id);
    
    if (article && article.image) {
      const imagePath = path.join(process.cwd(), 'public', article.image);
      try {
        await unlink(imagePath);
      } catch (e) {}
    }
    
    deleteArticle(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
}