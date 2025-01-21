import { Link } from "react-router";
import type { FC } from "react";

type Props = {
  title: string;
};

export const ContentHeader: FC<Props> = ({ title }: Props) => {
  return (
    <header className={`pt-8 md:pt-16 w-full `}>
      <h1 className="text-4xl font-light">
        <a href={`${import.meta.env.VITE_MAIN_SITE_URL}`} aria-label={title}>
          {title}
        </a>
      </h1>
    </header>
  );
};
