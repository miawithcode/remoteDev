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

const App = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 250);
  const { jobs, isLoading } = useJobs(debouncedSearchText);

  const totalNumberOfResults = jobs?.length || 0;
  const slicedJobs = jobs?.slice(0, 6) || [];

  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm setSearchText={setSearchText} searchText={searchText} />
          <div className="flex h-full">
            <Sidebar
              jobs={slicedJobs}
              isLoading={isLoading}
              totalNumberOfResults={totalNumberOfResults}
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
