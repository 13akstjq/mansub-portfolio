import React from "react";
import styled from "styled-components";
import { CloseButton } from "../Icons";

const Wrapper = styled.div`
  width: ${props => (props.isChatOpen ? "320px" : "0px")};
  height: ${props => (props.isChatOpen ? "570px" : "0px")};
  opacity: ${props => (props.isChatOpen ? "1" : "0")};
  background-color: #f3f5fc;
  border-radius: 5px;
  z-index: 12;
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 2fr 8fr;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.19);
`;

const Header = styled.div`
  display: flex;
  padding: 20px 30px;
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

const JobSearchContainer = styled.div``;

const TimeTableContainer = styled.div``;

const RoomListContainer = styled.div`
  background-color: white;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.09), 0 2px 4px rgba(0, 0, 0, 0.13);
`;

const RoomListHeader = styled.div``;

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
          <JobSearchContainer>구직 중</JobSearchContainer>
          <TimeTableContainer>
            지금 문의하시면 바로 답장을 못할 수도 있스비낟.
          </TimeTableContainer>
        </InfoContent>
        <TiemIcon>달/해 아이콘 </TiemIcon>
      </InfoContainer>
      <RoomListContainer></RoomListContainer>
    </Wrapper>
  );
};
