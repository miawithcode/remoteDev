import { useState } from "react";
import Background from "./components/Background";
import JobContent from "./components/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/Sidebar";
import useJobs from "./hooks/useJobs";
import useDebounce from "./hooks/useDebounce";
import { Toaster } from "sonner";
import { RESULTS_PER_PAGE } from "./lib/constants";
import { type TSortBy } from "./lib/types";

const App = () => {
  // state
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);
  const { jobs, isLoading } = useJobs(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  // derived / computed state
  const totalNumberOfResults = jobs?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;
  const sortedJobs =
    jobs?.sort((a, b) => {
      if (sortBy === "relevant") {
        return b.relevanceScore - a.relevanceScore;
      } else {
        return a.daysAgo - b.daysAgo;
      }
    }) || [];
  const sortedAndSlicedJobs = sortedJobs.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  // event handlers / actions
  const handlePageChange = (direction: "next" | "previous") => {
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
          <SearchForm setSearchText={setSearchText} searchText={searchText} />
          <div className="flex h-full">
            <Sidebar
              jobs={sortedAndSlicedJobs}
              isLoading={isLoading}
              totalNumberOfResults={totalNumberOfResults}
              totalNumberOfPages={totalNumberOfPages}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              handleSortByChange={handleSortByChange}
              sortBy={sortBy}
            />
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
