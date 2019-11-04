import React from "react";
import Theme from "../../Styles/Theme";
import styled, { keyframes } from "styled-components";

const Container = styled.svg`
  width: 70%;
`;

const eyeAnimation = keyframes`
  0% {
    height : 0px
  }6.25% {
    height : 12px;
  }12.5% {
    height : 0px;
  }18.75% {
    height : 12px
  }25% {
    height : 0px;
  }62.5% {
    height : 0px;
  }69% {
    height : 0px;
  }75.25% {
    height : 0px;
  }100% {
    height : 0px;
  }
 
`;

const EyeTop = styled.rect`
  animation: ${eyeAnimation} 2s infinite;
`;

const ChatBotIcon2 = () => {
  return (
    <Container xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.87 72">
      <path
        d="M48.71 71.73L36.65 72A35.87 35.87 0 010 36.92 35.88 35.88 0 0135.08.27L47.14 0a35.88 35.88 0 0136.65 35.08 36.44 36.44 0 01-.57 6.92c-1.69 9.43-8.58 12.49-7.51 16.58 1.29 4.73 11.14 4.82 11.16 6.61S78.41 69 48.71 71.73z"
        className="cls-1"
        fill={"white"}
      ></path>
      <rect
        width="7.11"
        height="12.96"
        x="29.18"
        y="27.9"
        className="cls-2"
        rx="3.55"
        fill={Theme.themeColor}
      ></rect>
      <rect
        width="7.11"
        height="12.96"
        x="49.18"
        y="27.9"
        className="cls-2"
        rx="3.55"
        fill={Theme.themeColor}
      ></rect>
      <EyeTop
        width="7.85"
        height="1.42"
        x="28.81"
        y="26.06"
        className="cls-1"
        rx="3.55"
        fill={"white"}
      ></EyeTop>
      <EyeTop
        width="7.85"
        height="1.42"
        x="48.81"
        y="26.06"
        className="cls-1"
        rx="3.55"
        fill={"white"}
      ></EyeTop>
    </Container>
  );
};

export default ChatBotIcon2;
