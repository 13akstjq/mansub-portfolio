import React from "react";
import AuthContextProvider from "./AuthContext";
import BlogContextProvider from "./BlogContext";
import ProjectContextProvider from "./ProjectContext";
import ChatbotContextProvider from "./ChatbotContext";
import SideBarContextProvider from "./SideBarContext";
import UserContextProvider from "./UserContext";
import ConferenceContext from "./ConferenceContext";

const AppContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <ProjectContextProvider>
          <ChatbotContextProvider>
            <SideBarContextProvider>
              <ConferenceContext>
                <UserContextProvider>{children}</UserContextProvider>
              </ConferenceContext>
            </SideBarContextProvider>
          </ChatbotContextProvider>
        </ProjectContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  );
};

export default AppContext;
