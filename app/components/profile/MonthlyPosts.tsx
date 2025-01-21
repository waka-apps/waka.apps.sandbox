import { Link } from "react-router";
import type { FC } from "react";

type Props = {
  monthlyPosts: { totalCount: number; month: string }[];
};

export const MonthlyPosts: FC<Props> = ({ monthlyPosts }: Props) => {
  return (
    <>
      <p className="mb-4">Monthly Archives</p>
      {monthlyPosts
        .filter((monthlyPost) => monthlyPost.totalCount >= 1)
        .sort((a, b) => new Date(b.month).getTime() - new Date(a.month).getTime())
        .map((monthlyPost) => (
          <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/monthly/${monthlyPost.month}`} key={monthlyPost.month}>
            <p className="text-gray-600 text-sm pl-2 pb-2">{`${monthlyPost.month.replace(/-/g, "/")} (${
              monthlyPost.totalCount
            })`}</p>
          </a>
        ))}
    </>
  );
};
