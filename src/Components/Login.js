// Import FirebaseAuth and firebase.
import React, { useEffect, useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "../Firebase/firebaseui-styling.global.css"; // Import globally.
import firebase from "firebase/app";
import "firebase/auth";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import { AppContext } from "../Context/AppContext";
// Configure Firebase.
const config = {
  apiKey: "AIzaSyDnjwThO3x_a6YKmI_52jm9oUcNOOVNaPQ",
  authDomain: "mansub-portfolio.firebaseapp.com",
  databaseURL: "https://mansub-portfolio.firebaseio.com",
  projectId: "mansub-portfolio",
  storageBucket: "mansub-portfolio.appspot.com",
  messagingSenderId: "13321522848",
  appId: "1:13321522848:web:ebe5e5c7f4da6619"
};
firebase.initializeApp(config);

const Wrapper = styled.div`
  /* width: 0px; */
  /* height: 0px; */
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
  // const [isFinish, setIsFinish] = useState(false);
  const { isAuthOpen } = useContext(AppContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const login = res => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    // setIsFinish(true);
  };
  useEffect(() => {
    // if (!isLoggedIn) {
    //   setIsFinish(false);
    // }
    // console.log("isAuthOpen", isAuthOpen);
    // console.log("isfinish", isFinish);
  }, [isLoggedIn, isAuthOpen]);
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: res => login(res)
    },
    // We will display Google and Facebook as auth providers.
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
