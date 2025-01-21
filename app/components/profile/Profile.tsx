import { Link } from "react-router";
import type { FC } from "react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import type { Category } from "~/types/category";
import { Categories } from "./Categories";
import { MonthlyPosts } from "./MonthlyPosts";

type Props = {
  categories: Category[];
  monthlyPosts: {
    totalCount: number;
    month: string;
  }[];
};

export const Profile: FC<Props> = ({ categories, monthlyPosts }: Props) => {
  return (
    <div className="p-8">
      <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>
        <div className="mb-4">
          <img className="w-20 h-20 rounded-full" src="/ava.webp" alt="Description"></img>
        </div>
      </a>
      <p className="mb-4">
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>waka.apps</a>
      </p>
      <div className="flex space-x-4 mb-4">
        <a href="https://github.com/waka-apps" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/appsapw" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/waka.apps/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        富山在住のプログラマー。
        <br />
        フルリモートで働いています。
      </p>
      {/* TODO RSS reader, SNSアイコン */}
      <div className="mt-8 mb-4 border-t border-gray-200"></div>
      <Categories categories={categories} />
      <div className="mt-4 mb-4 border-t border-gray-200"></div>
      <MonthlyPosts monthlyPosts={monthlyPosts} />
    </div>
  );
};
