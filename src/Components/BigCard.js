import React from "react";
import styled from "styled-components";
import FatText from "./FatText";

const Wrapper = styled.div`
  font-size: 40px;
  width: 300px;
  height: 390px;
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  border-radius: 5px;
  display: grid;
  grid-template-rows: 6fr 4fr;
  background-color: lightgray;
`;

const Video = styled.div``;

const DescContainer = styled.div``;

const Title = styled(FatText)``;

const Category = styled.span`
  color: ${props => props.theme.lightGreyColor};
`;

const InfoContainer = styled.div`
  display: flex;
`;

export default ({
  url,
  video,
  name,
  title,
  category,
  timestamp,
  likeCount
}) => {
  return (
    <Wrapper>
      <Video>비디오</Video>
      <DescContainer>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <InfoContainer>
          {name}
          {likeCount}
        </InfoContainer>
      </DescContainer>
    </Wrapper>
  );
};
