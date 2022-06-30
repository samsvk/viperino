import * as React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { TbNumbers, TbArrowsRandom } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="max-w-[1100px] w-full mx-auto pt-40">
          <div className="max-w-[550px] relative z-50">
            <h1 className="text-5xl font-semibold tracking-[0] text-black">
              Become a member.
            </h1>
            <h1 className="text-5xl font-semibold tracking-[0] text-black">
              Gain access now.
            </h1>
            <p className="text-[16px] leading-6 font-normal text-neutral-700/60 my-10">
              Support Viperino development and gain access to new
              tools and ideas that will help push you past the
              Valorant learning curve.
            </p>

            <button
              className="px-5 py-1.5 bg-black rounded-full text-[14px] leading-6 font-medium text-white hover:cursor-pointer 
              hover:bg-black/80 duration-200"
            >
              Join Viperino Now
            </button>

            <p className="text-[13px] leading-5 font-medium text-neutral-700/80 my-10">
              <span className="underline">
                Limited price for New Members:
              </span>{" "}
              <span className="line-through">$65</span> now only{" "}
              <span className="font-medium text-black/80">
                $25
              </span>{" "}
              for permanent access.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center w-full gap-5 mx-auto max-w-[1100px]  rounded-lg mb-10 mt-20">
          <div className="grid max-w-[100%] w-full grid-cols-3 grid-rows-2 gap-10">
            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <AiOutlineDollarCircle />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Value For Money
              </h5>

              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                We produce the best guides for less. No
                Subscription, No Contract - Simply a One-Time
                payment.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <TbNumbers />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Unlimited Guides
              </h5>
              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                Permanent access to handcrafted guides from top
                ranked players available at your fingertips.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <TbArrowsRandom />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                All Agents - All Maps
              </h5>
              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                We cover fundamental game mechanics that
                translate to all agents.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <MdAutoGraph />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Progress Over Time
              </h5>
              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                Our guides upscale - Iron to Radiant
                there&lsquo;s something for everyone.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <BsFillLightningChargeFill />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Speed
              </h5>
              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                New Update? No problem - we guarantee to have
                content produced or updated intime for
                competitive release.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <AiOutlineHeart />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Quality
              </h5>
              <p className="text-[13px] text-center leading-5 font-medium text-neutral-700/80 m-0 p-0">
                From our entire system, to our content produced -
                we have build a foundation that allows us to
                produce the highest quality guides.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero" />
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
