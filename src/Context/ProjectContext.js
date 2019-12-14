import React, { createContext, useState } from "react";
import onedayonecommit from "../assets/image/onedayonecommit.png";
import mansubportfolio from "../assets/image/mansubportfolio.png";
import manstagram from "../assets/image/manstagram.png";
import copyLinkToSlack from "../assets/image/copyLinkToSlack.png";
import blockCar from "../assets/image/blockCar.png";
//컨텍스트 생성
export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(1);
  const localProjects = [
    {
      id: 1,
      title: "개발자 채용 웹 서비스 ",
      name: "Han ManSub",
      category: ["React", "TypeScript", "Redux", "Axios"],
      url: "http://13.125.241.20:8080/#/",
      postUrl: "https://13akstjq.github.io/items/2019/11/03/itsme.html",
      photo: "",
      color: "#512772"
    },
    {
      id: 2,
      title: "블록체인 기반 중고차 거래 서비스 ",
      name: "Han ManSub",
      category: ["React", "TypeScript", "Redux", "Axios"],
      url: "http://13.125.241.20:8081/#/",
      postUrl:
        "https://13akstjq.github.io/blockcar/2019/11/03/%EB%B8%94%EB%A1%9D%EC%B9%B4.html",
      photo: blockCar,
      color: "#CAE6F2"
    },
    {
      id: 3,
      title: "포트폴리오 사이트",
      name: "Han ManSub",
      category: ["React", "ReactHooks", "Firebase", "Context"],
      url: "https://mansub.netlify.com",
      postUrl:
        "https://13akstjq.github.io/portfolio/2019/08/20/portfolio-doc.html",
      photo: mansubportfolio,
      color: "#6D214F"
    },
    {
      id: 4,
      title: "학습용 인스타그램 클론  ",
      name: "Han ManSub",
      category: ["React", "ReactHooks", "GraphQL", "Prisma"],
      url: "https://manstagram.netlify.com/#/",
      postUrl:
        "https://13akstjq.github.io/manstagram/2019/10/14/manstagram-Doc.html",
      photo: manstagram,
      color: "#D6A2E8"
    },
    {
      id: 5,
      title: "1일1커밋을 도와주는 확장프로그램",
      name: "Han ManSub",
      category: ["Vanilla JS"],
      url: "https://13akstjq.github.io/oneDayoneCommit-demo/",
      postUrl:
        "https://13akstjq.github.io/chrome-extension/2019/09/06/1Day-1Commit-1일1커밋-매니져.html",
      photo: onedayonecommit,
      color: "#FD7272"
    },
    {
      id: 6,
      title: "URL을 슬랙에 복사해주는 확장프로그램",
      name: "Han ManSub",
      category: ["Vanilla JS"],
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
