import { useContext } from "react";
import { BookmarkContext } from "../contexts/BookmarkContextProvider";

const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkContextProvider",
    );
  }
  return context;
};
export default useBookmarkContext;
