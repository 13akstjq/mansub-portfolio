import React, { createContext, useState } from "react";

//컨텍스트 생성
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  return (
    <AppContext.Provider
      value={{
        scrollIndex,
        setScrollIndex,
        selectedProject,
        setSelectedProject,
        isSideOpen,
        setIsSideOpen,
        projects
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
