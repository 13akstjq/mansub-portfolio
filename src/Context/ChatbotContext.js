import React, { createContext, useState } from "react";
//컨텍스트 생성

export const ChatbotContext = createContext();

const ChatbotContextProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isJobLess, setIsJobLess] = useState(true);
  const myProfile = {
    photoURL:
      "https://lh5.googleusercontent.com/-kG11ADe4UGg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcP3fiMD1hBY2wDpsWkJJmA4Wv9_Q/photo.jpg",
    name: "한만섭",
    email: "13akstjq@gmail.com"
  };
  return (
    <ChatbotContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
        isJobLess,
        myProfile
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotContextProvider;
