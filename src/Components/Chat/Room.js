import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Avatar from "../Commons/Avatar";
import { SendButton, SmilIcon } from "../Commons/Icons";
import useInput from "../../Hooks/useInput";
import { UserContext } from "../../Context/UserContext";
import { sendQuestion } from "../../Services/FirebaseService";
import { sendMessageToSlack, getReply } from "../../Services/SlackService";
let emojis = require("emojis");

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

const ChatForm = styled.form``;

const ChatInput = styled.input`
  text-decoration: none;
  padding: 10px 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const MessagesContainer = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;
const MyMessageContainer = styled.div`
  position: relative;
  border-radius: 4px;
  margin-bottom: 10px;
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
  /* position: absolute; */
  margin-left: 41px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 1px;
`;

const YourMessageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const YourMessage = styled.div`
  margin-left: 5px;
  font-size: 13px;
  padding: 7px 12px;
  background-color: rgb(238, 241, 244);
  margin-right: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 1px;
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
  const messageList = useRef(null);
  const [newMessages, setNewMessages] = useState([]);
  const chatbotInput = useInput("");
  const { loggedInUser } = useContext(UserContext);
  getReply();
  const onSubmit = e => {
    e.preventDefault();
    sendMessageToSlack(
      chatbotInput.value,
      loggedInUser.displayName,
      loggedInUser.photoURL
    );
    setNewMessages([
      ...newMessages,
      {
        text: chatbotInput.value,
        timeStamp: getTimeStamp(new Date())
      }
    ]);

    sendQuestion(chatbotInput.value, loggedInUser.uid);
    chatbotInput.setValue("");
  };

  const getTimeStamp = date => {
    const timeStamp = String(date).split(" ");
    return (
      timeStamp[1] +
      " " +
      timeStamp[2] +
      " " +
      timeStamp[3] +
      " " +
      timeStamp[4]
    );
  };

  const createdAtFilter = messages => {
    messages.forEach(message => {
      const seconds = message.createdAt.seconds;
      //초로 날짜를 구하고 싶으면 1000을 곱해서 해야함.
      // const date = new Date();
      // const time = date.getTime();
      // console.log(time);
      // 위의 time은 milli까지 포함한 것이기 때문에
      const temp = new Date(seconds * 1000);
      message.timeStamp = getTimeStamp(temp);
    });
  };

  const showEmoji = emoji => emojis.unicode(emoji);
  console.log(showEmoji(":heart:"));
  useEffect(() => {
    createdAtFilter(messages);
    // console.log(messages);
  }, [messages]);

  useEffect(() => {
    messageList.current.scrollTo({
      top: 100000
    });
  }, [newMessages]);

  return (
    <Room>
      <MessagesContainer ref={messageList}>
        {messages.map(message => {
          if (message.isQuestion) {
            return (
              <YourMessageContainer key={message.id}>
                <TimeStamp>{message.timeStamp}</TimeStamp>
                <YourMessage>{message.text}</YourMessage>
              </YourMessageContainer>
            );
          } else {
            return (
              <MyMessageContainer key={message.id}>
                <MyMessageHeader>
                  <Avatar size="sm"></Avatar>
                  <Writer>{"Han ManSub"}</Writer>
                  <TimeStamp>{message.timeStamp}</TimeStamp>
                </MyMessageHeader>
                <MyMessage>{message.text}</MyMessage>
              </MyMessageContainer>
            );
          }
        })}

        {newMessages &&
          newMessages.length > 0 &&
          newMessages.map((newMessage, index) => (
            <YourMessageContainer key={index}>
              <TimeStamp>{newMessage.timeStamp}</TimeStamp>
              <YourMessage>{newMessage.text}</YourMessage>
            </YourMessageContainer>
          ))}
      </MessagesContainer>
      <ChatInputContainer>
        <SmilIcon size={18}></SmilIcon>
        <ChatForm onSubmit={onSubmit}>
          <ChatInput
            // {...chatbotInput}
            value={chatbotInput.value}
            onChange={chatbotInput.onChange}
            type="text"
            placeholder="메세지를 입력해주세요."
          ></ChatInput>
        </ChatForm>
        <SendButton size="20" fill="#aaa"></SendButton>
      </ChatInputContainer>
    </Room>
  );
};
