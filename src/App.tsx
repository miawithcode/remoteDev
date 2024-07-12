import Background from "./components/Background";
import JobContent from "./components/JobContent";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200 bg-white">
          <SearchForm />
          <div className="flex h-full">
            <Sidebar />
            <JobContent />
          </div>
        </div>

        <Footer />
      </Main>
    </Background>
  );
};

export default App;
