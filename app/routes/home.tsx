import { Row } from "~/components/posts/Row";
import type { Post } from "~/types/post";

export function meta() {
  return [
    { title: "シンプル一覧ページ" },
    { name: "description", content: "Tailwind CSSで作成したシンプルな一覧ページです" },
  ];
}

export default function Home() {
  // サンプルデータ
  const posts: Post[] = [
    {
      id: "tumblr",
      title: "Tumble API sample",
      content: "Tumblr APIのサンプル",
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Row key={post.id} post={post} />
      ))}
    </div>
  );
}
