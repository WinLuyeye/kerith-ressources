import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = 'KR@admin';
const ADMIN_PASSWORD = 'KR@password123';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    
    console.log('Login attempt:', { username, password: '***' }); // Pour debug

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign(
        { username, role: 'admin', timestamp: Date.now() },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      console.log('Login successful, token generated'); // Pour debug

      return NextResponse.json({ 
        success: true, 
        token 
      });
    } else {
      console.log('Login failed: Invalid credentials'); // Pour debug
      return NextResponse.json(
        { error: 'Identifiants incorrects' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la connexion' },
      { status: 500 }
    );
  }
}