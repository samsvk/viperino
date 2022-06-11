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
      <div className="gap-1 max-w-[1050px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100% grid mx-auto mt-40">
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
              className="flex items-start justify-center"
              key={index}
            >
              <div
                key={index}
                className="w-100% max-w-[245px] min-w-[245px] max-h-max items-center justify-center"
              >
                <Link href={`/viper/${link}`}>
                  <div className="relative block overflow-auto duration-200 rounded-md drop-shadow-md max-w-max shadow-inner-lg will-change-transform hover:cursor-pointer">
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
                    <div className="absolute bottom-0 left-1.5 min-w-[26px] z-50 opacity-90">
                      <Image
                        quality={90}
                        src={`/Poison_Cloud.webp`}
                        alt="folder picture"
                        loading="eager"
                        width="20"
                        height="20"
                        objectFit="cover"
                        className="inline align-bottom scale-110 rounded-md line-height"
                      />
                    </div>
                    <div className="w-[245px] h-[138px] rounded-md block overflow-hidden">
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
                <Link href={`/viper/${link}`}>
                  <h1 className="flex items-center mb-[-12px] mt-[-5px] text-[15px] font-semibold tracking-wide text-left duration-200 text-zinc-300 hover:text-zinc-50 hover:cursor-pointer">
                    {title}
                  </h1>
                </Link>
                <div className="flex items-start justify-start w-full mt-[-8px] max-w-max">
                  <ul className="flex flex-wrap w-full ml-0 gap-x-2">
                    <li className="px-1.5 rounded bg-zinc-800 flex justify-center items-center">
                      <span
                        className="inline-block w-1.5 h-1.5 mr-1.5 rounded-full max-w-3"
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
                      <span className="text-[12px] font-medium text-zinc-400">
                        {diff == 1
                          ? "Hard"
                          : diff === 2
                          ? "Medium"
                          : "Easy"}
                      </span>
                    </li>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="px-1.5 rounded bg-zinc-800 flex justify-center items-center"
                      >
                        <span className="text-[12px] font-medium text-zinc-400">
                          {tag}
                        </span>
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
      },
    };
  });

  return { props: { posts } };
}
