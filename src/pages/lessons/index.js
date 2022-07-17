import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Maps } from "../../components/maps";
import { getSlugs, getExcerpt } from "../api/api";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";

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
      <div className="w-full h-full min-w-full min-h-screen py-10 bg-white rounded-md max-w-max">
        <Maps
          handleRouter={handleRouter}
          handleRemoveRouter={handleRemoveRouter}
          router={router}
          amount={cachedPosts.length}
        />
        {filtered.length > 0 && (
          <>
            <div className="p-5 md:p-2.5 mt-0 grid max-w-[1100px] mx-auto w-full lg:grid-cols-4 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3 grid-rows-6 md:gap-5 gap-8">
              {filtered.map((post, index) => {
                const {
                  title,
                  image,
                  post: link,
                  tags,
                } = post.meta;
                return (
                  <div
                    className="relative flex flex-col items-center justify-center overflow-hidden rounded-md"
                    key={index}
                  >
                    <Link href={`/lessons/${link}`}>
                      <div
                        className="border border-gray group hover:cursor-pointer pb-[56.25%] relative top-0 h-[0] block 
                      overflow-hidden max-w-full w-full rounded-md z-10"
                      >
                        <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full duration-150 scale-125 group-hover:bg-gray-800/5 bg-gray-800/30 will-change-transform">
                          <div
                            className="duration-150 group-hover:scale-110 h-[28px] w-[28px] 
                          rounded-full border-[1px] border-white/90 flex items-center justify-center
                          group-hover:border-white will-change-transform
                          "
                          />
                          <IoPlaySharp
                            className="absolute ml-[2px] duration-150 text-white/90 group-hover:text-white"
                            size={14}
                          />
                        </div>
                        <Image
                          quality={100}
                          src={`${image}`}
                          alt="folder picture"
                          loading="eager"
                          layout="fill"
                          objectFit="cover"
                          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-200 scale-[1.1] group-hover:scale-[1.12]"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-row justify-start w-full gap-2 mt-3">
                      <div className="relative block border border-neutral-600/5 rounded-full bg-gray-100 h-[40px] w-[40px] min-w-[40px] overflow-hidden">
                        <Image
                          src={`/${link.split("_")[0]}.png`}
                          quality={100}
                          layout="fill"
                          objectFit="contain"
                          loading={"eager"}
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/lessons/${link}`}>
                          <h5 className="text-[13px] font-medium text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer">
                            {title}
                          </h5>
                        </Link>
                        <ul className="flex flex-row gap-1.5 p-0 m-0 mt-0.5 list-none">
                          <li className="bg-gray-100 px-2.5  rounded-md flex text-[11px] leading-5 font-normal text-neutral-700/80">
                            {tags[0] == 1
                              ? "Hard"
                              : tags[0] === 2
                              ? "Medium"
                              : "Easy"}
                          </li>
                          <li className="bg-gray-100 px-2.5  rounded-md flex text-[11px] leading-5 font-normal text-neutral-700/80">
                            {tags[1]}
                          </li>
                          <li className="bg-gray-100 px-2.5  rounded-md flex text-[11px] leading-5 font-normal text-neutral-700/80">
                            {tags[2]}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {/* {filtered.length === 0 && (
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
        )} */}
      </div>
      <div className="hero" />
    </>
  );
}

export async function getStaticProps() {
  const slugs = getSlugs("all");
  const posts = slugs.map((slug) => getExcerpt(slug, "all"));
  return { props: { posts } };
}
