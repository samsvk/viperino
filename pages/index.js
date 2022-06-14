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
import Image from "next/image";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default function Home({ posts }) {
  const password = 739739;
  const [pw, setPW] = useState("");
  const [err, setErr] = useState({
    type: "No error",
    truthy: false,
  });

  function checkPassword() {
    if (+pw === password) {
      Router.push("/viper");
    } else {
      setErr(true);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-3 p-10 mx-auto my-0 min-w-screen">
        <div className="flex flex-col items-center justify-center max-w-5xl w-100">
          <div className="w-[105px] h-[105px] block overflow-hidden relative rounded-full shadow-sm border border-gray-100">
            <Image
              quality={90}
              src={`/avatar.png`}
              alt="folder picture"
              loading="eager"
              layout="fill"
              objectFit="cover"
              className="inline shadow-inner align-bottom scale-[1.22] line-height"
            />
          </div>
          <h1 className="mt-4 mb-2 text-sm font-medium text-gray-800">
            Welcome back, Guest.
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkPassword();
            }}
            className="rounded-[14px] min-h-[28px]  max-w-[185px] bg-gray-100 pl-2 flex relative"
          >
            <input
              onChange={(e) => {
                setPW(e.target.value);
              }}
              autoComplete="off"
              type="password"
              className="text-sm block bg-orange-500 font-normal leading-0 items-center text-gray-300 min-height-full max-w-[185px] bg-transparent pl-2 mr-5 focus:outline-none w-[80%]"
              placeholder="Enter Password"
            />
            <button
              type={"submit"}
              className="absolute text-gray-100 duration-200 rounded-full bg-slate-200 top-1 group right-1 hover:bg-gray-300 hover:text-slate-50 hover:cursor-pointer"
            >
              <HiOutlineArrowSmRight size={20} />
            </button>
          </form>
          {/* <p className="text-[12px] mt-2 flex items-center justify-center max-w-fit px-2 rounded gap-1">
            Enter Password
          </p> */}
        </div>
        {/* {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Link href={`${post}`}>
              <div className="px-4 py-2.5 rounded-md duration-300 hover:cursor-pointer">
                <Image
                  src="/folder.png"
                  alt="folder picture"
                  width="100px"
                  height="100px"
                />
              </div>
            </Link>
          </div>
        ))} */}
      </div>

      <div className="fixed bottom-0 z-50 w-screen bg-gradient-to-t from-slate-50 to-bg-transparent left-0 right-0 ml-auto mr-auto h-[40vh] text-center z-100" />
      <div className="fixed bottom-20 z-50 max-w-[700px] w-full left-0 right-0 ml-auto mr-auto h-[40px] text-center">
        <p className="text-sm leading-5 tracking-wide text-gray-200">
          Please consider this iterration of Viperino as Beta.
          Any bug reports may be filled in on our <a>Discord</a>.
          If you are looking to support development you can buy
          me a coffee at <a>Kofi</a>
        </p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "classes/");
  const posts = await fs
    .readdirSync(postDirectory)
    .map((file) => file);
  return { props: { posts } };
}
