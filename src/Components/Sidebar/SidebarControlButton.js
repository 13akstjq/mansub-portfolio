import React, { useContext } from "react";
import styled from "styled-components";
import { SideBarContext } from "../../Context/SideBarContext";
import { LeftArrowIcon } from "../Commons/Icons";

const HambugMenu = styled.span`
  transform: rotate(90deg);
  font-size: 30px;
  font-weight: 900;
  justify-self: flex-end;
  cursor: pointer;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

export default () => {
  const { isSideOpen, setIsSideOpen } = useContext(SideBarContext);
  //사이드바 토글 버튼
  const toggleSidebar = p => {
    setIsSideOpen(!p);
  };
  if (isSideOpen) {
    return (
      <IconContainer onClick={() => toggleSidebar(isSideOpen)}>
        <LeftArrowIcon></LeftArrowIcon>
      </IconContainer>
    );
  } else {
    return (
      <HambugMenu onClick={() => toggleSidebar(isSideOpen)}>|||</HambugMenu>
    );
  }
};
