import React from "react";
import AuthContextProvider from "./AuthContext";
import BlogContextProvider from "./BlogContext";
import ProjectContextProvider from "./ProjectContext";
import ChatbotContextProvider from "./ChatbotContext";
import SideBarContextProvider from "./SideBarContext";
import UserContextProvider from "./UserContext";

const AppContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <ProjectContextProvider>
          <ChatbotContextProvider>
            <SideBarContextProvider>
              <UserContextProvider>{children}</UserContextProvider>
            </SideBarContextProvider>
          </ChatbotContextProvider>
        </ProjectContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  );
};

export default AppContext;
