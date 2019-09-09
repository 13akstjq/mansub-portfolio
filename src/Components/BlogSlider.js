import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import BigCard from "./BigCard";
import { CSSTransition } from "react-transition-group";

import "../Styles/Slider.css";
import { SideBarContext } from "../Context/SideBarContext";
import { getBlog, postTagToPostList } from "../Services/BlogService";

const Wrapper = styled.div`
  padding: 40px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-gap: 20px;
  overflow-x: auto;
  perspective: 800px;
  transition: 1s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` translateX(${props.position}px) perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` translateX(${props.position}px)perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;
export default () => {
  const {
    scrollIndex,
    setScrollIndex,
    posts,
    setPosts,
    projects,
    setSelectedProject,
    selectedProject,
    projects: contents
  } = useContext(AppContext);
  const { isSideOpen } = useContext(SideBarContext);
  const [position, setPosition] = useState(0);
  const [blogHtml, setBlogHtml] = useState("");
  useEffect(() => {
    setSelectedProject(1);
    setScrollIndex(0);

    // 포스트 정보가 스토어에 이미 있는 경우에는 요청하지 않음.
    if (posts.length === 0) {
      console.log("블로그 정보 요청");
      getBlog().then(html => {
        // tag에 bloghtml 넣음.
        setBlogHtml(html);
        // bloghtml에서 게시물 부분만 선택
        const postList = document.getElementsByClassName("post-item");
        // 게시물 부분을 넣어주고 postList를 만듬
        setPosts(postTagToPostList(postList));
        // tag다시 공백
        setBlogHtml("");
      });
    } else {
    }
  }, []);

  const onWheel = e => {
    console.log("slider");
    // e.preventDefault();
    // console.log(projects.length * 3);
    if (e.deltaY > 0 && scrollIndex < (posts.length - 3) * 3) {
      // console.log(scrollIndex + 1);
      setScrollIndex(scrollIndex + 1);
      setPosition(position - 100);
      if (
        scrollIndex > 0 &&
        (scrollIndex + 1) % 3 === 0 &&
        selectedProject <= posts.length - 3
      ) {
        // console.log("test");
        setSelectedProject(selectedProject + 1);
      }
    }
    if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      setPosition(position + 100);
      // console.log(scrollIndex - 1);
      if (
        scrollIndex > 0 &&
        selectedProject > 1 &&
        (scrollIndex - 1) % 3 === 0
      ) {
        // console.log(selectedProject - 1);
        setSelectedProject(selectedProject - 1);
      }
    }
  };

  return (
    <ProjectListContainer position={position} isSideOpen={isSideOpen}>
      <Wrapper onWheel={onWheel} isSideOpen={isSideOpen}>
        {posts.map(post => (
          <CSSTransition
            key={post.id}
            in={true}
            timeout={post.id * 700}
            appear
            classNames="card"
          >
            <BigCard key={post.id} {...post} />
          </CSSTransition>
        ))}
        <div id="blog" dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
      </Wrapper>
    </ProjectListContainer>
  );
};
