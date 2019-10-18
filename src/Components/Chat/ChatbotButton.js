import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ChatbotContext } from "../../Context/ChatbotContext";
import { mobileCard } from "../../Styles/device";
import ChatBotIcon from "../../assets/svg/ChatBotIcon";
// 커졌다가 작아지는 애니메이션
const bigSmall = keyframes`
    0% {
        transform : scale(1);
    }
    25% {
        transform : scale(1.1);
    }
    50%{
        transform : scale(1);
    }
    75% {
        transform : scale(0.9);
    }
    100%{
        transform : scale(1);
    }
`;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  opacity: ${props => (props.isChatOpen ? "0" : "1")};
  border-radius: 50%;
  border: none;
  background-color: #8565fc;
  color: white;
  transition: all
    ${props =>
      props.isChatOpen
        ? "0.3s ease-in-out;"
        : "0.6s cubic-bezier(1,-0.78,1,.14)"};
  z-index: 9;
  cursor: pointer;
  &:hover {
    animation-name: ${bigSmall};
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
  }
  &:focus {
    outline: none;
  }
  @media ${mobileCard.small} {
    width: 45px;
    height: 45px;
  }
`;

const newMessageAnimation = keyframes`
  0% {
    transform : scale(1);
  }12.5%{
    transform : scale(1.1);
  }25%{
    transform : scale(0.9);

  }37.5%{
    transform : scale(1.1);
  }50%{
    transform : scale(1.0);
  }100%{
transform : scale(1);
  }
`;

const NewMessageContainer = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f15544;
  color: white;
  animation: ${newMessageAnimation} 1000ms infinite;
  visibility: ${props => (props.isGetReply ? "visibility" : "hidden")};
  /* background-image: url("https://cdn4.vectorstock.com/i/1000x1000/03/78/new-message-icon-vector-21810378.jpg"); */
  /* background-position: center; */
  /* background-size: cover; */
`;

export default () => {
  const { isChatOpen, setIsChatOpen, isGetReply, setIsGetReply } = useContext(
    ChatbotContext
  );
  return (
    <Wrapper
      isChatOpen={isChatOpen}
      onClick={() => {
        setIsChatOpen(!isChatOpen);
        setIsGetReply(false);
      }}
    >
      <ChatBotIcon></ChatBotIcon>
      <NewMessageContainer isGetReply={isGetReply}>N</NewMessageContainer>
    </Wrapper>
  );
};
