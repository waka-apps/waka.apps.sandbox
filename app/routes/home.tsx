import { Row } from "~/components/posts/Row";
import type { Post } from "~/types/post";

export function meta() {
  return [{ title: "Sandbox一覧ページ" }, { name: "description", content: "Sandbox一覧ページ" }];
}

export default function Home() {
  // サンプルデータ
  const posts: Post[] = [
    {
      id: "notion",
      title: "Notion API sample",
      content: "Notion APIのサンプル",
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
