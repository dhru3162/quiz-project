import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/' || path === '/forgot-password' || path.startsWith('/forgot-password');
    const commonPrivatePath = path === '/dashboard' || path === '/profile' || path === "/change-password";
    const isPrivateUsersPath = path === '/history' || path === "/play-quiz";
    const isPrivateAdminPath = path === '/users' || path === "/edit-quiz";
    const contactUsPath = path === '/contact-us'

    const getCookies: any = request.cookies.get('auth')?.value || '';
    let auth: any = ''
    if (getCookies) {
        auth = JSON.parse(getCookies)
    }
    const role = auth?.user?.role

    if (isPublicPath && auth) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if ((commonPrivatePath && !auth) || (isPrivateUsersPath && !auth) || (isPrivateAdminPath && !auth)) {
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