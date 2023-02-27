export const dynamic = 'force-static'
export const revalidate = 10

export default async function StaticRevalidatePage() {
  return (
    <div>
      <h1>Time</h1>
      <p>{new Date().toString()}</p>
    </div>
  );
}
