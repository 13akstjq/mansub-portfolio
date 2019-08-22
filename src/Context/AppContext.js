import React, { createContext, useState } from "react";

//컨텍스트 생성
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        isSideOpen,
        setIsSideOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
