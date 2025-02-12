import { Link } from "react-router";
import { useState, type FC } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";

type Props = {
  title: string;
};

export const ContentHeader: FC<Props> = ({ title }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pt-8 md:pt-16 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-light">
          <Link to="/" aria-label={title}>
            {title}
          </Link>
        </h1>

        <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};
