import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import "../Styles/Detail.css";
import { Mobile, Desktop, LeftIcon } from "../Components/Commons/Icons";
import { getBlog, postTagToPostList } from "../Services/BlogService";
import { bgColorFilter } from "../Components/Commons/BigCard";
import { ProjectContext } from "../Context/ProjectContext";
import { mobileCard, device } from "../Styles/device";

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
  width: 100%;
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  background-color: ${props => bgColorFilter(props.category, props.theme)};
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  display: grid;
  grid-template-rows: 1fr 9fr;
`;

const Header = styled.div`
  padding: 0 30px;
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
  transition: all 2s ease-in-out;
  display: flex;
  @media ${mobileCard.small} {
    display: none;
  }
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
  @media ${device.tablet} {
    display: none;
  }
`;

const VisitButton = styled.a`
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
  padding: 45px;
  display: flex;
  justify-content: center;
  padding-top: 0;
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

export default ({ history, location }) => {
  const [DemoType, setDemoType] = useState("desktop");
  const [blogHtml, setBlogHtml] = useState("");
  const postId = location.pathname.split("/")[2];
  const { posts, setPosts } = useContext(ProjectContext);
  const post = posts[postId];
  useEffect(() => {
    //blog 정보를 가져옴
    getBlog().then(html => {
      // tag에 bloghtml 넣음.
      setBlogHtml(html);
      // bloghtml에서 게시물 부분만 선택
      const postList = document.getElementsByClassName("post-item");
      // 게시물 부분을 넣어주고 postList를 만듬
      // console.log(postList);
      setPosts(postTagToPostList(postList));
      // tag다시 공백
      setBlogHtml("");
    });
    // eslint-disable-next-line
  }, []);

  const toggleDemoType = type => setDemoType(type);
  const goBack = () => {
    history.push("/Blog");
  };
  return (
    <Wrapper>
      <ShowContainer category={post && post.category}>
        <Header>
          <BackButton onClick={goBack}>
            <LeftIcon></LeftIcon>
            {" Back"}
          </BackButton>
          <ResponsivButton>
            <MobileButton onClick={() => toggleDemoType("mobile")}>
              <Mobile selected={DemoType === "mobile"}></Mobile>
            </MobileButton>
            <DesktopButton onClick={() => toggleDemoType("desktop")}>
              <Desktop selected={DemoType === "desktop"}></Desktop>
            </DesktopButton>
          </ResponsivButton>
          <VisitButton target="_blank" href={post && post.url}>
            Visit
          </VisitButton>
        </Header>
        <DemoContainer>
          <DemoProject DemoType={DemoType}>
            <iframe
              key={postId}
              title={"blog"}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
              marginHeight="0"
              marginWidth="0"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                WebkitOverflowScrolling: "touch"
              }}
              src={post ? post.url : ""}
            ></iframe>
          </DemoProject>
        </DemoContainer>
      </ShowContainer>
      <div id="blog" dangerouslySetInnerHTML={{ __html: blogHtml }}></div>
    </Wrapper>
  );
};
