import { ChevronDownIcon } from "@radix-ui/react-icons";
import BookmarkPopover from "./BookmarkPopover";
import { useState } from "react";

const BookmarkButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
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
