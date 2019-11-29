import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { ProjectContext } from "../../Context/ProjectContext";
import { BlogContext } from "../../Context/BlogContext";
import { ConferenceContext } from "../../Context/ConferenceContext";

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-self: flex-end;
  font-size: 1.2em;
  transition: width 0.4s cubic-bezier(0, 1.21, 0.85, 1.06);
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
  transition: width 0.4s linear;
  position: absolute;
  top: 0px;
  border-top: 2px solid rgba(0, 0, 0, 0.5);
`;

const ProjectNumber = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;
const TotalNumber = styled.div`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.8);
`;
export default withRouter(({ location }) => {
  const { projects, selectedProject } = useContext(ProjectContext);
  const { posts, selectedPost } = useContext(BlogContext);
  const { conferences, selectedConference } = useContext(ConferenceContext);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const menu = location.pathname.split("/")[1];
  const content =
    menu === "Blog" ? posts : menu === "Conference" ? conferences : projects;
  const contentLength = content.length;

  useEffect(() => {
    // 현재 페이지에 따른 text
    const textInit = () => {
      let postType = location.pathname.split("/")[1];
      postType === "Blog"
        ? setSelectedContentIndex(selectedPost)
        : postType === "Conference"
        ? setSelectedContentIndex(selectedConference)
        : setSelectedContentIndex(selectedProject);
    };
    textInit();
    // eslint-disable-next-line
  }, [selectedProject, selectedPost]);

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
