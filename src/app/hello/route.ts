import type { NextRequest } from "next/server";

export const dynamic = 'force-static'
export const revalidate = 10

export function GET(request: NextRequest) {
  return new Response(`
  <html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello ${request.nextUrl.searchParams.get('name')}</h1>
      <p>This will be revalidated every 10 seconds!</p>
      <p>Last revalidation: ${new Date()}</p>
    </body>
  </html>`, {
    headers: {
      'Content-Type': 'text/html',
    }
  });
}