import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import "../Styles/Detail.css";
import {
  Mobile,
  Desktop,
  LeftIcon,
  UpIcon,
  DownIcon,
  RightIcon
} from "../Components/Commons/Icons";
import { ProjectContext } from "../Context/ProjectContext";
import Theme from "../Styles/Theme";
import { mobileCard } from "../Styles/device";
const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  overflow: hidden;
  display: flex;
`;

const ShowContainer = styled.div`
  width: ${props =>
    props.showFullDemo
      ? "100% !important"
      : props.showFullDesc
      ? "0% !important"
      : "60%"};
  opacity: ${props => (props.showFullDesc ? 0 : 1)};
  height: ${props => (props.isShowDownDesc ? "70px" : "100%")};
  transition: 0.4s ease-in-out;
  background-color: #33a2a7;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  display: grid;
  /* grid-template-rows: ${props =>
    props.isShowDownDesc ? "1fr 0px " : "1fr 9fr"}; */
  grid-template-rows: 1fr 9fr;
  overflow: visible;
  @media ${mobileCard.small} {
    width: 100%;
  }
`;

const Header = styled.div`
  padding: 20px 30px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: 0.6;
  &:hover {
    opacity: 0.95;
  }
  & > span {
    margin-left: 5px;
  }
`;

const ResponsivButton = styled.div`
  visibility: ${props => (props.isShowDownDesc ? "hidden" : "visibility")};
  display: flex;
`;

const MobileButton = styled.div`
  margin-right: 20px;
  svg {
    transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  }
  cursor: pointer;
`;

const DesktopButton = styled.div`
  svg {
    transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  }
  cursor: pointer;
`;

const VisitButton = styled.div`
  padding: 3px 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 15px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: 0.95;
  }
`;

const DemoContainer = styled.div`
  padding: ${props => (props.isShowDownDesc ? "0px" : "45px")};
  display: flex;
  justify-content: center;
  padding-top: 0;
  overflow-y: hidden;
  transition: 0.4s ease-in-out;
  opacity: ${props => (props.isShowDownDesc ? 0 : 1)};
  @media ${mobileCard.small} {
    padding: 45px 10px;
    padding-top: 0px;
  }
`;

const DemoProject = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  width: ${props => (props.DemoType === "mobile" ? "375px" : "100%")};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const FullDemoButton = styled.div`
  visibility: ${props => (props.isShowDownDesc ? "hidden" : "visibility")};
  padding: 5px;
  color: ${props => props.theme.darkGreyColor};
  font-size: 30px;
  position: absolute;
  top: 45%;
  right: 10px;
  cursor: pointer;
  @media ${mobileCard.small} {
    display: none;
  }
`;

const FullDescButton = styled.div`
  padding: 5px;
  position: absolute;
  top: 45%;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
`;

const DescriptionContainer = styled.div`
  width: ${props =>
    props.showFullDesc
      ? "100% !important"
      : props.showFullDemo
      ? "0% !important"
      : "40%"};
  opacity: ${props => (props.showFullDemo ? 0 : 1)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.4s ease-in-out, opacity 0.3s ease-in-out;
  color: ${props => props.theme.lightGreyColor};
  @media ${mobileCard.small} {
    width: 0%;
  }
`;

const FullBottomDescButton = styled.div`
  visibility: ${props => (props.showFullDemo ? "visibility" : "hidden")};
  opacity: ${props => (props.showFullDemo ? 1 : 0)};
  position: absolute;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d3d4d5;
  font-weight: 600;
  bottom: ${props => (props.isShowDownDesc ? "20px" : "10px")};
  cursor: pointer;
  opacity: 0.6;
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: 0.95;
  }
  & > span {
    margin-left: 10px;
  }
  @media ${mobileCard.small} {
    visibility: visible;
  }
`;

const BottomDescription = styled.div`
  position: absolute;
  transition: ${Theme.transitionOne};
  bottom: -100vh;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export default ({ history, location }) => {
  const { projects } = useContext(ProjectContext);
  const [project, setProject] = useState();
  const [DemoType, setDemoType] = useState("desktop");
  const [showFullDemo, setShowFullDemo] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isShowDownDesc, setIsShowDownDesc] = useState(false);
  const toggleDemoType = type => setDemoType(type);
  const toggleShowFullDemo = () => setShowFullDemo(!showFullDemo);
  const toggleShowFullDesc = () => setShowFullDesc(!showFullDesc);
  const toggleIsShowDownDesc = () => setIsShowDownDesc(!isShowDownDesc);
  const projectId = location.pathname.split("/")[2];
  const goBack = () => {
    history.push("/");
  };

  useEffect(() => {
    setProject(projects[projectId - 1]);
  }, []);

  return (
    <Wrapper>
      <ShowContainer
        showFullDemo={showFullDemo}
        showFullDesc={showFullDesc}
        isShowDownDesc={isShowDownDesc}
      >
        <Header>
          <BackButton onClick={goBack}>
            <LeftIcon size={"18"}></LeftIcon>
            <span>{"Back"}</span>
          </BackButton>
          <ResponsivButton isShowDownDesc={isShowDownDesc}>
            <MobileButton onClick={() => toggleDemoType("mobile")}>
              <Mobile selected={DemoType === "mobile"}></Mobile>
            </MobileButton>
            <DesktopButton onClick={() => toggleDemoType("desktop")}>
              <Desktop selected={DemoType === "desktop"}></Desktop>
            </DesktopButton>
          </ResponsivButton>
          <VisitButton>Visit</VisitButton>
        </Header>
        <DemoContainer isShowDownDesc={isShowDownDesc}>
          <DemoProject DemoType={DemoType}>
            <iframe
              key={projectId}
              title={"portfolio"}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
              marginHeight="0"
              marginWidth="0"
              src={project && project.url}
            ></iframe>
          </DemoProject>
        </DemoContainer>
        <FullDemoButton
          onClick={toggleShowFullDemo}
          isShowDownDesc={isShowDownDesc}
        >
          {showFullDemo ? <LeftIcon></LeftIcon> : "||"}{" "}
        </FullDemoButton>
        <FullBottomDescButton
          showFullDemo={showFullDemo}
          isShowDownDesc={isShowDownDesc}
          onClick={toggleIsShowDownDesc}
        >
          {isShowDownDesc ? (
            <>
              <DownIcon></DownIcon> <span>{"Demo"}</span>
            </>
          ) : (
            <>
              <UpIcon></UpIcon> <span>{"Documentation"}</span>
            </>
          )}
        </FullBottomDescButton>
        <BottomDescription isShowDownDesc={isShowDownDesc}>
          <iframe
            key={projectId}
            title={"portfolioPost"}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            marginHeight="0"
            marginWidth="0"
            src={project && project.postURL}
          ></iframe>
        </BottomDescription>
      </ShowContainer>
      <CSSTransition in={true} classNames="description" timeout={0} appear>
        <DescriptionContainer
          showFullDemo={showFullDemo}
          showFullDesc={showFullDesc}
        >
          {/* <ReactMarkdown source={project && project.markdown}></ReactMarkdown> */}
          <iframe
            key={projectId}
            title={"portfolioPost"}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            marginHeight="0"
            marginWidth="0"
            src={project && project.postURL}
          ></iframe>
          <FullDescButton onClick={toggleShowFullDesc}>
            {showFullDesc ? <RightIcon></RightIcon> : "||"}
          </FullDescButton>
        </DescriptionContainer>
      </CSSTransition>
    </Wrapper>
  );
};
