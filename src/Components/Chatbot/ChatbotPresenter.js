import React from "react";
import styled from "styled-components";
import { CloseButton } from "../Icons";

const Wrapper = styled.div`
  width: ${props => (props.isChatOpen ? "320px" : "0px")};
  height: ${props => (props.isChatOpen ? "570px" : "0px")};
  opacity: ${props => (props.isChatOpen ? "1" : "0")};
  background-color: white;
  border-radius: 5px;
  z-index: 12;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const CloseButtonContainer = styled.div`
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
`;

const TiemIcon = styled.div``;

const InfoContent = styled.div``;

const RoomList = styled.div``;

export default ({ isChatOpen, setIsChatOpen }) => {
  return (
    <Wrapper isChatOpen={isChatOpen}>
      <Header>
        <span>Mansub</span>
        <CloseButtonContainer onClick={() => setIsChatOpen(!isChatOpen)}>
          <CloseButton></CloseButton>
        </CloseButtonContainer>
      </Header>
      <InfoContainer>
        <InfoContent>
          <span>접속중 or 부재중</span>
        </InfoContent>
        <TiemIcon>달/해 아이콘 </TiemIcon>
      </InfoContainer>
    </Wrapper>
  );
};
