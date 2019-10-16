import React, { createContext, useState } from "react";
import onedayonecommit from "../assets/image/onedayonecommit.png";
import mansubportfolio from "../assets/image/mansubportfolio.png";
import manstagram from "../assets/image/manstagram.png";

//컨텍스트 생성
export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const localProjects = [
    {
      id: 1,
      title: "Portfolio site",
      name: "Han ManSub",
      category: ["React , Hooks"],
      url: "https://mansub.netlify.com",
      postUrl: "",
      photo: mansubportfolio,
      color: "#948798"
    },
    {
      id: 2,
      title: "Instagram Clone",
      name: "Han ManSub",
      category: ["react", "Hooks"],
      url: "https://manstagram.netlify.com/#/",
      postUrl:
        "https://13akstjq.github.io/manstagram/2019/10/14/manstagram-Doc.html",
      photo: manstagram,
      color: "#38416E"
    },
    {
      id: 3,
      title: "Chrome Extension - 1Day 1Commit",
      name: "Han ManSub",
      category: "Vanilla JS",
      url:
        "https://chrome.google.com/webstore/detail/1day1commit/pcmgohbndjdocgcodhijcmlcmahbephf?hl=ko",
      postUrl:
        "https://13akstjq.github.io/chrome-extension/2019/09/06/1Day-1Commit-1일1커밋-매니져.html",
      photo: onedayonecommit,
      color: "#0D8CEB"
    },
    {
      id: 4,
      title: "Copy Link to Slack",
      name: "Han ManSub",
      category: "Vanilla JS",
      url:
        "https://chrome.google.com/webstore/detail/1day1commit/pcmgohbndjdocgcodhijcmlcmahbephf?hl=ko",
      postUrl:
        "https://13akstjq.github.io/chrome-extension/2019/09/06/1Day-1Commit-1일1커밋-매니져.html",
      photo: onedayonecommit,
      color: "#0D8CEB"
    }
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
