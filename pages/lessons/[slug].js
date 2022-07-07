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

export default function PostPage({ post }) {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-3xl p-10 mx-auto">
        <h1 className="text-[35px] font-semibold tracking-tight mb-5 text-black text-left">
          {post.meta.title}
        </h1>
        <div className="flex items-center my-10">
          <div className="relative">
            <Image
              src="/avatar.png"
              loading="lazy"
              height={30}
              width={30}
              quality={100}
              className="rounded-full"
              objectFit="cover"
            />
          </div>
          <div className="text-[14px] leading-5 font-normal text-neutral-700/80 my-10  tracking-tight flex gap-1">
            <span>Admin /</span>
            <span>{post.meta.date.split(" ")[1]}</span>
            <span>{post.meta.date.split(" ")[2]},</span>
            <span>{post.meta.date.split(" ")[3]}</span>
          </div>
        </div>

        <div className="flex gap-4 p-3 border rounded-md mt-7 border-gray-100/50 bg-gray-50">
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
