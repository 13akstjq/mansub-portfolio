import React, { useState, useContext, useEffect } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import SidebarControlButton from "../Components/SidebarControlButton";
import Slider from "../Components/Slider";
import ScrollRangeBar from "../Components/ScrollRangeBar";
import { CSSTransition } from "react-transition-group";
import { SideBarContext } from "../Context/SideBarContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
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

  width: ${props => (props.isSideOpen ? "calc(76vw - 150px)" : "93vw")};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.2fr 0.4fr 10fr;
  padding-right: 40px;

  transform: ${props =>
    props.isSideOpen ? "translateX(50px) " : "translateX(0px)"};
`;

const MenuTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  /* background-color: yellow; */
  margin-left: 10px;
`;

export default () => {
  const { isSideOpen } = useContext(SideBarContext);

  return (
    <Wrapper>
      <Header />
      <SideBar />

      <MainContainer isSideOpen={isSideOpen}>
        <MenuContainer isSideOpen={isSideOpen}>
          <SidebarControlButton />
          <CSSTransition
            in={true}
            timeout={1300}
            appear
            classNames="page__title"
          >
            <MenuTitle>Home</MenuTitle>
          </CSSTransition>
          <ScrollRangeBar />
        </MenuContainer>
        <Slider />
      </MainContainer>
    </Wrapper>
  );
};
