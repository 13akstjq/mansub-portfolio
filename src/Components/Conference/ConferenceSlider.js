import React, { useEffect, useContext, useState, useRef } from "react";
import styled from "styled-components";
import BigCard from "../Commons/BigCard";
import { CSSTransition } from "react-transition-group";
import "../../Styles/Slider.css";
import { SideBarContext } from "../../Context/SideBarContext";
import { mobileCard } from "../../Styles/device";
import { ConferenceContext } from "../../Context/ConferenceContext";
import ConferenceCard from "./ConferenceCard";

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
    width: calc(100vw + 55vw);
    padding-left: calc(55vw + 5vw);
    transform: translateX(-55vw);
    & > a:nth-child(${props => props.conferenceLength}) {
      & > div {
        margin-right: 5vw;
      }
    }
  }
`;

const ProjectListContainer = styled.div`
  transform: ${props =>
    props.isSideOpen
      ? ` perspective(500px) translate3d(-30px,-30px,-30px);`
      : ` perspective(500px) translate3d(0px,0px,0px); `};
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  @media ${mobileCard.small} {
    transform: ${props =>
      props.isSideOpen
        ? ` perspective(500px) translate3d(-15px,-15px,-15px);`
        : ` perspective(500px) translate3d(0px,0px,0px); `};
  }
`;

const EmptyCard = styled.div`
  height: 100%;
  @media ${mobileCard.small} {
    height: 0%;
  }
`;
export default () => {
  useEffect(() => {
    setSelectedConference(1);
    setScrollIndex(0);
    // eslint-disable-next-line
  }, []);

  const {
    scrollIndex,
    setScrollIndex,
    conferences,
    setSelectedConference,
    selectedConference,
    conferences: contents
  } = useContext(ConferenceContext);
  const { isSideOpen } = useContext(SideBarContext);
  const [position, setPosition] = useState(0);
  const conferenceSliderRef = useRef(null);
  let isClick = false;
  let startX = 0;
  let curX = 0;
  let posX = position;

  // 휠 이벤트 메소드
  const onWheel = e => {
    // 오른쪽 이동
    if (e.deltaY > 0 && scrollIndex < conferences.length * 3) {
      setScrollIndex(scrollIndex + 1);
      setPosition(position + 100);
      conferenceSliderRef.current.scrollTo(position + 100, 0);
      if (
        scrollIndex > 0 &&
        (scrollIndex + 1) % 3 === 0 &&
        selectedConference < conferences.length
      ) {
        setSelectedConference(selectedConference + 1);
      }
    } // 왼쪽 이동
    if (e.deltaY < 0 && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      setPosition(position - 100);
      conferenceSliderRef.current.scrollTo(position - 100, 0);
      if (
        scrollIndex > 0 &&
        selectedConference > 1 &&
        (scrollIndex - 1) % 3 === 0
      ) {
        setSelectedConference(selectedConference - 1);
      }
    }
  };

  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
    isClick = true;
    startX = e.clientX;
  };

  const onMouseMove = e => {
    if (isClick) {
      curX = e.clientX;
      const moveDist = curX - startX;
      posX = posX - moveDist * 1.8;
      conferenceSliderRef.current.scrollTo(posX, 0);
      startX = curX;
    }
  };

  const onMouseUp = e => {
    e.preventDefault();
    e.stopPropagation();
    if (isClick) {
      isClick = false;
    }
    let selectedScrollIndex = Math.ceil(posX / 100);
    selectedScrollIndex =
      selectedScrollIndex >= conferences.length * 3
        ? conferences.length * 3
        : selectedScrollIndex;
    selectedScrollIndex = selectedScrollIndex <= 1 ? 1 : selectedScrollIndex;
    setScrollIndex(selectedScrollIndex);
    setSelectedConference(Math.ceil(selectedScrollIndex / 3));
    setPosition(posX);
  };

  return (
    <ProjectListContainer isSideOpen={isSideOpen}>
      <Wrapper
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
        isSideOpen={isSideOpen}
        ref={conferenceSliderRef}
        conferenceLength={conferences.length}
      >
        {contents.map(content => (
          <CSSTransition
            key={content.id}
            in={true}
            timeout={content.id * 700}
            appear
            classNames="card"
          >
            <ConferenceCard key={content.id} {...content} />
          </CSSTransition>
        ))}
        <EmptyCard />
        <EmptyCard />
      </Wrapper>
    </ProjectListContainer>
  );
};
