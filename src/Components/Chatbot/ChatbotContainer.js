import React, { useContext } from "react";
import ChatbotPresenter from "./ChatbotPresenter";
import { AppContext } from "../../Context/AppContext";

export default () => {
  const { isChatOpen, setIsChatOpen } = useContext(AppContext);
  console.log(isChatOpen);
  return (
    <ChatbotPresenter
      isChatOpen={isChatOpen}
      setIsChatOpen={setIsChatOpen}
    ></ChatbotPresenter>
  );
};
