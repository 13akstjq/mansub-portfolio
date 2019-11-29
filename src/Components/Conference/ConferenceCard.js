import React, { useState, useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../Context/UserContext";
import { AuthContext } from "../../Context/AuthContext";
import { desktopCard } from "../../Styles/device";
import Avatar from "../Commons/Avatar";
import { EmptyHeart, FullHeart } from "../Commons/Icons";

const ImageContainer = styled.div`
  @media ${desktopCard.small} {
    padding: 50px 10px;
  }
`;
const Image = styled.img`
  background-image: ${props => `url(${props.url})`};
  background-image: ${props => props.url};
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  @media ${desktopCard.small} {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const SkillImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 370px;
  position: relative;
  transition: transform 0.5s cubic-bezier(0, 1.21, 0.85, 1.06), box-shadow 0.5s;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  color: ${props => props.theme.darkGreyColor};
  grid-template-rows: 7fr minmax(0px, 4fr);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.16);
  }
  @media ${desktopCard.small} {
    height: 250px;
    grid-template-rows: 1fr 0px;
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
  display: grid;
  grid-template-rows: 50px 1fr;
  align-self: flex-start;
`;

const Title = styled.div`
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  @media ${desktopCard.small} {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 16px;
    color: #fff;
  }
`;

const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  @media ${desktopCard.small} {
    display: none;
  }
`;

const Address = styled.div`
  font-size: 0.8em;
`;

const CreatedAt = styled.div`
  font-size: 0.8em;
  right: 0px;
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.lightGreyColor};
`;

const CategoryList = styled.div``;

const Category = styled.span`
  margin-right: 0.5em;
  font-size: 0.8em;
  align-items: flex-end;
  color: ${props => props.theme.lightGreyColor};
`;

const InfoContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  padding-top: 10px;
  align-items: flex-end;
  justify-content: space-between;
  /* transition: 0.5s cubic-bezier(0, 1.21, 0.85, 1.06); */
  @media ${desktopCard.small} {
    width: 90%;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: white;
    font-size: 0.85rem;
  }
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
export default ({
  id,
  name,
  title,
  date,
  address,
  likeCount,
  photo,
  color
}) => {
  const [isLikedS, setIsLikedS] = useState(false);
  const [likeCountS, setLikeCountS] = useState((likeCount = 0));
  const { isLoggedIn } = useContext(UserContext);
  const { setIsAuthOpen } = useContext(AuthContext);

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
    <Wrapper>
      <ImageContainer color={color}>
        <Image url={photo}></Image>
      </ImageContainer>
      <DescContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <SubTitleContainer>
            <Address>{address}</Address>
            <CreatedAt>{date}</CreatedAt>
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
  );
};
