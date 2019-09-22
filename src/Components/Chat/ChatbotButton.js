import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ChatbotContext } from "../../Context/ChatbotContext";

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

export default () => {
  const { isChatOpen, setIsChatOpen } = useContext(ChatbotContext);
  return (
    <Wrapper isChatOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)}>
      톡
    </Wrapper>
  );
};
