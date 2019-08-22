import React, { useState, useContext } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import SidebarControlButton from "../Components/SidebarControlButton";
import Slider from "../Components/Slider";
import { AppContext } from "../Context/AppContext";
const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: ${props => (props.isSideOpen ? "300px" : "0px")} 1fr;
  height: 100vh;
  overflow: hidden;
`;

const MainContainer = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 9fr;
`;

const MenuContainer = styled.div`
  /* background-color: red; */
  align-items: center;
  padding: 3px;
  padding-left: 40px;
  display: flex;
  font-size: 30px;
  font-weight: 900;
`;

const MenuTitle = styled.span`
  /* background-color: yellow; */
  margin-left: 10px;
`;

const MenuStatusBar = styled.div`
  /* background-color: orange; */
`;

const ProjectListContainer = styled.div`
  /* background-color: gray; */
  transform: ${props => `translateX(${props.position}px)`};
  transition: 0.3s ease-in-out;
  /* width: 500px;
  height: 80vw;
  overflow-y: auto;
  transform: rotate(-90deg) translateY(-500px);
  transform-origin: top right; */
`;

export default () => {
  const [position, setPosition] = useState(0);
  const { selectedProject, setSelectedProject, isSideOpen } = useContext(
    AppContext
  );
  console.log(selectedProject);
  const onWheel = e => {
    console.log(e.deltaY);
    if (e.deltaY > 0) {
      setPosition(position - 100);
    }
    if (e.deltaY < 0) {
      setPosition(position + 100);
    }
  };

  return (
    <Wrapper isSideOpen={isSideOpen} onWheel={onWheel}>
      <Header />
      <SideBar />
      <MainContainer>
        <MenuContainer>
          <SidebarControlButton />
          <MenuTitle>Home</MenuTitle>
          <MenuStatusBar />
        </MenuContainer>
        <ProjectListContainer position={position}>
          <Slider />
        </ProjectListContainer>
      </MainContainer>
    </Wrapper>
  );
};
