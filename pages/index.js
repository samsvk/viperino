import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Viperino</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="p-6 border rounded border-neutral-700 bg-neutral-900 drop-shadow-md">
          <h1 className="text-3xl"></h1>
        </div>
      </div>
    </div>
  );
}
