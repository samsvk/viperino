import Link from "next/link";

export default function Articles({ posts }) {
  console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <div>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
