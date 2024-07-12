import { ChevronDownIcon } from "@radix-ui/react-icons";

const BookmarkButton = () => {
  return (
    <button className="flex items-center gap-2 rounded-[4px] border border-black px-4 py-2">
      Saved jobs <ChevronDownIcon />
    </button>
  );
};
export default BookmarkButton;
