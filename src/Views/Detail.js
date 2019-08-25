import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import "../Styles/Detail.css";
const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: #33a2a7;
  overflow: hidden;
  display: grid;
  grid-template-columns: 6fr 4fr;
`;

const ShowContainer = styled.div``;

const DescriptionContainer = styled.div`
  background-color: white;
`;

export default () => {
  return (
    <Wrapper>
      <ShowContainer>프로젝트 데모</ShowContainer>
      <CSSTransition in={true} classNames="description" timeout={1300} appear>
        <DescriptionContainer>설명</DescriptionContainer>
      </CSSTransition>
    </Wrapper>
  );
};
