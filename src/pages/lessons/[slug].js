import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { YouTube } from "../../components/youtube";
import { getSlugs, getPostFromSlug } from "../api/api";
import { Table } from "../../components/table";
import { Menu } from "../../components/menu";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>Viperino | {post.meta.title}</title>
      </Head>
      <div className="w-full max-w-3xl p-10 mx-auto">
        <div className="flex flex-row w-full mt-5 max-w-max">
          <div
            className="min-h-[64px] min-w-[64px] max-w-[64px] max-h-[64px] w-full h-full 
              backdrop-blur bg-gray-100 flex items-center justify-center overflow-hidden
              border-neutral-600/5 border rounded-full
              "
          >
            <Image
              src={`/${post.meta.post.split("_")[0]}.png`}
              quality={100}
              layout="fill"
              objectFit="contain"
              loading={"eager"}
            />
          </div>
          <div className="flex flex-col justify-center ml-3">
            <h1 className="relative flex items-center text-3xl font-bold tracking-tight text-black">
              {post.meta.title}
            </h1>
            <Table post={post} />
          </div>
        </div>

        <div className="flex gap-4 px-5 py-3 mt-3 bg-gray-100 rounded-md">
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
        <Menu post={post} />
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
