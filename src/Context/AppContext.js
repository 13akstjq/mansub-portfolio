import React, { createContext, useState } from "react";

//컨텍스트 생성
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const projects = [
    { id: 1, title: "제목1", name: "Han ManSub1", category: "react1" },
    { id: 2, title: "제목2", name: "Han ManSub2", category: "react2" },
    { id: 3, title: "제목3", name: "Han ManSub3", category: "react3" },
    { id: 4, title: "제목4", name: "Han ManSub4", category: "react4" },
    { id: 5, title: "제목5", name: "Han ManSub5", category: "react5" },
    { id: 6, title: "제목6", name: "Han ManSub6", category: "react6" },
    { id: 7, title: "제목7", name: "Han ManSub7", category: "react7" },
    { id: 8, title: "제목8", name: "Han ManSub8", category: "react8" }
  ];

  const [posts, setPosts] = useState([]);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
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
        projects,
        posts,
        setPosts,
        isAuthOpen,
        setIsAuthOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
