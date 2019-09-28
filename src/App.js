import React from "react";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import AppContext from "./Context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <Router />
          </>
        </ThemeProvider>
      </AppContext>
    </div>
  );
}

export default App;
