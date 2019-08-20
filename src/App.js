import React from "react";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
