import React from "react";
import styled, { keyframes } from "styled-components";
import { mobileCard } from "../../Styles/device";
import Theme from "../../Styles/Theme";

const Svg = styled.svg`
  width: 51px;
  height: 51px;
  @media ${mobileCard.small} {
    width: 37px;
    height: 40px;
  }
`;

const eyeAnimation = keyframes`
  0% {
    height : 0px
  }6.25% {
    height : 6px;
  }12.5% {
    height : 0px;
  }18.75% {
    height : 6px
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

const ChatBotIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="45mm"
    height="48mm"
    version="1.1"
    viewBox="0 0 48 48"
  >
    <g transform="translate(0 -252)">
      <path
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeWidth="2.234"
        d="M9.82 282.574a13.75 7.434 0 0013.726 7.055 13.75 7.434 0 0013.716-7.055z"
        fill={Theme.themeColor}
      ></path>
      <rect
        width="4.472"
        height="5.796"
        x="7.56"
        y="265.817"
        strokeWidth="0.083"
        ry="1.26"
        fill={Theme.themeColor}
      ></rect>
      <rect
        width="4.472"
        height="5.796"
        x="34.838"
        y="265.817"
        strokeWidth="0.083"
        ry="1.26"
        fill={Theme.themeColor}
      ></rect>
      <EyeTop
        width="4.472"
        height="0.378"
        x="7.56"
        y="265.439"
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeWidth="1.526"
        ry="0.189"
        fill={"white"}
      ></EyeTop>
      <EyeTop
        width="4.85"
        height="0.378"
        x="34.617"
        y="265.533"
        strokeDasharray="none"
        strokeMiterlimit="4"
        strokeWidth="1.589"
        ry="0.189"
        fill={"white"}
      ></EyeTop>
    </g>
  </Svg>
);

export default ChatBotIcon;
