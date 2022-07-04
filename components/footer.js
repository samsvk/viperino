import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="max-w-[800px] w-full mx-auto p-12 pb-[8rem] mt-20 rounded-lg flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-semibold tracking-[0] text-black text-center">
          Our Community and Contributers.
        </h1>
        <p className="text-[18px] leading-7 font-normal text-neutral-700/60 my-8 text-center tracking-tight ">
          We are determined to bring change to educational gaming
          and provide an ecosystem for all - together we
          collaberate to build one tool for you.
        </p>

        <div className="grid gap-6 mt-1 lg:gap-10 lg:grid-cols-3 md:grid-cols-2">
          <button className="flex flex-row items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative hover:bg-black/5 duration-100">
            <span>🐦</span>
            <h5 className="text-base font-medium text-black/80">
              Twitter
            </h5>
          </button>
          <button className="flex flex-row items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative hover:bg-black/5 duration-100">
            <span> 🔴</span>
            <h5 className="text-base font-medium text-black/80">
              YouTube
            </h5>
          </button>
          <button
            className="flex flex-row items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative 
          hover:bg-black/5 duration-100"
          >
            <span>🟣</span>
            <h5 className="text-base font-medium text-black/80">
              Discord
            </h5>
          </button>
        </div>
      </div>
    </>
  );
};
