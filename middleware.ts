import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './app/utils/jwt';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  console.log('TOKEN', token);

  const protectedPaths = ['/dashboard'];
  const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));

  if (isProtectedPath) {
    if (!token) {
      // No token found, redirect to login page
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
      await verifyToken(token.value);
      return NextResponse.next();
    } catch (error) {
      console.log('ERR', error);
      // Invalid token, redirect to login page
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
