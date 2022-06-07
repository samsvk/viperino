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

import { getAllPosts } from "../src/api";
import Articles from "../src/components/articles";

export default function Home({ posts }) {
  return (
    <>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}
