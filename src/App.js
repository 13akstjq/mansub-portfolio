import React from "react";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import AppContextProvider from "./Context/AppContext";
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <Router />
          </>
        </ThemeProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
