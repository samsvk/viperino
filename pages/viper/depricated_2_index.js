import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { IoLocation, IoStatsChart } from "react-icons/io5";
import { GiUnlitBomb } from "react-icons/gi";
import { getSlugs, getPostFromSlug } from "../api/api";

export default function Viper({ posts }) {
  return (
    <>
      <div className="gap-y-2.5 max-w-[1000px] w-100% flex flex-col mx-auto mt-20">
        {posts.map((post, index) => {
          const {
            title,
            image,
            post: link,
            tags,
            diff,
            map,
          } = post.meta;
          return (
            <div
              className="flex items-center justify-start w-full h-full border rounded-[2px] border-gray-150 bg-gray-50 overflow-hidden"
              key={index}
            >
              <div className="flex">
                <div className="w-[140px] h-[75px] block overflow-hidden relative rounded-l-[2px]">
                  <Image
                    quality={90}
                    src={`${image}`}
                    alt="folder picture"
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                    className="inline align-bottom scale-[1.3] line-height"
                  />
                </div>
                <Link href={`/viper/${link}`}>
                  <h1 className="ml-5 min-w-[275px] flex items-center mr-2 text-base font-medium leading-none text-gray-700 hover:cursor-pointer hover:text-indigo-600 ">
                    {title}
                  </h1>
                </Link>
              </div>

              <div className="flex w-full max-w-sm">
                <p className="flex items-center flex-1 h-full ml-2 text-sm leading-none text-gray-500">
                  <IoLocation className="mt-0.5" />
                  {map}
                </p>

                <p className="flex items-center flex-1 h-full ml-2 text-sm leading-none text-gray-500">
                  <IoStatsChart className="mt-0.5" />
                  {diff == 1
                    ? "Hard"
                    : diff === 2
                    ? "Medium"
                    : "Easy"}
                </p>

                <p className="flex items-center flex-1 h-full ml-2 text-sm leading-none text-gray-500">
                  <GiUnlitBomb className="mt-0.5" />
                  {tags[0]}
                </p>
              </div>
              <div className="flex justify-end flex-1 mr-5">
                <button className="px-3 py-1.5 bg-gray-200 rounded  text-sm  text-gray-500">
                  See More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const slugs = getSlugs();
  const posts = slugs.map((slug) => getPostFromSlug(slug));
  return { props: { posts } };
}
