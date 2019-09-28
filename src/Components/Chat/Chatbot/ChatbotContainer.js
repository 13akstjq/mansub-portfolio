import React, { useState, useContext, useEffect } from "react";
import ChatbotPresenter from "./ChatbotPresenter";
import { getMessages } from "../../../Services/FirebaseService";
import { UserContext } from "../../../Context/UserContext";
import { ChatbotContext } from "../../../Context/ChatbotContext";

export default () => {
  const { isChatOpen, setIsChatOpen, isJobLess } = useContext(ChatbotContext);
  const { loggedInUser } = useContext(UserContext);
  const [isShowTimeTable, setIsShowTimeTable] = useState(false);
  const today = new Date();
  const currentHours = today.getHours();
  const [messages, setMessages] = useState([]);

  // 로그인 하면 해당 유저의 메세지를 firebase에서 가져와서 보여주기
  useEffect(() => {
    if (loggedInUser !== null) {
      getMessages(loggedInUser.uid).then(res => {
        setMessages(res);
      });
    }
  }, [loggedInUser]);

  return (
    <ChatbotPresenter
      isJobLess={isJobLess}
      isChatOpen={isChatOpen}
      setIsChatOpen={setIsChatOpen}
      isChatPossible={currentHours >= 9 && currentHours <= 21 ? true : false}
      currentHours={currentHours}
      isShowTimeTable={isShowTimeTable}
      setIsShowTimeTable={setIsShowTimeTable}
      messages={messages}
    ></ChatbotPresenter>
  );
};
