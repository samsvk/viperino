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
        <button className="text-[12px] min-h-[22px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1   hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
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
