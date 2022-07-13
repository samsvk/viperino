import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export const Topbar = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const y = setTimeout(() => {
      setOpen(true);
    }, [150]);

    const x = setTimeout(() => {
      setOpen(false);
    }, [5000]);
    return () => {
      clearTimeout(x);
      clearTimeout(y);
    };
  }, []);

  switch (props.type) {
    case "success":
      return (
        <div
          className={`flex max-w-[500px] w-full 
           px-6 py-2 bg-green-300 mx-auto 
           left-0 right-0 absolute 
           top-5 z-[2000] rounded-full border 
         border-green-600
           transition-all duration-500 delay-300
          ${
            open
              ? "opacity-1 visible transform origin-top-right -translate-y-0"
              : "opacity-0 invisible transform origin-top-right -translate-y-1"
          }
          `}
        >
          <p className="text-[14px] flex-1 text-left leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
            {props.children}
          </p>
          <button
            onClick={() => setOpen(false)}
            className="relative left-[.5rem] hover:cursor-pointer hover:text-white duration-200"
          >
            <RiCloseFill />
          </button>
        </div>
      );
    case "failure":
      return (
        <div
          className={`flex max-w-[500px] w-full 
           px-6 py-2 bg-red-300 mx-auto 
           left-0 right-0 absolute 
           top-5 z-[2000] rounded-full border 
         border-red-600
           transition-all duration-200 delay-150
          ${
            open
              ? "opacity-1 visible transform origin-top-right -translate-y-0"
              : "opacity-0 invisible transform origin-top-right -translate-y-1"
          }
          `}
        >
          <p className="text-[14px] flex-1 text-left leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
            {props.children}
          </p>
          <button
            onClick={() => setOpen(false)}
            className="relative left-[.5rem] hover:cursor-pointer hover:text-white duration-200"
          >
            <RiCloseFill />
          </button>
        </div>
      );
    default:
      null;
  }
};
