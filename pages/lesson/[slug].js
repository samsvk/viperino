import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import { YouTube } from "../../components/youtube";
import { Menu } from "../../components/menu";
import { getSlugs, getPostFromSlug } from "../api/api";
import { IoLocation, IoStatsChart } from "react-icons/io5";
import { GiUnlitBomb } from "react-icons/gi";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-4xl p-10 mx-auto my-0">
        <div className="w-full max-w-4xl mx-auto my-0">
          <h1 className="mb-0">{post.meta.title}</h1>
          <div className="flex">
            <ul className="flex gap-2 mb-0 ml-0">
              <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                <IoStatsChart />
                <span className="mt-[2px]">
                  {post.meta.tags[0] == 1
                    ? "Hard"
                    : post.meta.tags[0] === 2
                    ? "Medium"
                    : "Easy"}
                </span>
              </li>
              <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                <GiUnlitBomb />
                <span className="mt-[2px]">
                  {post.meta.tags[1]}
                </span>
              </li>
              <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1">
                <IoLocation />
                <span className="mt-[2px]">
                  {post.meta.tags[2]}
                </span>
              </li>
            </ul>
            <Menu />
          </div>

          <div className="pl-2 mt-4 mb-6 border-l-2 border-gray-100">
            <p>
              Knowing lineups is great, but knowing when, why and
              how to capitalise on them correctly is key to
              levelling up your game. Find coaching from top
              professional and ranked players for as little as
              $50 a hour in our <a href="discord.gg">Discord</a>
            </p>
          </div>
          <YouTube id={post.meta.url} />
          <MDXRemote {...post.source} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug, "viper");

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs("viper").map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
