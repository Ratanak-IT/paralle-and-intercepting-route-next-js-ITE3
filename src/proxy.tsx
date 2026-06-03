import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(request: NextRequest) {
    const dashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
    const abouteRoute = request.nextUrl.pathname.startsWith('/about');
    const token = request.cookies.get('access-token')?.value;
    if (!token && (dashboardRoute || abouteRoute)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
  return NextResponse.next();
}
 
export const config = {
  matcher: '/about/:path*',
}