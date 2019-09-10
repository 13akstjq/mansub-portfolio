import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { SendButton } from "./Icons";

const Room = styled.div`
  display: grid;
  grid-template-rows: 1fr 54px;
  padding-top: 20px;
  height: 100%;
  background-color: white;
  margin: 0px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.09), 0 2px 4px rgba(0, 0, 0, 0.13);
`;

const ChatInputContainer = styled.div`
  padding: 0px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ChatInput = styled.input`
  text-decoration: none;
  padding: 10px 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const MessagesContainer = styled.div``;
const MyMessageContainer = styled.div`
  position: relative;
  border-radius: 4px;
`;

const MyMessageHeader = styled.div`
  margin-left: 10px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const MyMessage = styled.div`
  padding: 7px 12px;
  max-width: 180px;
  font-size: 13px;
  background-color: rgb(238, 241, 244);
  position: absolute;
  left: 41px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 1px;
`;

const YourMessageContainer = styled.div`
  position: relative;
  border-radius: 4px;
`;

const YourMessage = styled.div`
  font-size: 13px;
  background-color: rgb(238, 241, 244);
  position: absolute;
  right: 10px;
`;

const Writer = styled.div`
  margin: 0px 10px;
  color: black;
  font-weight: 600;
  font-size: 13px;
`;

const TimeStamp = styled.div`
  color: lightgray;
  font-size: 11px;
`;
export default ({ messages }) => {
  console.log(messages);
  return (
    <Room>
      <MessagesContainer>
        {messages.map(message => {
          if (message.isQuestion) {
            return (
              <YourMessageContainer key={message.id}>
                <YourMessage>{message.text}</YourMessage>
              </YourMessageContainer>
            );
          } else {
            return (
              <MyMessageContainer key={message.id}>
                <MyMessageHeader>
                  <Avatar size="sm"></Avatar>
                  <Writer>{"Han ManSub"}</Writer>
                  <TimeStamp>
                    {message.createdAt.seconds / 1000 / 3600}
                  </TimeStamp>
                </MyMessageHeader>
                <MyMessage>{message.text}</MyMessage>
              </MyMessageContainer>
            );
          }
        })}
      </MessagesContainer>
      <ChatInputContainer>
        <span>이모지</span>
        <ChatInput placeholder="메세지를 입력해주세요."></ChatInput>
        <SendButton size="20" fill="#aaa"></SendButton>
      </ChatInputContainer>
    </Room>
  );
};
