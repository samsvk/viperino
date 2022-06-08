// import Head from "next/head";
// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Viperino</title>
//       </Head>

//       <div className="flex flex-col items-center justify-center w-full h-screen">
//         <div className="w-full max-w-screen-lg border rounded border-gray-100 bg-white drop-shadow-md min-h-[500px] flex flex-row">
//           <div className="w-full bg-gray-100 max-w-[185px]">
//             <ul className="inline-block w-full px-3 py-2 justify-evenly">
//               <li className="inline-block w-3 h-3 mr-1.5 rounded-full max-w-3" style={{ background: "#f87171" }}></li>
//               <li className="inline-block w-3 h-3 mr-1.5 rounded-full max-w-3" style={{ background: "#facc14" }}></li>
//               <li className="inline-block w-3 h-3 mr-1.5 rounded-full max-w-3" style={{ background: "#49de80" }}></li>
//             </ul>
//             <div className="px-2 py-1">
//               <div className="px-3.5 rounded bg-gray-200">Svk's Index</div>
//               <div className="p-3.5">Tags</div>
//             </div>
//           </div>
//           <div className="w-full p-6 max-w-fit">1231231233</div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Articles from "../src/components/articles";
import Image from "next/image";
import path from "path";
import fs from "fs";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-3xl min-h-screen gap-3 p-10 mx-auto my-0">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <Link href={`${post}`}>
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
  const postDirectory = path.join(process.cwd(), "classes/");
  const posts = await fs.readdirSync(postDirectory).map((file) => file);
  return { props: { posts } };
}
