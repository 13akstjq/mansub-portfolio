import React, { useState, useContext } from "react";
import styled from "styled-components";
import FatText from "./FatText";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { EmptyHeart, FullHeart } from "./Icons";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";

const Video = styled.div``;

const Wrapper = styled.div`
  width: 300px;
  height: 390px;
  transition: 0.5s cubic-bezier(0, 1.21, 0.85, 1.06);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  color: ${props => props.theme.darkGreyColor};
  grid-template-rows: 7fr 3fr;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & > ${Video} {
    background-color: #33a2a7;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
const DescContainer = styled.div`
  background-color: #fdfefe;
  padding: 8px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const TitleContainer = styled.div`
  align-self: center;
`;

const Title = styled(FatText)`
  margin-bottom: 8px;
`;

const Category = styled.span`
  color: ${props => props.theme.lightGreyColor};
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-between;
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
  url,
  video,
  name,
  title,
  category,
  timestamp,
  likeCount
}) => {
  const [isLikedS, setIsLikedS] = useState(false);
  const [likeCountS, setLikeCountS] = useState((likeCount = 0));
  const { isLoggedIn } = useContext(UserContext);
  const { setIsAuthOpen } = useContext(AppContext);
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
    <Link to={`/post/${id}`}>
      <Wrapper>
        <Video />
        <DescContainer>
          <TitleContainer>
            <Title size={20} text={title} />
            <Category>{category}</Category>
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
};
