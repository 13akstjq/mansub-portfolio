import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import BigCard from "./BigCard";
import { CSSTransition } from "react-transition-group";

import "../Styles/Slider.css";

const Wrapper = styled.div`
  padding: 40px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  overflow-x: auto;
  perspective: 800px;
  transition: 1s cubic-bezier(0, 1.21, 0.85, 1.06);
  /* & > a:nth-child(${props => props.selectedProject}) {
    transform: scale(1.03);
  } */
`;

export default ({ contents }) => {
  const { selectedProject } = useContext(AppContext);

  return (
    <Wrapper selectedProject={selectedProject}>
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
  );
};
