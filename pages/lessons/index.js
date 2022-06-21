import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Maps } from "../../components/maps";
import { getSlugs, getExcerpt } from "../api/api";
import { GiUnlitBomb } from "react-icons/gi";
import {
  IoLocation,
  IoPlayCircleOutline,
  IoStatsChart,
} from "react-icons/io5";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function Viper({ posts }) {
  console.log(posts);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();
  const { map, side, diff } = router.query;

  useEffect(() => {
    if (map && side) {
      setFiltered(
        posts.filter(
          (post) =>
            post?.meta?.tags[2]?.toLowerCase() == map &&
            post?.meta?.tags[1]?.toLowerCase() == side
        )
      );
    } else if (map) {
      setFiltered(
        posts.filter(
          (post) => post?.meta?.tags[2]?.toLowerCase() == map
        )
      );
    } else if (side) {
      setFiltered(
        posts.filter(
          (post) => post?.meta?.tags[1]?.toLowerCase() == side
        )
      );
    } else {
      setFiltered(posts);
    }
  }, [map, side, diff, router.query]);

  function handleRouter(query) {
    const updatedRoute = { ...router.query, ...query };
    return Router.push({ query: updatedRoute });
  }

  return (
    <>
      <Maps handleRouter={handleRouter} />
      <div className="gap-y-6 max-w-[990px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 grid mx-auto mt-5">
        {filtered.map((post, index) => {
          const { title, image, post: link, tags } = post.meta;
          return (
            <div
              className="flex items-start justify-center"
              key={index}
            >
              <div
                key={index}
                className="w-100% max-w-[305px] min-w-[245px] items-center justify-center rounded-md "
              >
                <Link href={`/lessons/${link}`}>
                  <div className="relative block overflow-auto duration-200 rounded-md group drop-shadow-sm max-w-max shadow-inner-lg will-change-transform hover:cursor-pointer">
                    <div
                      className="absolute flex top-0 justify-center items-center bottom-0 rounded-t 
                  text-zinc-100 z-50 left-0 right-0 w-full h-full max-h-[168px]"
                    >
                      <IoPlayCircleOutline size={40} />
                    </div>
                    <div
                      className="group-hover:opacity-5 duration-200 absolute top-0 bottom-0 rounded-t left-0 right-0 z-30 block w-full h-full
                   bg-zinc-900 opacity-[35%] max-h-[168px] max-w-full"
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
                    <h1 className="text-[14px] font-semibold tracking-wide text-gray-800 leading-none">
                      {title.split(" ").slice(1).join(" ")}
                    </h1>
                    <ul className="flex gap-2 mb-0 ml-0">
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
  const slugs = getSlugs("all");
  const posts = slugs.map((slug) => getExcerpt(slug, "all"));
  return { props: { posts } };
}
