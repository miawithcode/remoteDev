import Background from "./components/Background";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";

const App = () => {
  return (
    <Background>
      <Main>
        <Header />
      </Main>
    </Background>
  );
};

export default App;
