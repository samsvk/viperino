import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Viper({ posts }) {
  return (
    <>
      {/* <div className="flex flex-wrap justify-start max-w-6xl m-0 mx-auto my-20 gap-y-12"> */}
      <div className="grid flex-wrap justify-start max-w-6xl grid-cols-4 m-0 mx-auto my-20">
        {posts.map((post, index) => {
          const {
            date,
            title,
            image,
            post: link,
            tags,
            diff,
          } = post.meta;
          return (
            <div
              key={index}
              className="flex flex-col items-center self-center justify-center max-w-full overflow-hidden max-h-max"
            >
              <Link href={`/viper/${link}`}>
                <div className="relative block overflow-auto duration-200 rounded-md max-w-max shadow-inner-lg will-change-transform drop-shadow-sm hover:cursor-pointer">
                  <div
                    className="absolute top-0 bottom-0 rounded-md left-0 right-0 z-30 block w-full h-full
                   bg-zinc-900 opacity-40 max-h-[145px] max-w-full"
                  />
                  <div
                    className="absolute flex top-0 justify-center items-center bottom-0 rounded-md 
                  text-zinc-100 z-50 left-0 right-0 w-full h-full max-h-[145px] "
                  >
                    <IoPlayCircleOutline size={40} />
                  </div>
                  <div className="w-[245px] h-[135px] rounded-md block overflow-hidden">
                    <Image
                      quality={90}
                      src={`${image}`}
                      alt="folder picture"
                      loading="eager"
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="cover"
                      className="inline align-bottom scale-110 rounded-md line-height"
                    />
                  </div>
                </div>
              </Link>
              <div className="w-full mt-2">
                <div className="flex ml-6">
                  <Image
                    quality={100}
                    src={`/viper.png`}
                    alt="viper picture"
                    loading="lazy"
                    layout="fixed"
                    width="40px"
                    height="40px"
                    objectFit="cover"
                    className="block rounded-md leading-[0px]"
                  />
                  <div className="ml-3 mt-[-5px]">
                    <h1 className="mt-1 text-sm font-semibold tracking-wide text-left text-zinc-300 ">
                      {title}
                    </h1>
                    <ul className="flex w-full gap-2 mt-[-11px]">
                      <li className="px-1.5 pt-.5 pb-0.5 rounded bg-zinc-800 flex justify-center items-center">
                        <span
                          className="inline-block w-1.5 h-1.5 mr-1.5 mt-0.5 rounded-full max-w-3"
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
                        <span className="text-xs font-semibold text-zinc-400">
                          {diff == 1
                            ? "Hard"
                            : diff === 2
                            ? "Medium"
                            : "Easy"}
                        </span>
                      </li>
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="px-1.5 pt-.5 pb-0.5 rounded bg-zinc-800 flex justify-center items-center"
                        >
                          <span className="text-xs font-semibold text-zinc-400">
                            {tag}
                          </span>
                        </li>
                      ))}
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
      },
    };
  });

  return { props: { posts } };
}
