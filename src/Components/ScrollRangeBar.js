import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
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
export default withRouter(({ location }) => {
  const { projects, selectedProject: selectedContentIndex, posts } = useContext(
    AppContext
  );

  // 현재 페이지에 따른 text
  const content = location.pathname.split("/")[1] === "Blog" ? posts : projects;
  const contentLength = content.length;
  return (
    <Wrapper>
      <ProjectNumber>
        {selectedContentIndex >= 10
          ? selectedContentIndex
          : `0${selectedContentIndex}`}
      </ProjectNumber>
      <LineContainer>
        <TotalLine />
        <CurrentLine
          selectedProject={selectedContentIndex}
          length={contentLength}
        />
      </LineContainer>
      <TotalNumber>
        {contentLength >= 10 ? contentLength : `0${contentLength}`}
      </TotalNumber>
    </Wrapper>
  );
});
