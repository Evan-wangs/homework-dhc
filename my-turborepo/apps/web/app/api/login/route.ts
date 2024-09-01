import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    const formData = (await request.formData()).get('password');
    const url = request.nextUrl.clone();
    const locale = url.pathname.split('/')[2];

    if (formData === '123') {
        url.pathname = `/af/${locale}/demo`;
    } else {
        url.pathname = `/af/${locale}/123`;
    }

    return NextResponse.redirect(url.origin + url.pathname);
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
