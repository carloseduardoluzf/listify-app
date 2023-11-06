import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "../App/App.style.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/index.jsx";
import "./App.style.jsx";
import Routes from "../../Routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Routes />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
