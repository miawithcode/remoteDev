import { ChevronDownIcon } from "@radix-ui/react-icons";
import BookmarkPopover from "./BookmarkPopover";
import { useEffect, useRef, useState } from "react";

const BookmarkButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !buttonRef.current?.contains(e.target) &&
        !popoverRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded border border-black px-2 py-1"
      >
        Saved jobs <ChevronDownIcon />
      </button>
      {isOpen && <BookmarkPopover ref={popoverRef} />}
    </div>
  );
};
export default BookmarkButton;
