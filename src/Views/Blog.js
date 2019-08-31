import React, { useState, useContext, useEffect } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import SideBar from "../Components/SideBar";
import { AppContext } from "../Context/AppContext";
import SidebarControlButton from "../Components/SidebarControlButton";
import ScrollRangeBar from "../Components/ScrollRangeBar";
import Slider from "../Components/Slider";
import { CSSTransition } from "react-transition-group";
import { getBlog, postTagToPostList } from "../Services/BlogService";

import "../Styles/Home.css";

const Wrapper = styled.div`
  position : absolute;
  top : 0px;
  left : 0px;
  width: 100vw;
  /* display: grid;
  grid-template-columns: ${props =>
    props.isSideOpen ? "300px" : "0px"} 1fr; */
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

  width: ${props => (props.isSideOpen ? "76vw" : "93vw")};
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

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` translateX(${props.position}px) perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` translateX(${props.position}px)perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

export default () => {
  const [position, setPosition] = useState(0);
  const [blogHtml, setBlogHtml] = useState("");
  const {
    scrollIndex,
    setScrollIndex,
    posts,
    setPosts,
    selectedProject,
    setSelectedProject,
    isSideOpen
  } = useContext(AppContext);

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
    <Wrapper isSideOpen={isSideOpen} onWheel={onWheel}>
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
            <MenuTitle>Blog</MenuTitle>
          </CSSTransition>
          <ScrollRangeBar
            contentLength={posts.length}
            selectedContentIndex={selectedProject}
          />
        </MenuContainer>
        <ProjectListContainer position={position} isSideOpen={isSideOpen}>
          <Slider contents={posts} />
        </ProjectListContainer>
      </MainContainer>
      <div id="blog" dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
    </Wrapper>
  );
};
