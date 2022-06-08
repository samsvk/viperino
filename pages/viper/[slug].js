import Head from "next/head";
import { getPostFromSlug, getSlugs } from "../api/api";
// import Link from "next/link";
// import { serialize } from "next-mdx-remote/serialize";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeHighlight from "rehype-highlight";
// import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ post }) {
  return (
    <>
      <div className="w-full max-w-3xl p-10 mx-auto my-0">1</div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  console.log(params);
  const { content, meta } = getPostFromSlug(slug);
  // const mdxSource = await serialize(content, {
  //   mdxOptions: {
  //     rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
  //   },
  // });

  // return { props: { post: { source: mdxSource, meta } } };
  const post = {};
  return { props: { post } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
