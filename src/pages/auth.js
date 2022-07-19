import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
const Auth = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center">
        <Link href={`/`}>
          <li className="relative flex items-center mt-5 mb-0">
            <span
              className="tracking-normal no-underline text-[13px] font-medium text-left duration-75 hover:text-black
             text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
            >
              Return to Homepage
            </span>
          </li>
        </Link>
        <div className="max-w-[1200px] w-full mx-auto pt-[25vh] px-6">
          <div className="max-w-[800px] mx-auto relative flex items-center justify-center flex-col">
            <h1 className="text-6xl font-semibold tracking-tight text-black z-[-10] mb-0">
              Sign-in to Viperino
            </h1>
            <p className="text-[18px] text-center leading-7 font-normal tracking-tight text-neutral-700/60 my-8 max-w-[660px] w-full">
              Gain access to a new ecosystem with tools and ideas
              that will help push you past the Valorant learning
              curve.
            </p>
            <form
              className="  max-w-[440px] w-full
            bg-gray-100  
            flex
              focus:outline focus:outline-offset-0 
              hover:outline hover:outline-offset-0
              outline-gray-200 outline-2 
             hover:cursor-pointer 
             min-h-[35px]
             rounded-full 
             px-1 py-1
            "
            >
              <input
                placeholder="Enter your password..."
                role="input"
                type="password"
                className="
              flex-1
              px-4 pt-1 pb-1.5 flex 
              items-center      
              bg-transparent 
              min-h-[35px]
              focus:outline-none focus:outline-offset-0 
              hover:outline-none hover:outline-offset-0
              placeholder:text-base 
              placeholder:text-[14px] 
              placeholder:font-medium 
              placeholder:tracking-tight 
              placeholder:text-left 
              placeholder:text-black/80
              text-base 
              text-[14px] 
              font-medium 
              tracking-tight 
              text-left 
              text-black/80
              "
              />
              <button
                type="submit"
                role="link"
                className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer 
              hover:bg-black/80 duration-200"
              >
                Sign-in
              </button>
            </form>
            <div className="flex flex-row">
              <p className="text-[14px] flex-1 mt-12 leading-5 font-normal text-neutral-700/80 my-10  tracking-tight  flex gap-1 items-center">
                <span className="underline">
                  Don&apos;t have a login?
                </span>{" "}
                <span className="line-through">$65</span> now
                only{" "}
                <span className="font-medium text-black/80">
                  $25
                </span>{" "}
                for permanent access{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </p>
              <form
                action="/api/checkout_sessions"
                method="POST"
              >
                <button
                  type="submit"
                  role="link"
                  className="text-[14px] ml-1 mt-12 leading-5 font-medium text-black/80 my-10 tracking-tight hover:cursor-pointer hover:text-indigo-500 hover:underline"
                >
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hero" />
    </>
  );
};

export default Auth;
