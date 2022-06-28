import * as React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { TbNumbers, TbArrowsRandom } from "react-icons/tb";
export default function Home({ posts }) {
  return (
    <>
      <div className="flex items-center w-full h-full min-h-screen bg-black/80 min-w-screen">
        <div className="flex w-full max-w-4xl gap-5 mx-auto">
          <div className="grid max-w-[385px] w-full grid-cols-2 grid-rows-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-1.5 px-3 border border-green-900 rounded-md bg-green-900/10">
              <h4 className="text-[28px] text-green-500 ">
                <AiOutlineDollarCircle />
              </h4>
              <h5 className="text-base font-semibold text-white">
                Value For Money
              </h5>
              <p className="text-center text-[12px] text-white/60 leading-4 pb-0 mb-0">
                We produce the best guides for less. No
                Subscription, No Contract.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 px-3 border rounded-md border-fuchsia-900 bg-fuchsia-900/10">
              <h4 className="text-[28px] text-fuchsia-500 ">
                <TbNumbers />
              </h4>
              <h5 className="text-base font-semibold text-white">
                Unlimited Guides
              </h5>
              <p className="text-center text-[12px] text-white/60 leading-4 pb-0 mb-0">
                Permanent access to handcrafted guides from top
                ranked players available at your fingertips.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 px-3 border rounded-md border-cyan-900 bg-cyan-900/10">
              <h4 className="text-[28px] text-cyan-500 ">
                <TbArrowsRandom />
              </h4>
              <h5 className="text-base font-semibold text-white">
                All Agents & Maps
              </h5>
              <p className="text-center text-[12px] text-white/60 leading-4 pb-0 mb-0">
                We focus on fundamental game mechanics that
                translate to all agents.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 px-3 border border-indigo-900 rounded-md bg-indigo-900/10">
              <h4 className="text-[28px] text-indigo-500 ">
                <MdAutoGraph />
              </h4>
              <h5 className="text-base font-semibold text-white">
                Progress Over Time
              </h5>
              <p className="text-center text-[12px] text-white/60 leading-4 pb-0 mb-0">
                Our guides upscale - Iron to Radiant
                there&lsquo;s something for everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 px-3 ">
            <div className="mx-auto mb-2 relative min-h-[88px] overflow-hidden min-w-[88px] max-h-[88px] max-w-[88px] w-full h-full rounded-xl">
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
                benefit. We&lsquo;ll provide everything you need
                to go from New to Radiant for{" "}
                <span className="font-semibold text-yellow-400 underline underline-offset-2">
                  $25.00
                </span>
              </p>
            </div>
            <div className="max-w-[400px] mt-10 bg-black/5 duration-300 border rounded-lg border-neutral-900 relative overflow-hidden">
              <p className="px-5 pt-4 pb-4 mb-0 text-center">
                One Time Payment - for the price of one in-game
                skin we&lsquo;ll elevate your game to the next
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
