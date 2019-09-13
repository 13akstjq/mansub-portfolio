import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBarContext } from "../Context/SideBarContext";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  height: 100vh;
  width: ${props => (props.isSideOpen ? "300px" : "0px")};
  box-shadow: ${props =>
    props.isSideOpen ? "0 19px 38px rgba(0,0,0,0.30);" : null};
  overflow: hidden;
  /* display: flex; */
  position: absolute;
  flex-direction: column;
  padding-top: 200px;
  z-index: 1;
  transition: 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  white-space: nowrap;
`;

const MenuItem = styled.div`
  margin-left: 20px;
  margin-bottom: 80px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 40px;
  color: ${props => props.theme.darkGreyColor};
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-weight: 100;
  font-size: 22px;
  color: ${props => props.theme.lightGreyColor};
`;

export default () => {
  const { isSideOpen } = useContext(SideBarContext);
  return (
    <Wrapper isSideOpen={isSideOpen}>
      <MenuItem>
        <Link to="/">
          <Title>Home</Title>
        </Link>
        <SubTitle>Discover all posts</SubTitle>
      </MenuItem>
      <MenuItem>
        <Link to="/Blog">
          <Title>Blog</Title>
        </Link>

        <SubTitle>Visit development log</SubTitle>
      </MenuItem>
      <MenuItem>
        <Link to="/Conference">
          <Title>Conference</Title>
        </Link>
        <SubTitle>Visit activity</SubTitle>
      </MenuItem>
    </Wrapper>
  );
};
