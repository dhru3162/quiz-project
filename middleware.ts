import { NextRequest, NextResponse } from 'next/server'
import toast from 'react-hot-toast';

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/' || path === '/forgot-password';
    const commanPrivatePath = path === '/dashboard' || path === '/profile';
    const isPrivateUsersPath = path === '/history' || path === "/playquiz";
    const isPrivateAdminPath = path === '/users' || path === "/editquiz";
    const contactUsPath = path === '/contact_us'

    const getCookies: any = request.cookies.get('auth')?.value || '';
    let auth: any = ''
    if (getCookies) {
        auth = JSON.parse(getCookies)
    }
    const role = auth?.user?.role

    if (isPublicPath && auth) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if ((commanPrivatePath && !auth) || (isPrivateUsersPath && !auth) || (isPrivateAdminPath && !auth)) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    if (isPrivateUsersPath && role !== 'user') {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if (isPrivateAdminPath && role !== "admin") {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if (contactUsPath && role === 'admin') {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

}