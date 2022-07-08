import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export const Menu = () => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];

  return (
    <Link href={`/${path}`}>
      <button
        className="ml-3 w-full flex-1
            mb-[5px]
            tracking-normal no-underline text-[14px] font-medium text-left duration-75  text-black/80 relative
            flex gap-1 items-center"
      >
        <HiOutlineArrowNarrowLeft /> Go to{" "}
        {path.charAt(0).toUpperCase() + path.slice(1)}{" "}
      </button>
    </Link>
  );
};
