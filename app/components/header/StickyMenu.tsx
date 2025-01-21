import { Link, useLocation } from "react-router";
import type { FC } from "react";

export const StickyMenu: FC = () => {
  const location = useLocation();

  const blogBorder = "border-gray-200";
  const aboutBorder = "border-gray-200";
  const sandboxBorder = location.pathname === "/" ? "border-gray-600" : "border-gray-200";

  return (
    <header className={`sticky top-0 w-full pt-8 bg-white`}>
      <div className="flex space-x-4 border-b mr-8 border-gray-200 ">
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}`}>
          <div className={`border-b w-14 text-center pb-2 ${blogBorder}`}>
            <span className="text-gray-600 text-sm">Blog</span>
          </div>
        </a>
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>
          <div className={`border-b w-14 text-center pb-2 ${aboutBorder}`}>
            <span className="text-gray-600 text-sm">About</span>
          </div>
        </a>
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}`}>
          <div className={`border-b w-14 text-center pb-2 ${sandboxBorder}`}>
            <span className="text-gray-600 text-sm">Sandbox</span>
          </div>
        </a>
      </div>
    </header>
  );
};
