import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "./Login";
import PortfolioLogo from "../assets/image/portfolioLogo.jpg";
const Header = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Logo = styled.img`
  margin-left: 20px;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const AuthButton = styled.div`
  margin-right: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Header>
      <Logo src={PortfolioLogo} />
      <AuthButton onClick={() => setIsClicked(!isClicked)}>
        {!isLoggedIn ? "Login" : "Logout"}
      </AuthButton>
      {!isLoggedIn && <Login isClicked={isClicked} />}
    </Header>
  );
};
