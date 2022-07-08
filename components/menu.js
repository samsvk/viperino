import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineKeyboardReturn } from "react-icons/md";

export const Menu = () => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];

  return (
    <Link href={`/${path}`}>
      <li
        className="hover:bg-gray-100 duration-150 hover:cursor-pointer px-2.5  rounded-md flex max-w-max

              text-[14px] relative leading-5 font-normal text-neutral-700/80 tracking-tight
              "
      >
        <MdOutlineKeyboardReturn
          size={18}
          className="top-[2px] absolute text-neutral-700/50"
        />
        <span className="pl-6">
          {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
        </span>
      </li>
      {/* <button
        className="w-full flex-1
        mb-[0px]
        no-underline text-left duration-75 relative
        flex gap-1 items-center
        hover:cursor-pointer
        p-o m-0 text-[14px] leading-5 font-normal text-neutral-700/80 tracking-tight 
        "
      >
        <MdOutlineKeyboardReturn
          size={18}
          className="top-[3px] absolute text-neutral-700/50"
        />
        <span className="pl-6">
          {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
        </span>
      </button> */}
    </Link>
  );
};
