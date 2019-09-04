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
      markdowm: "'# This is a header\n\nAnd this is a paragraph'"
    },
    {
      id: 2,
      thumbnail: PORTFOLIO,
      title: "Portfolio site",
      name: "Han ManSub",
      category: ["React , Hooks"],
      url: "https://mansub.netlify.com",
      markdowm:
        "## React + Hooks + Firebase 로 개발한 포트폴리오 사이트 입니다. "
    },
    {
      id: 3,
      thumbnail: ONEDAY_ONECOMMIT,
      title: "Chrome Extension - 1Day 1Commit",
      name: "Han ManSub",
      category: "Vanilla JS",
      url:
        "https://chrome.google.com/webstore/detail/1day1commit/pcmgohbndjdocgcodhijcmlcmahbephf?hl=ko",
      markdowm:
        "## vanilla JS로 개발한 1일 1 커밋을 도와주는 구글 크롬 확장프로그램입니다. "
    },
    {
      id: 4,
      thumbnail: "",
      title: "제목4",
      name: "Han ManSub4",
      category: "react4",
      url: "",
      markdowm: " "
    },
    {
      id: 5,
      thumbnail: "",
      title: "제목5",
      name: "Han ManSub5",
      category: "react5",
      url: "",
      markdowm: " "
    },
    {
      id: 6,
      thumbnail: "",
      title: "제목6",
      name: "Han ManSub6",
      category: "react6",
      url: "",
      markdowm: " "
    },
    {
      id: 7,
      thumbnail: "",
      title: "제목7",
      name: "Han ManSub7",
      category: "react7",
      url: "",
      markdowm: " "
    },
    {
      id: 8,
      thumbnail: "",
      title: "제목8",
      name: "Han ManSub8",
      category: "react8",
      url: "",
      markdowm: " "
    }
  ];

  const [projects, setProjects] = useState(localProjects);
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
        setProjects,
        isAuthOpen,
        setIsAuthOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
