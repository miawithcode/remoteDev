import { BookmarkFilledIcon } from "@radix-ui/react-icons";

type BookmarkIconButtonProps = {
  size?: "sm" | "md";
};

const BookmarkIconButton = ({ size = "sm" }: BookmarkIconButtonProps) => {
  const sizeClassName = {
    sm: "",
    md: "h-5 w-5",
  };

  return (
    <button>
      <BookmarkFilledIcon
        className={`${sizeClassName[size]} text-slate-200 hover:text-slate-900`}
      />
    </button>
  );
};
export default BookmarkIconButton;
