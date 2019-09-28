import React from "react";
import styled from "styled-components";
import { CloseButton, Sunny, Moon } from "../../Commons/Icons";
import Room from "../Room";
const Wrapper = styled.div`
  width: ${props => (props.isChatOpen ? "320px" : "0px")};
  height: ${props => (props.isChatOpen ? "570px" : "0px")};
  opacity: ${props => (props.isChatOpen ? "1" : "0")};
  background-color: ${props => props.theme.chatbotBgColor};
  border-radius: 5px;
  z-index: 12;
  position: fixed;
  display: grid;
  grid-template-rows: 1fr 1.3fr 8fr;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16), 0 6px 6px rgba(0, 0, 0, 0.19);
`;

const Header = styled.div`
  display: flex;
  font-size: 24px;
  padding: 20px 30px;
  padding-bottom: 0px;
  font-weight: 600;
  justify-content: space-between;
`;

const CloseButtonContainer = styled.div`
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  padding: 0px 20px;
  align-items: center;
`;

const TiemIcon = styled.div``;

const InfoContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  font-size: 13px;
`;

const JobSearchContainer = styled.div`
  font-weight: 600;
`;

const TimeTableContainer = styled.div`
  display: grid;
  position: relative;
`;

const ChatStatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChatStatusText = styled.span`
  margin-right: 5px;
`;
const ChatStatusCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isChatPossible ? "#2ecc71" : "#c0392b")};
`;

const TimeTableText = styled.span`
  cursor: pointer;
`;

const TimeTable = styled.div`
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  bottom: -80px;
  background-color: black;
  color: #999;
  font-weight: 600;
  transition: all 1s ease-in-out;
  z-index: 10;
`;
const ChatbotRow = styled.div`
  overflow: scroll;
`;
const RoomListContainer = styled.div`
  display: grid;
  background-color: white;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.09), 0 2px 4px rgba(0, 0, 0, 0.13);
`;

const CreateChatButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const FirstCreateChatButton = styled(CreateChatButton)`
  width: 150px;
  height: 40px;
  font-size: 13px;
  background-color: ${props => props.theme.chatbotBgColor};
  border-radius: 7px;
  margin: auto;
  margin-bottom: 10px;
  & > span {
    margin-left: 5px;
  }
`;

export default ({
  isChatOpen,
  setIsChatOpen,
  isJobLess,
  isChatPossible,
  isShowTimeTable,
  setIsShowTimeTable,
  currentHours
  // messages
}) => {
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
          <JobSearchContainer>
            {isJobLess
              ? "활발히 구직 중입니다 ☺️"
              : "---에서 ---를 개발 중입니다."}
          </JobSearchContainer>
          <TimeTableContainer>
            <ChatStatusContainer>
              <ChatStatusText>
                {isChatPossible
                  ? "연락 가능한 시간이에요 "
                  : "연락 가능한 시간이 아니에요 "}
              </ChatStatusText>
              <ChatStatusCircle
                isChatPossible={isChatPossible}
              ></ChatStatusCircle>
            </ChatStatusContainer>
            <TimeTableText onClick={() => setIsShowTimeTable(!isShowTimeTable)}>
              연락 가능시간 보기 🕐
            </TimeTableText>
            {isShowTimeTable && (
              <TimeTable>
                월, 화, 수, 목, 금 <br /> 09:00 AM ~ 22:00 PM <br /> Timezone:
                Asia/Seoul
              </TimeTable>
            )}
          </TimeTableContainer>
        </InfoContent>
        <TiemIcon>
          {currentHours > 6 && currentHours < 18 ? (
            <Sunny size="50" />
          ) : (
            <Moon size="50" />
          )}
        </TiemIcon>
      </InfoContainer>
      <ChatbotRow>
        <Room></Room>
      </ChatbotRow>
    </Wrapper>
  );
};
