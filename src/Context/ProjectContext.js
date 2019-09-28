import React, { createContext, useState } from "react";
import onedayonecommit from "../assets/image/onedayonecommit.png";
import mansubportfolio from "../assets/image/mansubportfolio.png";
import manstagram from "../assets/image/manstagram.png";

//컨텍스트 생성
const MANSTAGRAM = "manstagram";
const ONEDAY_ONECOMMIT = "oneDayOneCommit";
const PORTFOLIO = "portfolio";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const localProjects = [
    {
      id: 1,
      thumbnail: MANSTAGRAM,
      title: "Instagram Clone",
      name: "Han ManSub",
      category: ["react", "Hooks"],
      url: "https://manstagram.netlify.com/#/",
      postURL: "",
      photo: manstagram
    },
    {
      id: 2,
      thumbnail: PORTFOLIO,
      title: "Portfolio site",
      name: "Han ManSub",
      category: ["React , Hooks"],
      url: "https://mansub.netlify.com",
      postURL: "",
      photo: mansubportfolio
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
        "https://13akstjq.github.io/chrome-extension/2019/09/06/1Day-1Commit-1일1커밋-매니져.html",
      photo: onedayonecommit
    }
    // {
    //   id: 4,
    //   thumbnail: "",
    //   title: "제목4",
    //   name: "Han ManSub4",
    //   category: "react4",
    //   url: "",
    //   postURL: " ",
    //   photo: {}
    // },
    // {
    //   id: 5,
    //   thumbnail: "",
    //   title: "제목5",
    //   name: "Han ManSub5",
    //   category: "react5",
    //   url: "",
    //   postURL: " ",
    //   photo: {}
    // },
    // {
    //   id: 6,
    //   thumbnail: "",
    //   title: "제목6",
    //   name: "Han ManSub6",
    //   category: "react6",
    //   url: "",
    //   postURL: " ",
    //   photo: {}
    // }
  ];

  const [projects, setProjects] = useState(localProjects);
  const [posts, setPosts] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <ProjectContext.Provider
      value={{
        scrollIndex,
        setScrollIndex,
        selectedProject,
        setSelectedProject,
        projects,
        posts,
        setPosts,
        setProjects
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
