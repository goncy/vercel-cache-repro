export function GET() {
  return new Response(`
  <html>
    <head>
      <title>About Us</title>
    </head>
    <body>
      <h1>About Us</h1>
      <p>Our company is the best!</p>
    </body>
  </html>`, {
    headers: {
      'Content-Type': 'text/html'
    }
  });
}