import React, { useState, useContext, useEffect } from "react";
import ChatbotPresenter from "./ChatbotPresenter";
import { AppContext } from "../../Context/AppContext";
import { getMessages } from "../../Firebase/Firebase";
import { UserContext } from "../../Context/UserContext";
import { ChatbotContext } from "../../Context/ChatbotContext";

export default () => {
  const { isChatOpen, setIsChatOpen, isJobLess, myProfile } = useContext(
    ChatbotContext
  );
  const { loggedInUser } = useContext(UserContext);
  const [isShowTimeTable, setIsShowTimeTable] = useState(false);
  const today = new Date();
  const currentHours = today.getHours();
  console.log("chatbot");
  useEffect(() => {
    console.log("didmount");
  }, []);
  if (loggedInUser === null) {
  }

  return (
    <ChatbotPresenter
      isJobLess={isJobLess}
      isChatOpen={isChatOpen}
      setIsChatOpen={setIsChatOpen}
      isChatPossible={currentHours >= 9 && currentHours <= 21 ? true : false}
      currentHours={currentHours}
      isShowTimeTable={isShowTimeTable}
      setIsShowTimeTable={setIsShowTimeTable}
      messages={[]}
    ></ChatbotPresenter>
  );
};
