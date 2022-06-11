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

function YouTube({ id }) {
  return (
    <div className="pb-[56.25%] relative h-[0] overflow-hidden max-w-full mt-1.5 mb-5 ">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full border-0"
      />
    </div>
  );
}

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="w-full max-w-4xl p-10 mx-auto my-0">
        <div className="w-full max-w-4xl p-10 mx-auto my-0">
          {/* <Link href="/">
            <a className="my-2 text-sm font-medium leading-5 text-blue-300 mb-9">
              Return to Index
            </a>
          </Link> */}
          <h1 className="mb-5">{post.meta.title}</h1>
          <ul className="flex w-full gap-2 mt-[-12px] ml-0 leading-4 mb-0">
            <li className="px-1.5 pt-.5 rounded bg-zinc-800 flex justify-center items-center">
              <span
                className="inline-block w-1.5 h-1.5 mr-1.5 rounded-full max-w-3"
                style={{
                  background: `${
                    post.meta.diff == 1
                      ? "#f87171"
                      : post.meta.diff === 2
                      ? "#facc14"
                      : "#49de80"
                  }`,
                }}
              ></span>
              <span className="text-[12px] font-medium  text-zinc-400">
                {post.meta.diff == 1
                  ? "Hard"
                  : post.meta.diff === 2
                  ? "Medium"
                  : "Easy"}
              </span>
            </li>
            {post.meta.tags.map((tag, index) => (
              <li
                key={index}
                className="px-1.5 pt-.5 rounded bg-zinc-800 flex justify-center items-center"
              >
                <span className="text-[12px] font-medium text-zinc-400">
                  {tag}
                </span>
              </li>
            ))}
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
  const postPath = path.join(
    path.join(process.cwd(), `classes/viper/`),
    `${slug}.mdx`
  );

  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  const meta = {
    slug,
    excerpt: data.excerpt ?? "",
    title: data.title ?? slug,
    tags: (data.tags ?? []).sort(),
    date: (data.date ?? new Date()).toString(),
    url: data.url ?? "",
    diff: data.diff ?? "",
  };

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
