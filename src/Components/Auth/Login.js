import React, { useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "../../Styles/firebaseui-styling.global.css"; // Import globally.
import firebase from "firebase/app";
import "firebase/auth";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import {
  signin,
  SearchUserByUid,
  createRoom
} from "../../Services/FirebaseService";
import { AuthContext } from "../../Context/AuthContext";
import { mobileCard } from "../../Styles/device";

const Wrapper = styled.div`
  z-index: 21;
  position: fixed;
  overflow: hidden;
  right: 0px;
  top: 100px;
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.25, 1.19);
  ${props =>
    props.isAuthOpen && !props.isLoggedIn
      ? "width : 160px; height : 190px; opacity : 1"
      : "width : 0px; height: 0px; opacity : 0"}


  @media ${mobileCard.small}{
    top : 60px;
  }
`;
const Overlay = styled.div`
  visibility: ${props => (props.isAuthOpen ? "visibility" : "hidden")};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
export default () => {
  const { isAuthOpen, setIsAuthOpen } = useContext(AuthContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  // 로그인이 성공되었을 경우 호출될 login 함수
  const login = async ({ user }) => {
    const DBUser = await SearchUserByUid(user.uid);

    // 회원 정보가 없었다면 채팅 방을 만들어줌.
    if (DBUser.length === 0) {
      console.log("방 생성");
      createRoom(user.uid);
    }
    signin(user);
    const loggedInUser = {
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      email: user.email
    };
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setIsLoggedIn(true);
    setIsAuthOpen(false);
    return true;
  };

  // firebase 로그인 ui 설정
  const uiConfig = {
    signInFlow: "popup",
    // signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // 로그인 성공 시 login함수 호출
      signInSuccessWithAuthResult: res => login(res)
    }
  };

  return (
    <Wrapper isAuthOpen={isAuthOpen} isLoggedIn={isLoggedIn}>
      <Overlay
        onClick={() => {
          setIsAuthOpen(!isAuthOpen);
        }}
        isAuthOpen={isAuthOpen}
      ></Overlay>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Wrapper>
  );
};
