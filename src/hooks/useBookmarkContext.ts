import { useContext } from "react";
import { BookmarkContext } from "../contexts/BookmarkContextProvider";

const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("BookmarkContext is not defined");
  }
  return context;
};
export default useBookmarkContext;
