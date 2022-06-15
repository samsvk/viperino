import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = () => {
  //   const router = useRouter();
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];
  return (
    // <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1"></li>
    <div className="flex w-full max-w-4xl gap-5 px-10 pt-10 mx-auto my-0">
      <Link href={`/${path}`}>
        <button className="text-sm leading-5 tracking-wide text-indigo-200 duration-200 hover:cursor-pointer hover:text-indigo-300">
          Dashboard
        </button>
      </Link>
      <Link href={`/${path}`}>
        <button className="text-sm leading-5 tracking-wide text-indigo-200 duration-200 hover:cursor-pointer hover:text-indigo-300">
          Back to {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
          Dashboard
        </button>
      </Link>
    </div>
  );
};
