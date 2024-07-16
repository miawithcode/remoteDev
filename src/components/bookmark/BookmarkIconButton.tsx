import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import useBookmarkContext from "../../hooks/useBookmarkContext";

type BookmarkIconButtonProps = {
  size?: "sm" | "md";
  id: number;
};

const BookmarkIconButton = ({ size = "sm", id }: BookmarkIconButtonProps) => {
  const sizeClassName = {
    sm: "",
    md: "h-5 w-5",
  };

  const { handleToggleBookmark, bookmarkIds } = useBookmarkContext();

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon
        className={`${sizeClassName[size]} text-slate-200 ${bookmarkIds.includes(id) && "text-slate-700"}`}
      />
    </button>
  );
};
export default BookmarkIconButton;
