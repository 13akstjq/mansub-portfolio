import React, { useState, useContext, useRef } from "react";
import styled from "styled-components";
import FatText from "./Commons/FatText";
import Avatar from "./Commons/Avatar";
import { Link, withRouter } from "react-router-dom";
import oneDayOneCommit from "../assets/video/1Day1Commit.mp4";
import portfolio from "../assets/video/portfolio.mp4";
import manstagram from "../assets/video/manstagram.mp4";

import {
  EmptyHeart,
  FullHeart,
  ReactIcon,
  ReduxIcon,
  JsIcon,
  TsIcon,
  GithubIcon,
  GraphqlIcon
} from "./Commons/Icons";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";

export const bgColorFilter = (category, theme) => {
  let bgColor = "#999";
  switch (category) {
    case "react":
      bgColor = theme.reactColor;
      break;
    case "reactnative":
      bgColor = theme.reactnativeColor;
      break;
    case "git":
      bgColor = theme.gitColor;
      break;
    case "github":
      bgColor = theme.githubColor;
      break;
    case "aws":
      bgColor = theme.awsColor;
      break;
    case "node":
      bgColor = theme.nodeColor;
      break;
    case "vue":
      bgColor = theme.vueColor;
      break;
    case "js":
      bgColor = theme.jsColor;
      break;
    case "ts":
      bgColor = theme.tsColor;
      break;
    case "prisma":
      bgColor = theme.prismaColor;
      break;
    case "graphql":
      bgColor = theme.graphqlColor;
      break;
    case "redux":
      bgColor = theme.reduxColor;
      break;
    default:
      break;
  }
  return bgColor;
};

const Image = styled.img`
  /* background-image: ${props => `url(${props.photo})`}; */
  /* background-image : ${props => props.photo};
  background-position: center;
  background-size: cover; */
  width: 100%;
  height: 100%;
`;

const SkillImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  transition: 0.5s cubic-bezier(0, 1.21, 0.85, 1.06);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  color: ${props => props.theme.darkGreyColor};
  grid-template-rows: 7fr minmax(0px, 4fr);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & > ${SkillImage} {
    background-color: ${props => bgColorFilter(props.category, props.theme)};
  }
  &:hover {
    transform: scale(1.03);
  }
`;
const DescContainer = styled.div`
  background-color: #fdfefe;
  padding: 8px;
  display: grid;
  grid-template-rows: 1.8fr 1fr;
`;
const TitleContainer = styled.div`
  height: 100%;
  position: relative;
  align-self: flex-start;
`;

const Title = styled(FatText)`
  margin-bottom: 8px;
`;

const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: space-between;
`;

const CreatedAt = styled.div`
  right: 0px;
  color: ${props => props.theme.lightGreyColor};
`;

const Category = styled.span`
  color: ${props => props.theme.lightGreyColor};
`;

const InfoContainer = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: flex-end;
  justify-content: space-between;
  transition: 0.5s cubic-bezier(0, 1.21, 0.85, 1.06);
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  margin-left: 10px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const LikeCount = styled.span`
  margin-right: 10px;
`;
export default withRouter(
  ({
    id,
    thumbnail,
    name,
    title,
    category,
    createdAt,
    likeCount,
    location,
    photo
  }) => {
    const pathName = location.pathname;
    const [isLikedS, setIsLikedS] = useState(false);
    const [likeCountS, setLikeCountS] = useState((likeCount = 0));
    const { isLoggedIn } = useContext(UserContext);
    const { setIsAuthOpen } = useContext(AppContext);

    // 하트모양 좋아요 토글
    const toggleLike = e => {
      e.preventDefault();
      if (isLoggedIn) {
        if (isLikedS) {
          setIsLikedS(false);
          setLikeCountS(likeCountS - 1);
        } else {
          setIsLikedS(true);
          setLikeCountS(likeCountS + 1);
        }
      } else {
        alert("좋아요는 로그인이 필요한 기능입니다!!!");
        setIsAuthOpen(true);
      }
    };

    return (
      <Link to={pathName === "/" ? `/post/${id}` : `/blogDetail/${id}`}>
        <Wrapper category={category}>
          {pathName === "/" ? (
            <Image src={photo}></Image>
          ) : (
            <SkillImage>
              {((pathName === "/Blog" && category === "react") ||
                category === "reactnative") && <ReactIcon></ReactIcon>}
              {pathName === "/Blog" && category === "redux" && (
                <ReduxIcon></ReduxIcon>
              )}
              {pathName === "/Blog" &&
                (category === "js" || category === "es6") && <JsIcon></JsIcon>}
              {pathName === "/Blog" && category === "typescript" && (
                <TsIcon></TsIcon>
              )}

              {pathName === "/Blog" &&
                (category === "git" || category === "github") && (
                  <GithubIcon></GithubIcon>
                )}
              {pathName === "/Blog" && category === "nodejs" && (
                <ReactIcon></ReactIcon>
              )}
              {pathName === "/Blog" && category === "graphql" && (
                <GraphqlIcon></GraphqlIcon>
              )}
            </SkillImage>
          )}

          <DescContainer>
            <TitleContainer>
              <Title size={18} text={title} />
              <SubTitleContainer>
                <Category>{category}</Category>
                <CreatedAt>{createdAt}</CreatedAt>
              </SubTitleContainer>
            </TitleContainer>
            <InfoContainer>
              <UserContainer>
                <Avatar />
                <Name>{name}</Name>
              </UserContainer>
              <LikeContainer onClick={toggleLike}>
                <LikeCount>{likeCountS}</LikeCount>
                {isLikedS ? <FullHeart></FullHeart> : <EmptyHeart></EmptyHeart>}
              </LikeContainer>
            </InfoContainer>
          </DescContainer>
        </Wrapper>
      </Link>
    );
  }
);
