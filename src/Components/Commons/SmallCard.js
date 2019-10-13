import React from "react";
import styled from "styled-components";
import { FullHeart, EmptyHeart } from "./Icons";

const Wrapper = styeld.div``;

const CardTitle = styled.div``;

const CardImage = styled.div``;

const CardInfoContainer = styled.div``;

const Name = styled.div``;

const LikeContainer = styled.div``;

const LikeCount = styled.div``;

const SmallCard = ({
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
  return (
    <Wrapper>
      <CardTitle></CardTitle>
      <CardImage></CardImage>
      <CardInfoContainer>
        <Name>한만섭</Name>

        <LikeContainer>
          <Avatar></Avatar>
          {isLiked ? <FullHeart></FullHeart> : <EmptyHeart></EmptyHeart>}
          <LikeCount>0</LikeCount>
        </LikeContainer>
      </CardInfoContainer>
    </Wrapper>
  );
};

export default SmallCard;
