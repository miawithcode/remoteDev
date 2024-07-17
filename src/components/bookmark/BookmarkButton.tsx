import { ChevronDownIcon } from "@radix-ui/react-icons";
import BookmarkPopover from "./BookmarkPopover";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const BookmarkButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

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
