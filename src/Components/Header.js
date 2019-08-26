import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import PortfolioLogo from "../assets/image/portfolioLogo.jpg";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";
import Login from "./Login";

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
  border-radius: 3px;
`;

export default () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isAuthOpen, setIsAuthOpen } = useContext(AppContext);
  useEffect(() => {
    if (isLoggedIn === true) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.setItem("isLoggedIn", "false");
    }
  }, [isLoggedIn]);

  const toggleIsAuthOpen = () => {
    setIsAuthOpen(!isAuthOpen);
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    }
  };
  return (
    <Header>
      <Logo src={PortfolioLogo} />
      <AuthButton onClick={toggleIsAuthOpen}>
        {!isLoggedIn ? "Login" : "Logout"}
      </AuthButton>
      {/* <Login /> */}
    </Header>
  );
};
