import fs from "fs";
import path from "path";

export default function Viper({ posts }) {
  return (
    <>
      <div className="flex items-center justify-center w-full max-w-3xl min-h-screen gap-3 p-10 mx-auto my-0">welcome to viper</div>
    </>
  );
}

export async function getStaticProps() {
  const paths = path.join(process.cwd(), `classes/viper`);
  const posts = await fs.readdirSync(paths).map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  return { props: { posts } };
}
