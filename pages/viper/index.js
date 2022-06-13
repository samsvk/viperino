import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { getSlugs, getPostFromSlug } from "../api/api";
import { GiUnlitBomb } from "react-icons/gi";
import {
  IoLocation,
  IoPlayCircleOutline,
  IoStatsChart,
} from "react-icons/io5";

export default function Viper({ posts }) {
  return (
    <>
      <div className="max-w-[970px] py-5 px-0 w-100 mx-auto mt-20 text-[12px]flex rounded flex justify-between border-b border-gray-100">
        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Maps:
          </h1>
          <ul className="flex gap-2">
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Breeze</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Bind</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Fracture</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Ascent</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Haven</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Icebox</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Split</span>
            </li>
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Side:
          </h1>
          <ul className="flex gap-2">
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Attack</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Defence</span>
            </li>
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Difficulty:
          </h1>
          <ul className="flex gap-2">
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Easy</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Medium</span>
            </li>
            <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
              <span className="mt-[2px]">Hard</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-y-6 max-w-[990px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 grid mx-auto mt-5">
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
              className="flex items-start justify-center"
              key={index}
            >
              <div
                key={index}
                className="w-100% max-w-[305px] min-w-[245px] items-center justify-center rounded-md "
              >
                <Link href={`/viper/${link}`}>
                  <div className="relative block overflow-auto duration-200 rounded-md drop-shadow-sm max-w-max shadow-inner-lg will-change-transform hover:cursor-pointer">
                    <div
                      className="absolute flex top-0 justify-center items-center bottom-0 rounded-t 
                  text-zinc-100 z-50 left-0 right-0 w-full h-full max-h-[168px] "
                    >
                      <IoPlayCircleOutline size={40} />
                    </div>
                    <div
                      className="absolute top-0 bottom-0 rounded-t left-0 right-0 z-30 block w-full h-full
                   bg-zinc-900 opacity-30 max-h-[168px] max-w-full"
                    />
                    <div className="w-[305px] h-[168px] block overflow-hidden relative">
                      <Image
                        quality={90}
                        src={`${image}`}
                        alt="folder picture"
                        loading="eager"
                        layout="fill"
                        objectFit="cover"
                        className="inline shadow-inner align-bottom scale-[1.22] line-height"
                      />
                    </div>
                  </div>
                </Link>

                <div className="mt-1.5 flex gap-2">
                  <div className="max-h-35 min-h-35">
                    <Image
                      src="/viper.png"
                      height="35"
                      width="35"
                      quality={100}
                      loading={"eager"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
                      {title.split(" ").slice(1).join(" ")}
                    </h1>

                    <ul className="flex gap-2">
                      <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                        <IoStatsChart />
                        <span className="mt-[2px]">
                          {tags[0] == 1
                            ? "Hard"
                            : tags[0] === 2
                            ? "Medium"
                            : "Easy"}
                        </span>
                      </li>
                      <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                        <GiUnlitBomb />
                        <span className="mt-[2px]">
                          {tags[1]}
                        </span>
                      </li>
                      <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                        <IoLocation />
                        <span className="mt-[2px]">
                          {tags[2]}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
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
