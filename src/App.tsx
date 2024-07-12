import Background from "./components/Background";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <Background>
      <Main>
        <Header />

        <div className="rounded-lg border border-slate-200">
          <SearchForm />
          <div>
            {/* <Sidebar />
            <JobDetail /> */}
          </div>
        </div>
      </Main>
    </Background>
  );
};

export default App;
