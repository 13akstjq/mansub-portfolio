import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ChatbotContext } from "../../Context/ChatbotContext";
import { Envelop } from "../Commons/Icons";

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
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  opacity: ${props => (props.isChatOpen ? "0" : "1")};
  border-radius: 50%;
  border: none;
  background-color: #8565fc;
  color: white;
  transition: 0.3s ease-in-out;
  z-index: 11;
  cursor: pointer;
  &:hover {
    animation-name: ${bigSmall};
    animation-timing-function: ease-in-out;
    animation-duration: 0.3s;
  }
  &:focus {
    outline: none;
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
  top: -7px;
  left: -7px;
  animation: ${newMessageAnimation} 1000ms infinite;
  visibility: ${props => (props.isGetReply ? "visibility" : "hidden")};
`;

export default () => {
  const { isChatOpen, setIsChatOpen, isGetReply, setIsGetReply } = useContext(
    ChatbotContext
  );
  console.log(isGetReply);
  return (
    <Wrapper
      isChatOpen={isChatOpen}
      onClick={() => {
        setIsChatOpen(!isChatOpen);
        setIsGetReply(false);
      }}
    >
      톡
      <NewMessageContainer isGetReply={isGetReply}>
        <Envelop fill={"#F00"}></Envelop>
      </NewMessageContainer>
    </Wrapper>
  );
};
