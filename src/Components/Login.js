import React, { useEffect, useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "../Firebase/firebaseui-styling.global.css"; // Import globally.
import firebase from "firebase/app";
import "firebase/auth";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";
import { signin } from "../Firebase/Firebase";

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  right: 0px;
  top: 80px;
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.25, 1.19);
  ${props =>
    props.isAuthOpen && !props.isLoggedIn
      ? "width : 160px; height: 160px; opacity : 1"
      : "width : 0px; height: 0px; opacity : 0"}
`;

export default () => {
  const { isAuthOpen } = useContext(AppContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const login = ({ user }) => {
    signin(user);
    const loggedInUser = {
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.uid,
      email: user.email
    };
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setIsLoggedIn(true);
  };
  const uiConfig = {
    signInFlow: "popup",
    callbacks: {
      signInSuccessWithAuthResult: res => login(res)
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
  };

  return (
    <Wrapper isAuthOpen={isAuthOpen} isLoggedIn={isLoggedIn}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Wrapper>
  );
};
