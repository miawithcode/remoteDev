import { useEffect, useState } from "react";
import Background from "./components/Background";
import JobContent from "./components/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/Sidebar";
import { TJob } from "./lib/types";
import { URL } from "./lib/constants";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState<TJob[]>([]);

  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      const response = await fetch(`${URL}?search=${searchText}`);
      const data = await response.json();
      setJobs(data.jobItems);
    };

    fetchJobs();
  }, [searchText]);

  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm setSearchText={setSearchText} searchText={searchText} />
          <div className="flex h-full">
            <Sidebar jobs={jobs} />
            <JobContent />
          </div>
        </div>

        <Footer />
      </Main>
    </Background>
  );
};

export default App;
