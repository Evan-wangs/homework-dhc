import { NextRequest, NextResponse } from "next/server"

function getCookieValue(cookies: string, name: string) {
    const prefix = name + "=";
    const start = cookies.indexOf(prefix);
    
    if (start === -1) {
        return null;
    }

    let end = cookies.indexOf(";", start);
    if (end === -1) {
        end = cookies.length;
    }

    return cookies.substring(start + prefix.length, end);
}

export const POST = async (request: NextRequest) => {
    const formData = (await request.formData()).get('password');
    const url = request.nextUrl.clone();
    const locale = request.headers.get('accept-language')?.startsWith('zh-CN') ? "cn" : "en";

    let cookies = request.cookies.toString();
    cookies += "; name=af"; // test 用
    const name = getCookieValue(cookies, "name");

    let targetUrl = url.origin;

    if (formData === '123') {
        if (name !== 'af') {
            targetUrl = 'https://www.baidu.com/';
        } else {
            targetUrl += `/af/${locale}/demo`;
        }
    } else {
        targetUrl += `/af/${locale}/123`;
    }

    return NextResponse.redirect(targetUrl);
};

export const GET = (request: NextRequest, { params }: { params: { id: string } }) => {
    console.log(`
        url: ${request.nextUrl}
        path: ${request.nextUrl.pathname}
        cookie: ${request.cookies}
        header: ${JSON.stringify(request.headers)}
        param name: ${request.nextUrl.searchParams.get('name')}
        id: ${params.id}
        `);
    return NextResponse.json('aaa', {
        status: 404,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}
