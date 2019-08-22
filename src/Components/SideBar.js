import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  transition: 0.5s linear;
`;

const MenuItem = styled.div`
  margin-left: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: ${props => props.theme.darkGreyColor};
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  font-weight: 100;
  font-size: 22px;
  color: ${props => props.theme.lightGreyColor};
`;

export default () => {
  return (
    <Wrapper>
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
