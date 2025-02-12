import type { FC } from "react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button className="md:hidden p-2" onClick={onClick} aria-label="メニュー">
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-black transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-full h-0.5 bg-black transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-full h-0.5 bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </div>
    </button>
  );
};
