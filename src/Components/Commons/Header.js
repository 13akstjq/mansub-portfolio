import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import { AuthContext } from "../../Context/AuthContext";
import { mobileCard } from "../../Styles/device";
import Theme from "../../Styles/Theme";
import Logo2 from "../../assets/svg/Logo2";
const Header = styled.div`
  position: fixed;
  width: 100vw;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  font-size: 16px;
  @media ${mobileCard.small} {
    height: 60px;
    font-size: 12px;
  }
`;

const LogoContainer = styled.div`
  margin-left: 1.7em;
  width: 5.5em;
  height: 5.5em;
  cursor: pointer;
`;

const AuthButton = styled.div`
  color: ${props => props.theme.lightBlackColor};
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid ${Theme.lightBlackColor};
  border-radius: 3px;
  font-size: 1em;
`;

export default () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { isAuthOpen, setIsAuthOpen } = useContext(AuthContext);

  const toggleIsAuthOpen = () => {
    setIsAuthOpen(!isAuthOpen);
    if (isLoggedIn) {
      sessionStorage.setItem("loggedInUser", null);
      setIsLoggedIn(false);
      window.location.reload();
    }
  };
  return (
    <Header>
      <LogoContainer>
        {/* <Logo></Logo> */}
        <Logo2></Logo2>
      </LogoContainer>
      <AuthButton onClick={toggleIsAuthOpen}>
        {!isLoggedIn ? "Login" : "Logout"}
      </AuthButton>
      {/* <Login /> */}
    </Header>
  );
};
