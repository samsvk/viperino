import * as React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { TbNumbers, TbArrowsRandom } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
export default function Home({ posts }) {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log(
        "Order placed! You will receive an email confirmation."
      );
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="max-w-[1200px] w-full mx-auto pt-[25vh]  px-6 ">
          <div className="max-w-[800px] relative">
            <h1 className="text-6xl font-semibold tracking-tight text-black z-[-10]">
              Support development.
            </h1>
            <h1 className="text-6xl font-semibold tracking-tight text-black mt-1.5">
              Get access forever.
            </h1>
            <p className="text-[18px] leading-7 font-normal tracking-tight text-neutral-700/60 my-10 max-w-[660px] w-full">
              Gain access to a new ecosystem with tools and ideas
              that will help push you past the Valorant learning
              curve.
            </p>

            <form action="/api/checkout_sessions" method="POST">
              <button
                type="submit"
                role="link"
                className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer 
              hover:bg-black/80 duration-200"
              >
                Join Viperino Now
              </button>
            </form>

            <p className="text-[14px] leading-5 font-normal text-neutral-700/80 my-10  tracking-tight ">
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
        <div className="flex items-center w-full gap-5 mx-auto max-w-[1200px] rounded-lg mb-10 mt-20  px-6 ">
          <div className="grid max-w-[100%] w-full lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 md:gap-10  gap-8">
            <div className="flex py-10 flex-col items-center justify-center gap-1.5 px-8 border border-gray rounded-md overflow-hidden relative">
              <h4 className="text-[28px] text-neutral-700/10">
                <AiOutlineDollarCircle />
              </h4>
              <h5 className="text-base font-medium text-black/80">
                Value For Money
              </h5>

              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
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
              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0  tracking-tight ">
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
              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0  tracking-tight ">
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
              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0  tracking-tight">
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
              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0  tracking-tight ">
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
              <p className="text-[14px] text-center leading-5 font-normal text-neutral-700/80 m-0 p-0  tracking-tight ">
                From our entire system, to our content produced -
                we have build a foundation that allows us to
                produce the highest quality guides.
              </p>
            </div>
          </div>
        </div>
        <Footer />
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
