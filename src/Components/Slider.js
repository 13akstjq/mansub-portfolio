import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import BigCard from "./BigCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../Styles/Slider.css";

const Wrapper = styled.div`
  padding: 40px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  overflow-x: auto;
  perspective: 800px;
  & > div:nth-child(${props => props.selectedProject}) {
    transform: perspective(500px) translate3d(0px, 0px, 30px);
  }
`;

export default () => {
  const { selectedProject } = useContext(AppContext);
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
  return (
    <Wrapper selectedProject={selectedProject}>
      {projects.map(project => (
        <CSSTransition
          in={true}
          timeout={project.id * 700}
          appear
          classNames="card"
          onEntered={() => console.log("asdfadf")}
          onExit={() => console.log("onExit")}
        >
          <BigCard
            key={project.id}
            id={project.id}
            title={project.title}
            name={project.name}
            category={project.category}
          />
        </CSSTransition>
      ))}
    </Wrapper>
  );
};
