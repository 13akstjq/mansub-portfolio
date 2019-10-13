import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SideBarContext } from "../../Context/SideBarContext";
import { mobileCard } from "../../Styles/device";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  height: 100vh;
  width: ${props => (props.isSideOpen ? "300px" : "0px")};
  box-shadow: ${props =>
    props.isSideOpen ? "0 19px 38px rgba(0,0,0,0.30);" : null};
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  position: absolute;
  padding-top: 200px;
  z-index: 1;
  transition: width 0.3s cubic-bezier(0, 1.21, 0.85, 1.06);
  font-size: 40px;
  white-space: nowrap;
  @media ${mobileCard.small} {
    width: ${props => (props.isSideOpen ? "55vw" : "0px")};
    font-size: 27px;
    padding-top: 20vh;
  }
`;

const MenuItem = styled.div`
  margin-left: 20px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 1em;
  color: ${props => props.theme.darkGreyColor};
`;
const SubTitle = styled.div`
  font-weight: 100;
  font-size: 0.5em;
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
