import { useState } from "react";
import Background from "./components/Background";
import JobContent from "./components/layouts/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/layouts/Sidebar";
import useSearchQuery from "./hooks/useSearchQuery";
import { Toaster } from "sonner";
import { RESULTS_PER_PAGE } from "./lib/constants";
import { type TPageDirection, type TSortBy } from "./lib/types";
import ResultsCount from "./components/ResultsCount";
import SortingControls from "./components/SortingControls";
import JobList from "./components/job/JobList";
import PaginationControls from "./components/PaginationControls";

const App = () => {
  // state
  const { jobs, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  // derived / computed state
  const totalNumberOfResults = jobs?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;
  const sortedJobs = [...(jobs || [])]?.sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore;
    } else {
      return a.daysAgo - b.daysAgo;
    }
  });
  const sortedAndSlicedJobs = sortedJobs.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  // event handlers / actions
  const handlePageChange = (direction: TPageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSortByChange = (newSortBy: TSortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  };

  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm />

          <div className="flex h-full">
            <Sidebar>
              <div className="flex items-center justify-between border-b border-slate-200 p-2 text-sm">
                <ResultsCount totalNumberOfResults={totalNumberOfResults} />
                <SortingControls
                  handleSortByChange={handleSortByChange}
                  sortBy={sortBy}
                />
              </div>
              <div className="min-h-[62vh]">
                <JobList jobs={sortedAndSlicedJobs} isLoading={isLoading} />
              </div>
              <PaginationControls
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                totalNumberOfPages={totalNumberOfPages}
              />
            </Sidebar>
            <JobContent />
          </div>
        </div>

        <Footer />
      </Main>

      <Toaster position="top-right" richColors />
    </Background>
  );
};

export default App;
