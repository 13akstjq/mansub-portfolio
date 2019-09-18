import React from "react";
import Router from "./Router";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import AppContextProvider from "./Context/AppContext";
import UserContextProvider from "./Context/UserContext";
import SideBarContextProvider from "./Context/SideBarContext";
import AuthContextProvider from "./Context/AuthContext";
import ChatbotContextProvider from "./Context/ChatbotContext";
import ProjectContextProvider from "./Context/ProjectContext";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>
          <ChatbotContextProvider>
            <SideBarContextProvider>
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
            </SideBarContextProvider>
          </ChatbotContextProvider>
        </ProjectContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
