import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BigCard from "../Commons/BigCard";
import { CSSTransition } from "react-transition-group";

import "../../Styles/Slider.css";
import { SideBarContext } from "../../Context/SideBarContext";
import { getBlog, postTagToPostList } from "../../Services/BlogService";
import { BlogContext } from "../../Context/BlogContext";
import { mobileCard } from "../../Styles/device";

const Wrapper = styled.div`
  width: calc(100vw + 380px);
  height: 100%;
  padding: 80px;
  padding-top: 60px;
  padding-left: 480px;
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  grid-gap: 20px;
  overflow-x: scroll;
  perspective: 800px;
  /* transition: 1s cubic-bezier(0, 1.21, 0.85, 1.06); */
  scroll-behavior: smooth;
  transform: translateX(-380px);
  ::-webkit-scrollbar {
    display: none;
  }
  align-items: flex-start;
  @media ${mobileCard.small} {
    padding: 5vw;
    grid-auto-columns: 90vw;
    width: 160vw;
    padding-left: 65vw;
    transform: translateX(-60vw);
    & > a:nth-child(${props => props.postLength}) {
      & > div {
        margin-right: 5vw;
      }
    }
  }
`;

const EmptyCard = styled.div`
  height: 100%;
  @media ${mobileCard.small} {
    height: 0%;
  }
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? `  perspective(500px) translate3d(-30px,-30px,-30px);`
      : `  perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  @media ${mobileCard.small} {
    transform: ${props =>
      props.isSideOpen
        ? ` perspective(500px) translate3d(-15px,-15px,-15px);`
        : ` perspective(500px) translate3d(0px,0px,0px); `};
  }
`;
export default () => {
  const {
    scrollIndex,
    setScrollIndex,
    posts,
    setPosts,
    setSelectedPost,
    selectedPost
  } = useContext(BlogContext);
  const { isSideOpen } = useContext(SideBarContext);
  const [position, setPosition] = useState(0);
  const [blogHtml, setBlogHtml] = useState("");
  const blogSliderRef = useRef(null);
  let isClick = false;
  let startX = 0;
  let endX = 0;
  // 최근 블로그 10개 게시물 호출
  useEffect(() => {
    setSelectedPost(1);
    setScrollIndex(0);

    // 포스트 정보가 스토어에 이미 있는 경우에는 요청하지 않음.
    if (posts.length === 0) {
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
    if (e.deltaY > 0 && scrollIndex < posts.length * 3) {
      setScrollIndex(scrollIndex + 1);
      setPosition(position + 100);
      blogSliderRef.current.scrollTo(position + 100, 0);
      if (
        scrollIndex > 0 &&
        (scrollIndex + 1) % 3 === 0 &&
        selectedPost < posts.length
      ) {
        setSelectedPost(selectedPost + 1);
      }
    }
    if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      setPosition(position - 100);
      blogSliderRef.current.scrollTo(position - 100, 0);
      if (scrollIndex > 0 && selectedPost > 1 && (scrollIndex - 1) % 3 === 0) {
        setSelectedPost(selectedPost - 1);
      }
    }
    setTimeout(() => {}, 100);
  };

  const onMouseDown = e => {
    isClick = true;
    startX = e.clientX;
    console.log(startX);
  };

  const onMouseMove = e => {
    if (isClick) {
      endX = e.clientX;
      if (Math.abs(startX - endX) > 5) {
        const moveDist = endX - startX;
        console.log(moveDist);
        // setPosition(position + moveDist);
      }
    }
  };

  const onMouseUp = e => {
    if (isClick) {
      isClick = false;
    }
  };

  return (
    <ProjectListContainer isSideOpen={isSideOpen}>
      <Wrapper
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
        isSideOpen={isSideOpen}
        ref={blogSliderRef}
        postLength={posts.length}
      >
        {posts.map(post => (
          <CSSTransition
            key={post.id}
            in={true}
            timeout={(post.id + 1) * 700}
            appear
            classNames="card"
          >
            <BigCard key={post.id} {...post} />
          </CSSTransition>
        ))}
        <EmptyCard />
        <EmptyCard />

        <div id="blog" dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
      </Wrapper>
    </ProjectListContainer>
  );
};
