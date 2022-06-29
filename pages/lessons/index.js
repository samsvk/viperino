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
import Heading from "../../components/heading";

export default function Viper({ posts }) {
  const [cachedPosts, setCachedPosts] = useState(posts);
  const [filtered, setFiltered] = useState(posts);
  const router = useRouter();
  const { map, side, agent } = router.query;

  useEffect(() => {
    let selectedTags = [];
    Object.values(router.query).forEach(
      (tag) => (selectedTags = [...selectedTags, tag])
    );

    function checkTags(tags) {
      return selectedTags.every((tag) => tags.includes(tag));
    }

    const finals = cachedPosts.filter((post) => {
      if (
        checkTags([
          post.meta.post.split("_")[0].toLowerCase(),
          post.meta.tags[1].toLowerCase(),
          post.meta.tags[2].toLowerCase(),
        ])
      )
        return post;
    });

    setFiltered(finals);
  }, [map, side, agent, router.query]);

  function handleRouter(query) {
    const updatedRoute = { ...router.query, ...query };
    return Router.push({ query: updatedRoute });
  }

  function handleRemoveRouter(passedQueryValue) {
    const filteredQuery = Object.entries(router.query)
      .map((item) => {
        if (!item.includes(passedQueryValue)) {
          return { [item[0]]: item[1] };
        }
      })
      .filter((q) => q !== undefined);

    const newQuery = filteredQuery.reduce((obj, item) => {
      const key = Object.keys(item);
      const value = Object.values(item).toString();
      return { ...obj, [key]: value };
    }, {});

    return Router.push({ query: newQuery });
  }

  return (
    <>
      <div className="w-full h-full min-w-full min-h-screen py-10 bg-black/80 max-w-max">
        {/* <Heading title="Guides" /> */}
        <Maps
          handleRouter={handleRouter}
          handleRemoveRouter={handleRemoveRouter}
          router={router}
        />
        {filtered.length > 0 && (
          <>
            <div className="gap-5 max-w-[1100px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100 grid mx-auto mt-5">
              {filtered.map((post, index) => {
                const {
                  title,
                  image,
                  post: link,
                  tags,
                } = post.meta;
                return (
                  <div
                    className="flex items-start justify-center w-full p-0 m-0"
                    key={index}
                  >
                    <div
                      key={index}
                      className="relative items-center justify-center w-full rounded-md"
                    >
                      <Link href={`/lessons/${link}`}>
                        <div className="relative block overflow-hidden border-box drop-shadow-sm max-w-max shadow-inner-lg will-change-transform hover:cursor-pointer">
                          {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full rounded-t text-zinc-100"> */}
                          {/* <IoPlayCircleOutline size={40} /> */}
                          {/* </div> */}
                          <div className="pb-[56.25%] border border-l-neutral-900 border-b-0 border-r-neutral-900 border-t-neutral-900 relative top-0 h-[0] block overflow-hidden max-w-full w-[100000px] mt-1.5 mb-3 rounded-t-lg group z-10">
                            <Image
                              quality={100}
                              src={`${image}`}
                              alt="folder picture"
                              loading="eager"
                              layout="fill"
                              objectFit="cover"
                              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="justify-start relative flex p-2 gap-2 bg-white/5 border-t mt-[-13px] border-b border-l border-r border-neutral-900 z-100 rounded-b-lg ">
                        <div className="relative block border rounded-full border-neutral-900 bg-black/60 h-[42px] w-[42px] overflow-hidden">
                          <Image
                            src={`/${link.split("_")[0]}.png`}
                            quality={100}
                            layout="fill"
                            objectFit="contain"
                            loading={"eager"}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[14px] font-medium text-white tracking-wide mb-0.5">
                            {title.split(" ").slice(1).join(" ")}
                          </h1>
                          <ul className="flex gap-2 mb-0 ml-0">
                            <li
                              className="text-center text-[10px] text-white/60 leading-4  mb-0     tracking-wider
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 max-h-[22px]"
                            >
                              <span>
                                {tags[0] == 1
                                  ? "Hard"
                                  : tags[0] === 2
                                  ? "Medium"
                                  : "Easy"}
                              </span>
                            </li>
                            <li
                              className="text-center text-[10px] text-white/60 leading-4  mb-0     tracking-wider
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 max-h-[22px]"
                            >
                              <span>{tags[1]}</span>
                            </li>
                            <li
                              className="text-center text-[10px] text-white/60 leading-4  mb-0     tracking-wider
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 max-h-[22px]"
                            >
                              <span>{tags[2]}</span>
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
        )}
        {filtered.length === 0 && (
          <div className="max-w-[440px] py-3 px-0 w-100 mx-auto text-[12px]flex rounded flex justify-center border-gray-100 items-center mt-10">
            <div className="p-5 border border-gray-100 rounded">
              <p>
                Unfortunately, we couldn&lsquo;t find any posts
                with these filters... We&lsquo;re working hard on
                producing more guides - check back later for more
                updates.
              </p>
              <ul className="flex gap-2 ml-0">
                <li
                  onClick={() => Router.push("/lessons")}
                  className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
                >
                  <span className="mt-[2px]">
                    Reset Filters...
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const slugs = getSlugs("all");
  const posts = slugs.map((slug) => getExcerpt(slug, "all"));
  return { props: { posts } };
}
