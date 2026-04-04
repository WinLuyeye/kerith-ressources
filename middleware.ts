import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this'
);

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  console.log('Middleware - Path:', path); // Pour debug
  
  // Protéger les routes admin (sauf login)
  if (path.startsWith('/admin')) {
    // Ne pas protéger la page de login
    if (path === '/admin/login') {
      return NextResponse.next();
    }
    
    const token = request.cookies.get('admin_token')?.value;
    console.log('Middleware - Token present:', !!token); // Pour debug
    
    if (!token) {
      console.log('Middleware - No token, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    try {
      await jwtVerify(token, JWT_SECRET);
      console.log('Middleware - Token valid');
      return NextResponse.next();
    } catch (error) {
      console.log('Middleware - Token invalid:', error);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};