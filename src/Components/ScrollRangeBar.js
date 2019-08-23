import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-self: flex-end;
  font-size: 20px;
`;

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  align-self: center;
  margin-left: 10px;
  height: 0px;
`;
const TotalLine = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;
const CurrentLine = styled.div`
  width: ${props => (100 / props.length) * props.selectedProject}%;
  position: absolute;
  top: 0px;
  border-top: 2px solid rgba(0, 0, 0, 0.5);
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const ProjectNumber = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;
const TotalNumber = styled.div`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
export default () => {
  const { selectedProject, projects } = useContext(AppContext);

  return (
    <Wrapper>
      <ProjectNumber>0{selectedProject}</ProjectNumber>
      <LineContainer>
        <TotalLine />
        <CurrentLine
          selectedProject={selectedProject}
          length={projects.length}
        />
      </LineContainer>
      <TotalNumber>0{projects.length}</TotalNumber>
    </Wrapper>
  );
};
