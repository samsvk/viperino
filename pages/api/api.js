import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getSlugs = (uri) => {
  const paths = path.join(process.cwd(), `classes/${uri}`);
  const slugs = fs.readdirSync(paths).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
  return slugs;
};

export const getPostFromSlug = (slug, uri) => {
  const postPath = path.join(
    process.cwd(),
    `classes/${uri}/${slug}.mdx`
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

export const getExcerpt = (slug, uri) => {
  const postPath = path.join(
    process.cwd(),
    `classes/${uri}/${slug}.mdx`
  );
  const source = fs.readFileSync(postPath);
  const { data } = matter(source);
  return {
    meta: {
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      image: data.image ?? "",
      url: data.url ?? "",
    },
  };
};
