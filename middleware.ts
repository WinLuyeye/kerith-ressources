// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map();

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/send-email') {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 5; // 5 requêtes max

    const requests = rateLimit.get(ip) || [];
    const recentRequests = requests.filter((time: number) => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);
  }

  return NextResponse.next();
}