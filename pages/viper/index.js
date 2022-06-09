import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";

export default function Viper({ posts }) {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-3xl min-h-screen gap-3 p-10 mx-auto my-0">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <Link href={`/viper/${post}`}>
              <div className="px-4 py-2.5 bg-gray-200 rounded-md hover:bg-gray-400 duration-300 hover:cursor-pointer">
                <Image src="/folder.png" alt="folder picture" width="100px" height="100px" />
              </div>
            </Link>
            <h1 className="m-0 mt-2 text-xs font-semibold text-gray-500">{post.replace(/^./, (str) => str.toUpperCase())}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const paths = path.join(process.cwd(), `classes/viper`);
  const posts = await fs.readdirSync(paths).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  return { props: { posts } };
}
