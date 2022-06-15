import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { YouTube } from "../../components/youtube";
import { Menu } from "../../components/menu";
import { getSlugs, getPostFromSlug } from "../api/api";
import {
  IoLocation,
  IoPlayCircleOutline,
  IoStatsChart,
} from "react-icons/io5";
import { GiUnlitBomb } from "react-icons/gi";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      {/* <Link href="/">
        <a className="my-2 text-sm font-medium leading-5 text-blue-300 mb-9">
          Return to Index
        </a>
      </Link> */}

      <Menu />
      <div className="w-full max-w-4xl p-10 mx-auto my-0">
        <div className="w-full max-w-4xl p-5 mx-auto my-0">
          <h1 className="mb-3">{post.meta.title}</h1>
          <ul className="flex gap-2 mb-6">
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

          <YouTube id={post.meta.url} />
          <MDXRemote {...post.source} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);

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
  const paths = getSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
