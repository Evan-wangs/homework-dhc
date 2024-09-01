import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const url = request.nextUrl.clone();
    console.log(`Url: ${url}`);

    const acceptLanguage = request.headers.get('accept-language');
    const language = acceptLanguage?.startsWith('zh-CN') ? 'cn' : 'en';

    if (url.pathname === '/af') {
        url.pathname = `/af/${language}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
};

export const config = {
    matcher: '/:path*',
};
