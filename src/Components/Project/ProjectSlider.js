import React, { useEffect, useContext, useState, useRef } from "react";
import styled from "styled-components";
import BigCard from "../Commons/BigCard";
import { CSSTransition } from "react-transition-group";
import "../../Styles/Slider.css";
import { SideBarContext } from "../../Context/SideBarContext";
import { ProjectContext } from "../../Context/ProjectContext";
import { mobileCard } from "../../Styles/device";

const Wrapper = styled.div`
  width: calc(100vw + 340px);
  height: 100%;
  padding: 40px;
  padding-left: 380px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-gap: 20px;
  overflow-x: scroll;
  perspective: 800px;
  transition: 1s cubic-bezier(0, 1.21, 0.85, 1.06);
  scroll-behavior: smooth;
  transform: translateX(-340px);
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${mobileCard.small} {
    padding: 5vw;
    grid-auto-columns: 90vw;
    width: 160vw;
    padding-left: 65vw;
    transform: translateX(-60vw);
  }
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const EmptyCard = styled.div`
  height: 100%;
  @media ${mobileCard.small} {
    height: 0%;
  }
`;
export default () => {
  const {
    scrollIndex,
    setScrollIndex,
    projects,
    setSelectedProject,
    selectedProject,
    projects: contents
  } = useContext(ProjectContext);
  const { isSideOpen } = useContext(SideBarContext);
  const [position, setPosition] = useState(0);
  const projectSliderRef = useRef(null);
  let isClick = false;
  let startX = 0;

  // 휠 이벤트 메소드
  const onWheel = e => {
    // 오른쪽 이동
    if (e.deltaY > 0 && scrollIndex < projects.length * 3) {
      setScrollIndex(scrollIndex + 1);
      setPosition(position + 100);
      projectSliderRef.current.scrollTo(position + 100, 0);
      if (
        scrollIndex > 0 &&
        (scrollIndex + 1) % 3 === 0 &&
        selectedProject < projects.length
      ) {
        setSelectedProject(selectedProject + 1);
      }
    } // 왼쪽 이동
    if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      setPosition(position - 100);
      projectSliderRef.current.scrollTo(position - 100, 0);
      if (
        scrollIndex > 0 &&
        selectedProject > 1 &&
        (scrollIndex - 1) % 3 === 0
      ) {
        setSelectedProject(selectedProject - 1);
      }
    }
  };

  const onMouseDown = e => {
    isClick = true;
    startX = e.clientX;
    console.log(startX);
  };

  const onMouseMove = e => {
    if (isClick) {
      if (e.clientX < startX) {
        console.log(e.clientX - startX);
        setPosition(position - (startX - e.clientX));
      } else {
        setPosition(position - (startX - e.clientX));
        console.log("오른쪽");
      }
    }
    // startX = e.clientX;
    // console.log(e);
  };

  const onMouseUp = e => {
    isClick = false;
  };

  useEffect(() => {
    setSelectedProject(1);
    setScrollIndex(0);
  }, []);
  return (
    <ProjectListContainer isSideOpen={isSideOpen}>
      <Wrapper
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
        isSideOpen={isSideOpen}
        ref={projectSliderRef}
      >
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
        <EmptyCard />
        <EmptyCard />
      </Wrapper>
    </ProjectListContainer>
  );
};
