import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { getSlugs, getPostFromSlug } from "../api/api";

export default function Viper({ posts }) {
  return (
    <>
      <div className="gap-5 max-w-[1000px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100% grid mx-auto mt-20">
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
                className="w-100% max-w-[325px] min-w-[245px] items-center justify-center  border border-zinc-700 rounded "
              >
                <Link href={`/viper/${link}`}>
                  <div className="relative block overflow-auto duration-200 rounded drop-shadow-sm max-w-max shadow-inner-lg will-change-transform hover:cursor-pointer">
                    <div
                      className="absolute top-0 bottom-0 rounded-t left-0 right-0 z-30 block w-full h-full
                   bg-zinc-900 opacity-40 max-h-[168px] max-w-full"
                    />
                    <div
                      className="absolute flex top-0 justify-center items-center bottom-0 rounded-t 
                  text-zinc-100 z-50 left-0 right-0 w-full h-full max-h-[168px] "
                    >
                      <IoPlayCircleOutline size={40} />
                    </div>
                    <div className="absolute top-2 right-2 min-w-[26px] z-50 opacity-70">
                      <Image
                        quality={90}
                        src={`/Poison_Cloud.webp`}
                        alt="folder picture"
                        loading="eager"
                        width="26"
                        height="26"
                        objectFit="cover"
                        className="inline align-bottom scale-110 rounded-t line-height"
                      />
                    </div>
                    <div className="w-[318px] h-[148px] rounded-t block overflow-hidden relative">
                      <Image
                        quality={90}
                        src={`${image}`}
                        alt="folder picture"
                        loading="eager"
                        layout="fill"
                        objectFit="cover"
                        className="inline align-bottom scale-110 rounded-t line-height"
                      />
                    </div>
                  </div>
                </Link>
                <div className="overflow-hidden border-t rounded-b bg-zinc-800 border-zinc-700">
                  <div className="flex items-center gap-2 px-4 my-3">
                    <Link href={`/viper/${link}`}>
                      <h1 className="flex items-center m-0 leading-4 text-[15px] font-medium tracking-wide text-left duration-200 text-zinc-300 hover:text-zinc-50 hover:cursor-pointer">
                        {title}
                      </h1>
                    </Link>
                    <p className="flex items-center mt-1 mb-0 hover:cursor-pointer">
                      <span className="text-[10px] flex items-center justify-center text-zinc-300 bg-zinc-700 max-h-[16px] px-1 rounded">
                        <BsLink45Deg
                          size={14}
                          className="mr-0.5"
                        />{" "}
                        Copy Link
                      </span>
                    </p>
                  </div>
                  <ul className="flex w-full gap-2 mt-0 mb-0 ml-0 leading-4 border-t rounded-b bg-zinc-800 border-zinc-700">
                    <li
                      key={index}
                      className="flex-1 p-1.5 mb-0 text-center list-none"
                    >
                      <span className="leading-4 text-[14px] font-medium tracking-wide text-left duration-200 text-zinc-400 hover:text-zinc-50 hover:cursor-pointer">
                        {map}
                      </span>
                    </li>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="flex-1 p-1.5 mb-0 text-center list-none border-l border-zinc-700"
                      >
                        <span className="leading-4 text-[14px] font-medium tracking-wide text-left duration-200 text-zinc-400 hover:text-zinc-50 hover:cursor-pointer">
                          {tag}
                        </span>
                      </li>
                    ))}
                    <li className="flex-1 mb-0 text-center list-none p-1.5 border-l border-zinc-700">
                      <span className="leading-4 text-[14px] font-medium tracking-wide text-left duration-200 text-zinc-400 hover:text-zinc-50 hover:cursor-pointer">
                        {diff == 1
                          ? "Hard"
                          : diff === 2
                          ? "Medium"
                          : "Easy"}
                      </span>
                    </li>
                  </ul>
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
