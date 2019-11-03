import React, { useState, useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Avatar from "../Commons/Avatar";
import { SendButton, SmilIcon, Loading } from "../Commons/Icons";
import useInput from "../../Hooks/useInput";
import { UserContext } from "../../Context/UserContext";
import {
  sendQuestion,
  sendAnswer,
  getMessages
} from "../../Services/FirebaseService";
import { sendMessageToSlack, getReply } from "../../Services/SlackService";
import { ChatbotContext } from "../../Context/ChatbotContext";
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
  position: relative;
  padding: 0px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ChatForm = styled.form`
  flex: 8;
  display: flex;
  align-items: center;
`;

const SendButtonContainer = styled.div`
  display: flex;
`;

const EmojiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  width: 140px;
  height: 140px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  visibility: ${props => (props.isEmojiClick ? "visibility" : "hidden")};
  position: absolute;
  top: -130px;
  left: 0;
`;

const Emoji = styled.div`
  cursor: pointer;
`;

const EmojiIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const ChatInput = styled.input`
  text-decoration: none;
  padding: 10px 5px;
  border: none;
  flex: 1;
  &:focus {
    outline: none;
  }
`;

const MessagesContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
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
  display: inline-block;
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
  text-align: right;
  color: lightgray;
  font-size: 11px;
`;

const infiniteRotate = keyframes`
  from {
    transform : rotate(0deg);
  }to {
    transform : rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  transform-origin: center center;
  animation: ${infiniteRotate} 1000ms infinite;
`;

export default () => {
  const messageList = useRef(null); // 스크롤을 밑으로 내리기 위해서 사용
  const [messages, setMessages] = useState([]); // 기존 메세지
  const [newMessages, setNewMessages] = useState([]); // 사용자가 작성한 메세지
  const chatbotInput = useInput("");
  const [isEmojiClick, setIsEmojiClick] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const { setIsGetReply } = useContext(ChatbotContext);
  const [loading, setLoading] = useState(false);
  const [guideMessages, setGiudeMessages] = useState([
    `안녕하세요 😊
     궁금한 것이 있으시면 무엇이든 물어봐주세요.`
  ]);
  const logInGuideMessage = [
    "로그인을 하셔야 챗봇 기능을 이용하실 수 있어요😭",
    "우측 상단의 로그인 버튼을 누르시면 구글, 페이스북, 깃헙으로 간단히 로그인하실 수 있습니다☺️"
  ];
  // // 답장 받기
  // getReply();

  // 메세지 입력 폼 제출 메소드
  const onSubmit = async e => {
    chatbotInput.setValue("");
    e.preventDefault();
    if (!loggedInUser) {
      // console.log(logInGuideMessage[Math.floor(Math.random() * 2)]);
      setGiudeMessages([
        ...guideMessages,
        logInGuideMessage[Math.floor(Math.random() * 2)]
      ]);

      return;
    }
    setLoading(true);
    //로딩중일 떄는 리턴시킴
    if (loading) {
      return;
    }
    const message = await sendMessageToSlack(
      chatbotInput.value,
      loggedInUser.displayName,
      loggedInUser.photoURL
    );
    console.log(message);
    setNewMessages([
      ...newMessages,
      {
        text: chatbotInput.value,
        timeStamp: getTimeStamp(new Date()),
        isQuestion: true
      }
    ]);
    sendQuestion(chatbotInput.value, loggedInUser.uid, message.ts);
  };

  // 날짜를 입력받아 타임스탬프로 변환해주는 메소드
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

  // 메세지 객체를 입력 받아서 timestamp를 filtering 해주는 메소드
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

  // 처음에 메세지를 받아서 타임스탬프 필터링
  useEffect(() => {
    createdAtFilter(messages);
    messageList.current.scrollTo({
      top: 100000
    });
    refresh();
    // eslint-disable-next-line
  }, [messages]);

  // 처음에 메세지를 받아서 타임스탬프 필터링
  useEffect(() => {
    messageList.current.scrollTo({
      top: 100000
    });
    setLoading(false);
    // eslint-disable-next-line
  }, [newMessages, guideMessages]);

  const refresh = () => {
    setTimeout(async () => {
      let lastMessage = null;
      // 최근 질문 가져오기
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].isQuestion) {
          lastMessage = messages[i];
          break;
        }
      }

      // 최근 질문이 있다면
      if (
        lastMessage &&
        lastMessage.isQuestion &&
        lastMessage.ts !== undefined
      ) {
        // 답장 불러오기
        const replys = await getReply(lastMessage.ts);

        //답장이 1개이상 있다면
        if (replys.length > 1) {
          replys.forEach(async (reply, index) => {
            if (index > 0) {
              const isGetReply = await sendAnswer(
                reply.text,
                loggedInUser.uid,
                reply.ts
              );
              if (isGetReply) {
                setIsGetReply(true);
              }
            }
          });
        }

        // 10초마다 새로운 메세지를 가져와서 작성날자 필터링하고 newMessage는 없애줌
        getMessages(loggedInUser.uid).then(messages => {
          messages.forEach(message => {
            const seconds = message.createdAt.seconds;
            const temp = new Date(seconds * 1000);
            message.timeStamp = getTimeStamp(temp);
          });
          setNewMessages([]);
          setMessages(messages);
        });
      }
    }, 5000);
  };

  // 로그인 하면 해당 유저의 메세지를 firebase에서 가져와서 보여주기
  useEffect(() => {
    if (loggedInUser !== null) {
      getMessages(loggedInUser.uid).then(res => {
        setMessages(res);
      });
    }
  }, [loggedInUser]);

  // 이모지 코드 리스트
  const emojiList = [
    ":smile:",
    ":smiley:",
    ":sweat_smile:",
    ":blush:",
    ":confused:",
    ":cry:",
    ":disappointed:",
    ":disappointed_relieved:",
    ":fearful:",
    ":expressionless:",
    ":grin:",
    ":grinning:",
    ":heart_eyes:",
    ":joy:",
    ":kissing_heart:",
    ":+1:",
    ":-1:",
    ":heart:",
    ":sparkling_heart:",
    ":broken_heart:"
  ];
  //emoji코드를 입력하면 이모지 출력
  const showEmoji = emoji => emojis.unicode(emoji);

  // emoji를 작성하던 메세지에 추가해주는 메소드
  const appendEmojitoMessage = emoji => {
    chatbotInput.setValue(chatbotInput.value + emoji);
  };
  return (
    <Room>
      <MessagesContainer ref={messageList}>
        {!loggedInUser &&
          guideMessages.map((guideMessage, index) => (
            <MyMessageContainer key={index}>
              <MyMessageHeader>
                <Avatar size="sm"></Avatar>
                <Writer>{"Han ManSub"}</Writer>
              </MyMessageHeader>
              <MyMessage>{guideMessage}</MyMessage>
            </MyMessageContainer>
          ))}
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
          newMessages.map((newMessage, index) => {
            if (newMessage && newMessage.isQuestion) {
              return (
                <YourMessageContainer key={index}>
                  <TimeStamp>{newMessage.timeStamp}</TimeStamp>
                  <YourMessage>{newMessage.text}</YourMessage>
                </YourMessageContainer>
              );
            } else {
              return (
                <MyMessageContainer key={index}>
                  <MyMessageHeader>
                    <Avatar size="sm"></Avatar>
                    <Writer>{"Han ManSub"}</Writer>
                  </MyMessageHeader>
                  <MyMessage>{newMessage.text}</MyMessage>
                </MyMessageContainer>
              );
            }
          })}
      </MessagesContainer>
      <ChatInputContainer>
        <EmojiContainer isEmojiClick={isEmojiClick}>
          {emojiList.map((emojiItem, index) => (
            <Emoji
              onClick={() => appendEmojitoMessage(showEmoji(emojiItem))}
              key={index}
            >
              {showEmoji(emojiItem)}
            </Emoji>
          ))}
        </EmojiContainer>
        <EmojiIconContainer onClick={() => setIsEmojiClick(!isEmojiClick)}>
          <SmilIcon size={18}></SmilIcon>
        </EmojiIconContainer>
        <ChatForm onSubmit={onSubmit}>
          <ChatInput
            // {...chatbotInput}
            value={chatbotInput.value}
            onChange={chatbotInput.onChange}
            type="text"
            placeholder="메세지를 입력해주세요."
          ></ChatInput>
          <SendButtonContainer onClick={onSubmit}>
            {loading ? (
              <LoadingContainer>
                <Loading fill="#aaa"></Loading>
              </LoadingContainer>
            ) : (
              <SendButton size="20" fill="#aaa"></SendButton>
            )}
          </SendButtonContainer>
        </ChatForm>
      </ChatInputContainer>
    </Room>
  );
};
