import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import SidebarControlButton from "../Components/SidebarControlButton";
import Slider from "../Components/Slider";

const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 300px 1fr;
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
  padding: 3px;
  display: flex;
`;

const MenuTitle = styled.span`
  /* background-color: yellow; */
`;

const MenuStatusBar = styled.div`
  /* background-color: orange; */
`;

const ProjectListContainer = styled.div`
  /* width: 500px;
  height: 80vw;
  overflow-y: auto;
  transform: rotate(-90deg) translateY(-500px);
  transform-origin: top right; */
`;

export default () => {
  return (
    <Wrapper>
      <Header />
      <SideBar />
      <MainContainer>
        <MenuContainer>
          <SidebarControlButton />
          <MenuTitle>Home</MenuTitle>
          <MenuStatusBar />
        </MenuContainer>
        <ProjectListContainer>
          <Slider />
        </ProjectListContainer>
      </MainContainer>
    </Wrapper>
  );
};
