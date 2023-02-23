export default async function TimePage() {
  const noStoreTime = await fetch(process.env.URL + "/api/time", {cache: "no-store"});
  const revalidatedTime = await fetch(process.env.URL + "/api/time", {next: {revalidate: 5}});
  const cacheTime = await fetch(process.env.URL + "/api/time", {cache: "force-cache"});

  return (
    <div>
      <h1>Time</h1>
      <p>no-store: {await noStoreTime.text()}</p>
      <p>revalidate 5s: {await revalidatedTime.text()}</p>
      <p>force-cache: {await cacheTime.text()}</p>
    </div>
  );
}
