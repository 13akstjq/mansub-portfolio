import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "./Login";
const Header = styled.div`
  position: fixed;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 20px;
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
      <Logo>Logo</Logo>
      <AuthButton onClick={() => setIsClicked(!isClicked)}>
        {!isLoggedIn ? "Login" : "Logout"}
      </AuthButton>
      {!isLoggedIn && <Login isClicked={isClicked} />}
    </Header>
  );
};
