import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import Image from "next/image";

export const Menu = ({ post }) => {
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];

  return (
    <div className="flex mt-3.5">
      <div className="flex-1 w-full">
        <Link href={`/${path}`}>
          <li className="relative flex items-center mb-0">
            <MdOutlineKeyboardReturn
              size={19}
              className="mr-1.5 text-neutral-700/10 top-[3px] absolute"
            />
            <span className="ml-6 tracking-normal no-underline text-[14px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer relative after:absolute after:w-full after:bottom-[-0px] after:left-0 after:bg-black/5 after:h-[1px]">
              Return to{" "}
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </span>
          </li>
        </Link>
      </div>
      <div className="relative flex items-end justify-end w-max">
        <div
          className="mr-3 pr-5
            tracking-normal no-underline text-[14px] font-medium text-left duration-75  text-black/80 relative
            flex gap-1"
        >
          <span>Posted On: </span>
          <span>{post.meta.date.split(" ")[1]}</span>
          <span>{post.meta.date.split(" ")[2]},</span>
          <span>{post.meta.date.split(" ")[3]}</span>
        </div>
        <div className="absolute flex items-end justify-end w-max top-[-2px]">
          <Image
            src="/avatar.png"
            loading="lazy"
            height={26}
            width={26}
            quality={100}
            className="block border rounded-full border-gray"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
