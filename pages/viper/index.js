import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { IoPlayCircleOutline } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Viper({ posts }) {
  return (
    <>
      <div className="gap-5 max-w-[1000px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100% grid mx-auto mt-2">
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
                    <div className="w-[318px] h-[168px] rounded-t block overflow-hidden">
                      <Image
                        quality={90}
                        src={`${image}`}
                        alt="folder picture"
                        loading="eager"
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="cover"
                        className="inline align-bottom scale-110 rounded-t line-height"
                      />
                    </div>
                  </div>
                </Link>
                <div className="overflow-hidden border-t rounded-b bg-zinc-800 border-zinc-700">
                  <div className="px-4 my-3">
                    <Link href={`/viper/${link}`}>
                      <h1 className="flex items-center m-0 leading-4 text-[15px] font-medium tracking-wide text-left duration-200 text-zinc-300 hover:text-zinc-50 hover:cursor-pointer">
                        {title}
                      </h1>
                    </Link>
                    <p className="mt-0 mb-0 text-indigo-300 hover:cursor-pointer">{`viperino.gg/v/${link}`}</p>
                  </div>
                  <ul className="flex w-full gap-2 mt-0 mb-0 ml-0 leading-4 border-t rounded-b bg-zinc-800 border-zinc-700">
                    <li className="flex-1 mb-0 text-center list-none p-1.5">
                      <span
                        className="inline-block w-2 mb-[1px] h-2 mr-2 rounded-full max-w-3"
                        style={{
                          background: `${
                            diff == 1
                              ? "#f87171"
                              : diff === 2
                              ? "#facc14"
                              : "#49de80"
                          }`,
                        }}
                      ></span>
                      <span>
                        {diff == 1
                          ? "Hard"
                          : diff === 2
                          ? "Medium"
                          : "Easy"}
                      </span>
                    </li>
                    <li
                      key={index}
                      className="flex-1 p-1.5 mb-0 text-center list-none"
                    >
                      <span>{map}</span>
                    </li>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="flex-1 p-1.5 mb-0 text-center list-none"
                      >
                        <span>{tag}</span>
                      </li>
                    ))}
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
  const paths = path.join(process.cwd(), `classes/viper`);
  const tempPosts = await fs.readdirSync(paths).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  const posts = tempPosts.map((post) => {
    const postPath = path.join(
      process.cwd(),
      `classes/viper/${post}.mdx`
    );
    const source = fs.readFileSync(postPath);
    const { data } = matter(source);
    return {
      meta: {
        post,
        diff: data.diff ?? "",
        title: data.title ?? slug,
        tags: (data.tags ?? []).sort(),
        date: (data.date ?? new Date()).toString(),
        image: data.image ?? "",
        url: data.url ?? "",
        map: data.map ?? "",
      },
    };
  });

  return { props: { posts } };
}
