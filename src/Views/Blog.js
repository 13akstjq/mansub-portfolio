import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default () => {
  return (
    <Wrapper>
      <Header />
      <SideBar />
      <MainContainer>Blog</MainContainer>
    </Wrapper>
  );
};
