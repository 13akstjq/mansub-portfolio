import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppContext";

const HambugMenu = styled.span`
  transform: rotate(90deg);
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
`;
export default () => {
  const { isSideOpen, setIsSideOpen } = useContext(AppContext);
  //사이드바 토글 버튼
  const toggleSidebar = p => {
    setIsSideOpen(!p);
    console.log(p);
  };
  return <HambugMenu onClick={() => toggleSidebar(isSideOpen)}>|||</HambugMenu>;
};
