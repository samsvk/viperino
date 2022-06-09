import Head from "next/head";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-3xl p-10 mx-auto my-0">
        <div className="w-full max-w-3xl p-10 mx-auto my-0">
          <Link href="/">Home</Link>
          <h1>{post.meta.title}</h1>
          <MDXRemote {...post.source} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const postPath = path.join(path.join(process.cwd(), `classes/viper/`), `${slug}.mdx`);

  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  const meta = {
    slug,
    excerpt: data.excerpt ?? "",
    title: data.title ?? slug,
    tags: (data.tags ?? []).sort(),
    date: (data.date ?? new Date()).toString(),
  };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypeHighlight],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const pats = path.join(process.cwd(), `classes/viper`);

  const pathNames = await fs.readdirSync(pats).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  const paths = pathNames.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
