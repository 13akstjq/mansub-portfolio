import React, { useContext } from "react";
import styled from "styled-components";
import PortfolioLogo from "../../assets/image/portfolioLogo.jpg";
import { UserContext } from "../../Context/UserContext";
import { AuthContext } from "../../Context/AuthContext";
import { mobileCard } from "../../Styles/device";
import Theme from "../../Styles/Theme";

const Header = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
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

const Logo = styled.img`
  margin-left: 20px;
  width: 4em;
  height: 4em;
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
      <Logo src={PortfolioLogo} />
      <AuthButton onClick={toggleIsAuthOpen}>
        {!isLoggedIn ? "Login" : "Logout"}
      </AuthButton>
      {/* <Login /> */}
    </Header>
  );
};
