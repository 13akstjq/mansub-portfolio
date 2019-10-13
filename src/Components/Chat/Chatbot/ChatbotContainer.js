import React, { useState, useContext } from "react";
import ChatbotPresenter from "./ChatbotPresenter";
import { ChatbotContext } from "../../../Context/ChatbotContext";

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
    ></ChatbotPresenter>
  );
};
