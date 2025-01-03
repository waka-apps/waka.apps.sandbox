import { Link } from "react-router";
import type { FC } from "react";

type Props = {
  title: string;
};

export const ContentHeader: FC<Props> = ({ title }: Props) => {
  return (
    <header className={`pt-8 md:pt-16 w-full `}>
      <h1 className="text-4xl font-light">
        <Link to="/" aria-label={title}>
          {title}
        </Link>
      </h1>
    </header>
  );
};
