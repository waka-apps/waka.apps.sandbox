import type { FC } from "react";
import { Link } from "react-router";

type Props = {
  isOpen: boolean;
};

export const MobileMenu: FC<Props> = ({ isOpen }) => {
  return (
    <nav
      className={`
        md:hidden
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}
      `}
    >
      <ul className="space-y-4">
        <li>
          <a href={`${import.meta.env.VITE_MAIN_SITE_URL}`}>Blog</a>
        </li>
        <li>
          <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`} className="block">
            About
          </a>
        </li>
        <li>
          <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/quotes`} className="block">
            Quotes
          </a>
        </li>
        <li>
          <Link to={"/"}>Sandbox</Link>
        </li>
      </ul>
    </nav>
  );
};
