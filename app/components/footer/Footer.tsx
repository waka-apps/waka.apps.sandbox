import type { FC } from "react";

type Props = {
  title: string;
};

export const Footer: FC<Props> = ({ title }: Props) => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} {title} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
