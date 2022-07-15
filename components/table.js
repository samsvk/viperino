import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import Image from "next/image";

export const Table = ({ post }) => {
  return (
    <div className="flex items-center mt-1.5 mb-5">
      <ol className="flex flex-row items-center flex-1 m-0 gap-7 p0">
        <li className="flex items-center mb-0">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#why-this-lineup"
            className="tracking-normal t no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Overview
          </a>
        </li>

        <li className="flex items-center mb-0">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#benefits"
            className="tracking-normal no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Benefits
          </a>
        </li>
        <li className="flex items-center mb-0">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#limitations"
            className="tracking-normal no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Limitations
          </a>
        </li>
        <li className="flex items-center mb-0">
          <IoDocumentTextSharp
            size={19}
            className="mr-1.5 text-neutral-700/10"
          />
          <a
            href="#limitations"
            className="tracking-normal no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]"
          >
            Conclusion
          </a>
        </li>
      </ol>
    </div>
  );
};
