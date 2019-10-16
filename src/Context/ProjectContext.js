import React, { createContext, useState } from "react";
import onedayonecommit from "../assets/image/onedayonecommit.png";
import mansubportfolio from "../assets/image/mansubportfolio.png";
import manstagram from "../assets/image/manstagram.png";
import copyLinkToSlack from "../assets/image/copyLinkToSlack.png";
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
      postUrl:
        "https://13akstjq.github.io/portfolio/2019/08/20/portfolio-doc.html",
      photo: mansubportfolio,
      color: "#6D214F"
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
      color: "#D6A2E8"
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
      color: "#FD7272"
    },
    {
      id: 4,
      title: "Copy Link to Slack",
      name: "Han ManSub",
      category: "Vanilla JS",
      url:
        "https://chrome.google.com/webstore/detail/1day1commit/pcmgohbndjdocgcodhijcmlcmahbephf?hl=ko",
      postUrl:
        "https://13akstjq.github.io/chrome-extension/2019/09/06/Copy-Link-to-Slack.html",
      photo: copyLinkToSlack,
      color: "#3B3B98"
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
