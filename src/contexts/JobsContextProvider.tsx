import { createContext, useMemo, useState } from "react";
import useSearchQuery from "../hooks/useSearchQuery";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { type TSortBy, type TPageDirection, type TJob } from "../lib/types";
import useSearchTextContext from "../hooks/useSearchTextContext";

export const JobsContext = createContext<TJobsContext | null>(null);

type JobsContextProviderProps = {
  children: React.ReactNode;
};

type TJobsContext = {
  sortedAndSlicedJobs: TJob[];
  isLoading: boolean;
  totalNumberOfResults: number;
  sortBy: TSortBy;
  handleChangeSortBy: (newSortBy: TSortBy) => void;
  currentPage: number;
  handleChangePage: (direction: TPageDirection) => void;
  totalNumberOfPages: number;
};

const JobsContextProvider = ({ children }: JobsContextProviderProps) => {
  // dependency on other contexts
  const { debouncedSearchText } = useSearchTextContext();

  // state
  const { jobs, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  // derived / computed state
  const totalNumberOfResults = jobs?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;
  const sortedJobs = useMemo(
    () =>
      [...(jobs || [])]?.sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [jobs, sortBy],
  );
  const sortedAndSlicedJobs = useMemo(
    () =>
      sortedJobs.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE,
      ),
    [sortedJobs, currentPage],
  );

  // event handlers / actions
  const handleChangePage = (direction: TPageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleChangeSortBy = (newSortBy: TSortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };

  const contextValue = useMemo(
    () => ({
      sortedAndSlicedJobs,
      isLoading,
      totalNumberOfResults,
      sortBy,
      handleChangeSortBy,
      currentPage,
      handleChangePage,
      totalNumberOfPages,
    }),
    [
      sortedAndSlicedJobs,
      isLoading,
      totalNumberOfResults,
      sortBy,
      handleChangeSortBy,
      currentPage,
      handleChangePage,
      totalNumberOfPages,
    ],
  );

  return (
    <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>
  );
};
export default JobsContextProvider;
