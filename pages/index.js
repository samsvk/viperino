import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Viperino</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="w-full max-w-screen-md p-6 border rounded border-zinc-700 bg-neutral-900 drop-shadow-md min-h-[300px]">
          <h1 className="text-3xl"></h1>
        </div>
      </div>
    </div>
  );
}
