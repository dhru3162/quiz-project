import { NextRequest, NextResponse } from 'next/server'
import toast from 'react-hot-toast';

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/' || path === '/forgot-password';
    const isPrivatePath = path === '/dashboard' || path === '/profile' || path === 'history';

    const auth = request.cookies.get('auth')?.value || '';

    if (isPublicPath && auth) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if (isPrivatePath && !auth) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}