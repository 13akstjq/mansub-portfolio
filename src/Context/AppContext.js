import React, { createContext, useState } from "react";
//컨텍스트 생성
const MANSTAGRAM = "manstagram";
const ONEDAY_ONECOMMIT = "oneDayOneCommit";
const PORTFOLIO = "portfolio";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const localProjects = [
    {
      id: 1,
      thumbnail: MANSTAGRAM,
      title: "Instagram Clone",
      name: "Han ManSub",
      category: ["react", "Hooks"],
      url: "https://manstagram.netlify.com/#/",
      postURL: ""
    },
    {
      id: 2,
      thumbnail: PORTFOLIO,
      title: "Portfolio site",
      name: "Han ManSub",
      category: ["React , Hooks"],
      url: "https://mansub.netlify.com",
      postURL: ""
    },
    {
      id: 3,
      thumbnail: ONEDAY_ONECOMMIT,
      title: "Chrome Extension - 1Day 1Commit",
      name: "Han ManSub",
      category: "Vanilla JS",
      url:
        "https://chrome.google.com/webstore/detail/1day1commit/pcmgohbndjdocgcodhijcmlcmahbephf?hl=ko",
      postURL:
        "https://13akstjq.github.io/chrome-extension/2019/09/06/1Day-1Commit-1일1커밋-매니져.html"
    },
    {
      id: 4,
      thumbnail: "",
      title: "제목4",
      name: "Han ManSub4",
      category: "react4",
      url: "",
      postURL: " "
    },
    {
      id: 5,
      thumbnail: "",
      title: "제목5",
      name: "Han ManSub5",
      category: "react5",
      url: "",
      postURL: " "
    },
    {
      id: 6,
      thumbnail: "",
      title: "제목6",
      name: "Han ManSub6",
      category: "react6",
      url: "",
      postURL: " "
    },
    {
      id: 7,
      thumbnail: "",
      title: "제목7",
      name: "Han ManSub7",
      category: "react7",
      url: "",
      postURL: " "
    },
    {
      id: 8,
      thumbnail: "",
      title: "제목8",
      name: "Han ManSub8",
      category: "react8",
      url: "",
      postURL: " "
    }
  ];

  const [projects, setProjects] = useState(localProjects);
  const [posts, setPosts] = useState([]);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isJobLess, setIsJobLess] = useState(true);
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
        setProjects,
        isAuthOpen,
        setIsAuthOpen,
        isChatOpen,
        setIsChatOpen,
        isJobLess
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
