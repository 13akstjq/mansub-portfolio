import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import BigCard from "./BigCard";

const Wrapper = styled.div`
  padding: 40px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  overflow-x: auto;
  & > div:nth-child(${props => props.selectedProject}) {
    transform: perspective(500px) translate3d(0px, 0px, 30px);
  }
`;

export default () => {
  const { selectedProject } = useContext(AppContext);
  return (
    <Wrapper selectedProject={selectedProject}>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        1
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        2
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        3
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        4
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        5
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        6
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        7
      </BigCard>
      <BigCard title={"제목"} name={"Han ManSub"} category={"React"}>
        8
      </BigCard>
    </Wrapper>
  );
};
