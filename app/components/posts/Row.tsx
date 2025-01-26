import { format } from "@formkit/tempo";
import { Link } from "react-router";
import { memo } from "react";
import type { FC } from "react";
import { htmlToText } from "~/libs/htmlParser";
import type { Post } from "~/types/post";

type Props = {
  post: Post;
};

export const Row: FC<Props> = memo(({ post }: Props) => {
  const content = htmlToText(post.content).slice(0, 300);

  return (
    <article key={post.id} className="mr-0 md:mr-8  pt-8 border-b border-gray-200">
      <div className="mb-1">
        <time dateTime={`${post.publishedAt}`} className="text-xs text-gray-600">
          {format(post.publishedAt, { date: "full", time: "short" }, "ja")}
        </time>
      </div>
      <h2 className="text-xl font-bold mb-2">
        <Link to={`/${post.id}`}>{post.title}</Link>
      </h2>
      <div className="h-13 mb-6 overflow-hidden line-clamp-2">
        <Link to={`/${post.id}`}>{content}</Link>
      </div>
    </article>
  );
});

Row.displayName = "Post";
