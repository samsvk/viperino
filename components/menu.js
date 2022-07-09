import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineKeyboardReturn } from "react-icons/md";

export const Menu = () => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];

  return (
    <Link href={`/${path}`}>
      <li className="relative flex items-center mb-0">
        <MdOutlineKeyboardReturn
          size={19}
          className="mr-1.5 text-neutral-700/10 top-[3px] absolute"
        />
        <span className="ml-6 tracking-normal no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]">
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </span>
      </li>
    </Link>
  );
};
