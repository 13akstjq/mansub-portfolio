import React from "react";
import styled from "styled-components";
import FatText from "./FatText";
import Avatar from "./Avatar";

const Video = styled.div``;

const Wrapper = styled.div`
  width: 300px;
  height: 390px;
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 7fr 3fr;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & > ${Video}:nth-child(odd) {
    background-color: #394271;
  }
  & > ${Video}:nth-child(even) {
    background-color: #33a2a7;
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
`;
const Name = styled.span`
  margin-left: 10px;
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
      <Video />
      <DescContainer>
        <TitleContainer>
          <Title size={20} text={title} />
          <Category>{category}</Category>
        </TitleContainer>
        <InfoContainer>
          <Avatar />
          <Name>{name}</Name>
          {likeCount}
        </InfoContainer>
      </DescContainer>
    </Wrapper>
  );
};
