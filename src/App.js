import React from "react";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import AppContextProvider from "./Context/AppContext";
import UserContextProvider from "./Context/UserContext";
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <UserContextProvider>
          <ThemeProvider theme={Theme}>
            <>
              <GlobalStyle />
              <Router />
            </>
          </ThemeProvider>
        </UserContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
