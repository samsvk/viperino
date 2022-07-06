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
import { Table } from "../../components/table";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-4xl p-10 mx-auto my-0">
        <div className="flex gap-4 p-3 border rounded-md border-gray-100/50 bg-gray-50">
          <span className="text-[22px] flex items-start justify-start relative">
            💡
          </span>
          <div>
            <p className="p-o m-0 text-[14px] leading-5 font-normal text-neutral-700/80 tracking-tight ">
              <span className="underline">
                One-to-One coaching now available:
              </span>{" "}
              <span className="line-through">$75</span> now only{" "}
              <span className="font-medium text-black/80">
                $55
              </span>{" "}
              for coaching by top professional Valorant players -
              Join our Discord for more information.
            </p>
          </div>
        </div>
        <Table />
        <YouTube id={post.meta.url} />
        <MDXRemote {...post.source} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug, "all");
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
  const paths = getSlugs("all").map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
