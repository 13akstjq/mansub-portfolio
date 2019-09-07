import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const loginCheck = () => {
    return sessionStorage.getItem("loggedInUser") === null ? true : false;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(loginCheck());
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
