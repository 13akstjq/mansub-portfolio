import React, { createContext, useState } from "react";

//컨텍스트 생성

export const MyProfile = createContext();

const MyProfileProvider = ({ children }) => {
  const [isJobLess] = useState(true);
  const myProfile = {
    photoURL:
      "https://lh5.googleusercontent.com/-kG11ADe4UGg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcP3fiMD1hBY2wDpsWkJJmA4Wv9_Q/photo.jpg",
    name: "한만섭",
    email: "13akstjq@gmail.com"
  };
  return (
    <MyProfile.Provider
      value={{
        isJobLess,
        myProfile
      }}
    >
      {children}
    </MyProfile.Provider>
  );
};

export default MyProfileProvider;
