import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = () => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];
  return (
    <div className="flex items-center justify-end float-right w-full">
      <Link href={`/${path}`}>
        <button className="text-sm leading-5 tracking-wide text-gray-400 duration-200 hover:cursor-pointer hover:text-indigo-300">
          Return to{" "}
          {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
          Dashboard
        </button>
      </Link>
    </div>
  );
};
