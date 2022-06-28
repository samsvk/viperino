import * as React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function Home({ posts }) {
  return (
    <>
      <div className="flex items-center w-full h-full min-h-screen bg-black/80 min-w-screen">
        <div className="flex w-full max-w-4xl gap-8 mx-auto">
          <div className="flex flex-1"></div>
          <div className="flex flex-col items-center justify-center flex-1 px-3 ">
            <div className="mx-auto mb-2 relative min-h-[88px] overflow-hidden min-w-[88px] max-h-[88px] max-w-[88px] w-full h-full rounded-xl ">
              <Image
                src="/radiant.svg"
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
            <h1 className="text-[32px] font-bold text-white">
              Join Viperino.io
            </h1>
            <div className="max-w-[440px] mt-3">
              <p className="mb-0 text-center">
                Viperino is a modern ecosystem build for your
                benefit. We'll provide everything you need to go
                from New to Radiant for{" "}
                <span className="font-semibold text-yellow-400 underline underline-offset-2">
                  $25.00
                </span>
              </p>
            </div>
            <div className="max-w-[400px] mt-10 bg-black/5 duration-300 border rounded-lg border-neutral-900 relative overflow-hidden">
              <p className="px-5 pt-4 pb-4 mb-0 text-center">
                No Subscription - One Time Payment: for the price
                of one pizza we'll elevate your game to the next
                level.
              </p>
              <button className="group hover:bg-white/5 duration-300 w-full py-2 m-0 border-t border-neutral-900 text-[14px] tracking-wide font-light text-white/90 leading-5 flex items-center justify-center">
                Continue to Payment{" "}
                <span className="ml-2 group-hover:rotate-[-180deg] will-change-transform duration-500">
                  <BsArrowRight
                    size={16}
                    className="text-white/90 group-hover:text-white"
                  />
                </span>
              </button>
            </div>
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
