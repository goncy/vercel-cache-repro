export const dynamic = 'force-dynamic'

export function GET() {
  return new Response(new Date().toISOString())
}