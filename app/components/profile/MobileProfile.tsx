import { Link } from "react-router";
import type { FC } from "react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const MobileProfile: FC = () => {
  return (
    <div className="pt-8 w-full">
      <div className="flex">
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>
          <div className="mb-4">
            <img className="w-20 h-20 rounded-full" src="/ava.webp" alt="Description"></img>
          </div>
        </a>
        <div className="ml-8">
          <div className="flex space-x-4">
            <a href={`${import.meta.env.VITE_MAIN_SITE_URL}/about`}>
              <p className="mb-4">waka.apps</p>
            </a>
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
        </div>
      </div>
    </div>
  );
};
