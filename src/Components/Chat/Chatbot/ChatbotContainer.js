import React, { useState, useContext, useEffect } from "react";
import ChatbotPresenter from "./ChatbotPresenter";
import { getMessages, sendAnswer } from "../../../Services/FirebaseService";
import { UserContext } from "../../../Context/UserContext";
import { ChatbotContext } from "../../../Context/ChatbotContext";
import { getReply } from "../../../Services/SlackService";

export default () => {
  const { isChatOpen, setIsChatOpen, isJobLess } = useContext(ChatbotContext);
  const [isShowTimeTable, setIsShowTimeTable] = useState(false);
  const today = new Date();
  const currentHours = today.getHours();

  return (
    <ChatbotPresenter
      isJobLess={isJobLess}
      isChatOpen={isChatOpen}
      setIsChatOpen={setIsChatOpen}
      isChatPossible={currentHours >= 9 && currentHours <= 21 ? true : false}
      currentHours={currentHours}
      isShowTimeTable={isShowTimeTable}
      setIsShowTimeTable={setIsShowTimeTable}
      // messages={messages}
    ></ChatbotPresenter>
  );
};
