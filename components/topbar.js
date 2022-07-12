import React from "react";
import { RiCloseFill } from "react-icons/ri";
export const Topbar = (props) => {
  switch (props.type) {
    case "success":
      return (
        <div className="flex max-w-[500px] w-full px-6 py-2 bg-green-300 mx-auto relative top-5 z-[2000] rounded-full border border-green-600">
          <p className="text-[14px] flex-1 text-left leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
            {props.children}
          </p>
          <button className="relative left-[.5rem] hover:cursor-pointer hover:text-white duration-200">
            <RiCloseFill />
          </button>
        </div>
      );
    case "failure":
      return (
        <div className="flex max-w-[500px] w-full px-6 py-2 bg-red-300 mx-auto relative top-5 z-[2000] rounded-full border border-red-600">
          <p className="text-[14px] flex-1 text-left leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
            {props.children}
          </p>
          <button className="relative left-[.5rem] hover:cursor-pointer hover:text-white duration-200">
            <RiCloseFill />
          </button>
        </div>
      );
    default:
      null;
  }
};
