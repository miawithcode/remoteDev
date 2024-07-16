import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { type TJobItem } from "../lib/types";
import useJobItems from "../hooks/useJobItems";

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

type BookmarkContextProviderProps = {
  children: React.ReactNode;
};

type TBookmarkContext = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkJobs: TJobItem[];
  isLoading: boolean;
};

const BookmarkContextProvider = ({
  children,
}: BookmarkContextProviderProps) => {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    "bookmarkIds",
    [],
  );

  const { jobItems: bookmarkJobs, isLoading } = useJobItems(bookmarkIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkIds,
        handleToggleBookmark,
        bookmarkJobs,
        isLoading,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;
