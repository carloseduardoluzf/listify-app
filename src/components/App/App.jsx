import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "../App/App.style.jsx";
import ListManager from "../ListManager/ListManager.jsx";
import Header from "../Header/Header.jsx";
import "./App.style.jsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header/>
        <ListManager/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
