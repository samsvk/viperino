import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";

export const Table = () => {
  return (
    <div className="mt-5 mb-7">
      <h1 className="text-2xl font-semibold tracking-tight text-black z-[-10] mb-3.5">
        Table of Content
      </h1>
      <ol className="flex flex-col gap-0.5 m-0 p0">
        <li className="flex items-center">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#why-this-lineup"
            className="no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Why this lineup?
          </a>
        </li>

        <li className="flex items-center">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#benefits"
            className="no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Benefits
          </a>
        </li>
        <li className="flex items-center">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#limitations"
            className="no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Limitations
          </a>
        </li>
      </ol>
    </div>
  );
};
