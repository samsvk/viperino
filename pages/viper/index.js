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
          } = post.meta;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
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
              <h1 className="m-0 mt-2 text-xs font-semibold text-zinc-500">
                {title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const paths = path.join(process.cwd(), `classes/viper`);
  const tempPosts = await fs
    .readdirSync(paths)
    .map((path) => {
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
