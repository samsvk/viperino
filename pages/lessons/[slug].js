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
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-3xl p-10 mx-auto">
        <div className="flex items-center mt-5">
          <h1 className="flex-1 text-3xl font-bold tracking-tight text-black">
            {post.meta.title}
          </h1>
          <div className="flex items-end justify-end w-max">
            <div
              className="mr-3
         
            tracking-normal no-underline text-[14px] font-medium text-left duration-75  text-black/80 relative
            flex gap-1"
            >
              <span>Admin /</span>
              <span>{post.meta.date.split(" ")[1]}</span>
              <span>{post.meta.date.split(" ")[2]},</span>
              <span>{post.meta.date.split(" ")[3]}</span>
            </div>
            <div className="relative flex items-end justify-end w-max">
              <Image
                src="/avatar.png"
                loading="lazy"
                height={26}
                width={26}
                quality={100}
                className="block border rounded-full border-gray"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-3 mt-4 rounded-md bg-gray-50">
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
