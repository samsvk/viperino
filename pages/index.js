import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Viperino</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="p-6 rounded bg-slate-800">
          <h1 className="text-3xl">test.</h1>
        </div>
      </div>
    </div>
  );
}
