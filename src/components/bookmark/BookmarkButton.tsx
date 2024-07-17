import { ChevronDownIcon } from "@radix-ui/react-icons";
import BookmarkPopover from "./BookmarkPopover";
import { useEffect, useState } from "react";

const BookmarkButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest("#bookmark-btn") &&
        !e.target.closest("#bookmark-popover")
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
        id="bookmark-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded border border-black px-2 py-1"
      >
        Saved jobs <ChevronDownIcon />
      </button>
      {isOpen && <BookmarkPopover />}
    </div>
  );
};
export default BookmarkButton;
