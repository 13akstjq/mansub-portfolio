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
  const posts = [
    { id: 1, title: "블로그1", name: "Han ManSub1", category: "게시물1" },
    { id: 2, title: "블로그2", name: "Han ManSub2", category: "게시물2" },
    { id: 3, title: "블로그3", name: "Han ManSub3", category: "게시물3" },
    { id: 4, title: "블로그4", name: "Han ManSub4", category: "게시물4" },
    { id: 5, title: "블로그5", name: "Han ManSub5", category: "게시물5" },
    { id: 6, title: "블로그6", name: "Han ManSub6", category: "게시물6" },
    { id: 7, title: "블로그7", name: "Han ManSub7", category: "게시물7" },
    { id: 8, title: "블로그8", name: "Han ManSub8", category: "게시물8" }
  ];
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
        isAuthOpen,
        setIsAuthOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
