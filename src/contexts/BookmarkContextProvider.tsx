import { createContext, useEffect, useState } from "react";

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
  // state
  const [bookmarkIds, setBookmarkIds] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem("bookmarkIds") || "[]"),
  );

  // event handler / actions
  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("bookmarkIds", JSON.stringify(bookmarkIds));
  }, [bookmarkIds]);

  return (
    <BookmarkContext.Provider value={{ bookmarkIds, handleToggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;
