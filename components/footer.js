import React from "react";

export const Footer = () => {
  return (
    <div className="max-w-[875px] w-full mx-auto p-12 pb-[8rem] mt-20 rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold tracking-[0] text-black">
        Our Community and Contributers.
      </h1>
      <p className="text-[22px] leading-7 font-normal text-neutral-700/60 my-5 text-center">
        We are determined to bring change to educational gaming
        and provide an ecosystem for all - together we
        collaberate to build one tool for you.
      </p>

      <div className="flex gap-3 mt-1">
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
        <button className="flex flex-row items-center justify-center gap-1.5 py-5 px-8 border border-gray rounded-md overflow-hidden relative hover:bg-black/5 duration-100">
          <span>🟣</span>
          <h5 className="text-base font-medium text-black/80">
            Discord
          </h5>
        </button>
      </div>
    </div>
  );
};
