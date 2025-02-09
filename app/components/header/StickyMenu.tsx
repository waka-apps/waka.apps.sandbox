import type { FC } from "react";
import { Link } from "react-router";

export const StickyMenu: FC = () => {
  const mainBorder = "border-gray-200";
  const sandboxBorder = "border-gray-600";

  return (
    <header className={`sticky top-0 w-full pt-8 bg-white`}>
      <div className="flex space-x-4 border-b mr-8 border-gray-200 ">
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}`}>
          <div className={`border-b w-14 text-center pb-2 ${mainBorder}`}>
            <span className="text-gray-600 text-sm">Blog</span>
          </div>
        </a>
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>
          <div className={`border-b w-14 text-center pb-2 ${mainBorder}`}>
            <span className="text-gray-600 text-sm">About</span>
          </div>
        </a>
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/quotes`}>
          <div className={`border-b w-14 text-center pb-2 ${mainBorder}`}>
            <span className="text-gray-600 text-sm">Quotes</span>
          </div>
        </a>
        <Link to={"/"}>
          <div className={`border-b w-14 text-center pb-2 ${sandboxBorder}`}>
            <span className="text-gray-600 text-sm">Sandbox</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
