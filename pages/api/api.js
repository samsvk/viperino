import path from "path";
import fs from "fs";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

const getPostPath = () =>
  path.join(process.cwd(), `classes/${uri}`);

export const getSlugs = () => {
  const paths = path.join(process.cwd(), `classes/viper`);
  const slugs = fs.readdirSync(paths).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
  return slugs;
};

export const getPostFromSlug = (slug) => {
  const postPath = path.join(
    process.cwd(),
    `classes/viper/${slug}.mdx`
  );
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      post: slug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      image: data.image ?? "",
      url: data.url ?? "",
    },
  };
};
