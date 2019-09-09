import React, { createContext, useState } from "react";
//컨텍스트 생성

export const SideBarContext = createContext();

const SideBarContextProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <SideBarContext.Provider
      value={{
        isSideOpen,
        setIsSideOpen
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
