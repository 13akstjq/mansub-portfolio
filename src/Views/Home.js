import React, { useState, useContext } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import SidebarControlButton from "../Components/SidebarControlButton";
import Slider from "../Components/Slider";
import { AppContext } from "../Context/AppContext";
import ScrollRangeBar from "../Components/ScrollRangeBar";
const Wrapper = styled.div`
  width: 100vw;
  /* display: grid;
  grid-template-columns: ${props =>
    props.isSideOpen ? "300px" : "0px"} 1fr; */
  height: 100vh;
  overflow: hidden;
  transition: 0.5s ease-in-out;
`;

const MainContainer = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 9fr;
  transform: ${props =>
    props.isSideOpen ? "translateX(300px) " : "translateX(0px)"};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const MenuContainer = styled.div`
  /* background-color: red; */
  align-items: flex-end;
  padding: 3px 40px;

  width: ${props => (props.isSideOpen ? "76vw" : "93vw")};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.2fr 0.4fr 10fr;
  padding-right: 40px;

  transform: ${props =>
    props.isSideOpen ? "translateX(50px) " : "translateX(0px)"};
`;

const MenuTitle = styled.span`
  font-size: 30px;
  font-weight: 900;
  /* background-color: yellow; */
  margin-left: 10px;
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` translateX(${
          props.position
        }px) perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` translateX(${
          props.position
        }px)perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

export default () => {
  const [position, setPosition] = useState(0);
  const {
    scrollIndex,
    setScrollIndex,
    projects,
    selectedProject,
    setSelectedProject,
    isSideOpen
  } = useContext(AppContext);
  const onWheel = e => {
    // console.log(projects.length * 3);
    if (e.deltaY > 0 && scrollIndex < (projects.length - 3) * 3) {
      setPosition(position - 100);
      setScrollIndex(scrollIndex + 1);
      if (scrollIndex > 0 && (scrollIndex + 1) % 3 === 0) {
        console.log(selectedProject + 1);
        setSelectedProject(selectedProject + 1);
      }
    }
    if (e.deltaY < 0 && scrollIndex > 0) {
      setPosition(position + 100);
      setScrollIndex(scrollIndex - 1);
      if (scrollIndex > 0 && (scrollIndex - 1) % 3 === 0) {
        console.log(selectedProject - 1);
        setSelectedProject(selectedProject - 1);
      }
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <Wrapper isSideOpen={isSideOpen} onWheel={onWheel}>
      <Header />
      <SideBar />
      <MainContainer isSideOpen={isSideOpen}>
        <MenuContainer isSideOpen={isSideOpen}>
          <SidebarControlButton />
          <MenuTitle>Home</MenuTitle>
          <ScrollRangeBar />
        </MenuContainer>
        <ProjectListContainer position={position} isSideOpen={isSideOpen}>
          <Slider />
        </ProjectListContainer>
      </MainContainer>
    </Wrapper>
  );
};
