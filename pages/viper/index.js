import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Viper({ posts }) {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-3xl min-h-screen gap-3 p-10 mx-auto my-0">
        {posts.map((post, index) => {
          const {
            date,
            title,
            image,
            post: link,
            tags,
          } = post.meta;

          return (
            <div key={index} className="flex flex-col">
              <Link href={`/viper/${link}`}>
                <div className="relative block overflow-auto duration-200 scale-105 rounded-md shadow-inner-lg will-change-transform drop-shadow-sm hover:cursor-pointer">
                  <div
                    className="absolute top-0 bottom-0 rounded-md  left-0 right-0 z-30 block w-full h-full
                   bg-zinc-900 opacity-40 max-h-[145px]"
                  />
                  <div
                    className="absolute flex top-0 justify-center items-center bottom-0 rounded-md 
                  text-zinc-100 z-50 left-0 right-0 w-full h-full max-h-[145px]"
                  >
                    <IoPlayCircleOutline size={40} />
                  </div>
                  <Image
                    quality={90}
                    src={`${image}`}
                    alt="folder picture"
                    loading="eager"
                    layout="fixed"
                    width="235px"
                    height="145px"
                    objectFit="cover"
                    className="block rounded-md"
                  />
                </div>
              </Link>
              <div className="flex gap-3 mt-2">
                <Image
                  quality={100}
                  src={`/viper.png`}
                  alt="viper picture"
                  loading="lazy"
                  layout="fixed"
                  width="28px"
                  height="28px"
                  objectFit="cover"
                  className="block rounded-md"
                />
                <h1 className="mt-1 text-sm font-semibold tracking-wide text-left text-zinc-300">
                  {title}
                </h1>
              </div>
              <ul className="flex gap-3">
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
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        tags: (data.tags ?? []).sort(),
        date: (data.date ?? new Date()).toString(),
        image: data.image ?? "",
      },
    };
  });

  return { props: { posts } };
}
