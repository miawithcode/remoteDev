import { useState } from "react";
import Background from "./components/Background";
import JobContent from "./components/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/Sidebar";
import useJobs from "./hooks/useJobs";
import useActiveId from "./hooks/useActiveId";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [jobs, isLoading] = useJobs(searchText);
  const activeId = useActiveId();

  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm setSearchText={setSearchText} searchText={searchText} />
          <div className="flex h-full">
            <Sidebar jobs={jobs} isLoading={isLoading} />
            <JobContent />
          </div>
        </div>

        <Footer />
      </Main>
    </Background>
  );
};

export default App;
