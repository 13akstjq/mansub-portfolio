import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import BigCard from "./BigCard";
import { CSSTransition } from "react-transition-group";

import "../Styles/Slider.css";
import { SideBarContext } from "../Context/SideBarContext";

const Wrapper = styled.div`
  /* width: 300px;
  transform-origin: right 90px;
  height: 100vw;
  transform: rotate(-90deg);
  overflow-y: scroll; */
  padding: 40px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-gap: 20px;
  perspective: 800px;
  transition: 1s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` translateX(${props.position}px) perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` translateX(${props.position}px)perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;
export default () => {
  const {
    scrollIndex,
    setScrollIndex,
    projects,
    setSelectedProject,
    selectedProject,
    projects: contents
  } = useContext(AppContext);
  const { isSideOpen } = useContext(SideBarContext);
  const [position, setPosition] = useState(0);

  const onWheel = e => {
    // e.preventDefault();
    // console.log(projects.length * 3);
    if (e.deltaY > 0 && scrollIndex < (projects.length - 3) * 3) {
      // console.log(scrollIndex + 1);
      setScrollIndex(scrollIndex + 1);
      setPosition(position - 100);
      if (
        scrollIndex > 0 &&
        (scrollIndex + 1) % 3 === 0 &&
        selectedProject <= projects.length - 3
      ) {
        // console.log("test");
        setSelectedProject(selectedProject + 1);
      }
    }
    if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      setPosition(position + 100);
      // console.log(scrollIndex - 1);
      if (
        scrollIndex > 0 &&
        selectedProject > 1 &&
        (scrollIndex - 1) % 3 === 0
      ) {
        // console.log(selectedProject - 1);
        setSelectedProject(selectedProject - 1);
      }
    }
  };

  return (
    <ProjectListContainer position={position} isSideOpen={isSideOpen}>
      <Wrapper onWheel={onWheel} isSideOpen={isSideOpen}>
        {contents.map(content => (
          <CSSTransition
            key={content.id}
            in={true}
            timeout={content.id * 700}
            appear
            classNames="card"
          >
            <BigCard key={content.id} {...content} />
          </CSSTransition>
        ))}
      </Wrapper>
    </ProjectListContainer>
  );
};
