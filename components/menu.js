import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdReturnLeft } from "react-icons/io";

export const Menu = () => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];
  return (
    <div className="flex items-center justify-end float-right w-full">
      <Link href={`/${path}`}>
        <button className="text-[12px] bg-neutral-800 text-neutral-400 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-200 duration-200 min-h-[22px]">
          <IoMdReturnLeft />
          <span className="mt-[2px]">
            Return to{" "}
            {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
            Dashboard
          </span>
        </button>
      </Link>
    </div>
  );
};
