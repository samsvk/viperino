import * as React from "react";
import Router from "next/router";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";

export default function Home({ posts }) {
  return (
    <>
      <div className="w-full h-full min-h-screen pt-20 bg-black min-w-screen">
        <div className="flex w-full max-w-5xl gap-10 mx-auto">
          <div className="flex flex-col flex-2 max-w-[315px] w-full">
            <div className="relative min-h-[315px] overflow-hidden min-w-[315] max-h-[315px] max-w-[315px] w-full h-full rounded-xl ">
              <Image
                src="/avatar.png"
                alt="folder picture"
                objectFit="cover"
                layout="fill"
                height="100%"
                width="100%"
                quality={100}
                loading="eager"
                className="block"
              />
            </div>
            <div className="mt-4">
              <div className="relative flex">
                <div className="w-full pb-5 border-b border-white/30">
                  <h2 className="flex-1 mb-0 text-base font-semibold leading-none tracking-wide text-neutral-100">
                    Last Updated: 28/6/22
                  </h2>
                </div>
                <ul className="absolute top-[-4.5rem] right-[1rem] flex items-center justify-end flex-1 gap-2 mb-0 list-none">
                  <li className="p-2.5 mb-0 bg-black rounded-full text-neutral-100 flex items-center justify-center  duration-300 hover:bg-neutral-900 hover:cursor-pointer">
                    <AiOutlineTwitter size={20} />
                  </li>
                  <li className="p-2.5 mb-0 bg-black hover:cursor-pointer rounded-full text-neutral-100 flex items-center justify-center  duration-300 hover:bg-neutral-900">
                    <BsTwitch size={20} />
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                X is a multi-genre esports player with thousands
                in earnings from three different game titles.
                Bringing the most up to date guides to you.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 px-3">
            <h1 className="text-5xl text-white">
              From New- to Radiant.
            </h1>
            <div className="max-w-[440px] mt-2">
              <h2 className="text-2xl font-normal text-white/80">
                40 different extensive guides, <br />
                for 4 different agents, <br />
                all for{" "}
                <span className="text-yellow-400">$25.00</span>
              </h2>
              {/* <ul className="flex gap-2 p-0 m-0 text-xl list-none ">
                <li className="p-0 m-0 text-xl font-normal text-yellow-400">
                  Viper,
                </li>
                <li className="p-0 m-0 text-xl text-yellow-400">
                  Cypher,
                </li>
                <li className="p-0 m-0 text-xl text-yellow-400">
                  Skye,
                </li>
                <li className="p-0 m-0 text-xl text-yellow-400">
                  Killjoy.
                </li>
              </ul> */}
            </div>

            <div className="mt-10">buy me</div>
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const postDirectory = path.join(process.cwd(), "classes/");
//   const posts = await fs
//     .readdirSync(postDirectory)
//     .map((file) => file);
//   return { props: { posts } };
// }
