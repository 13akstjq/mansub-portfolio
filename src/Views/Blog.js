import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";

const Wrapper = styled.div``;
export default () => {
  return (
    <Wrapper>
      <Header />
      <SideBar />
      <div>Blog</div>
    </Wrapper>
  );
};
