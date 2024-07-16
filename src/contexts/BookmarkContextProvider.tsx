import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

type BookmarkContextProviderProps = {
  children: React.ReactNode;
};

type TBookmarkContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
};

const BookmarkContextProvider = ({
  children,
}: BookmarkContextProviderProps) => {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    "bookmarkIds",
    [],
  );

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkIds, handleToggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;
