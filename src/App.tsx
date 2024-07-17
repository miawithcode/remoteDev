import Background from "./components/Background";
import JobContent from "./components/layouts/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/layouts/Sidebar";
import { Toaster } from "sonner";
import ResultsCount from "./components/ResultsCount";
import SortingControls from "./components/SortingControls";
import PaginationControls from "./components/PaginationControls";
import JobListData from "./components/job/JobListData";

const App = () => {
  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm />

          <div className="flex h-full">
            <Sidebar>
              <div className="flex items-center justify-between border-b border-slate-200 p-2 text-sm">
                <ResultsCount />
                <SortingControls />
              </div>
              <div className="min-h-[62vh]">
                <JobListData />
              </div>
              <PaginationControls />
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
