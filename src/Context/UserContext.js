import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // isLoggedIn, loggedInUser
  const sessionUser = sessionStorage.getItem("loggedInUser");
  const loginCheck = () =>
    sessionUser !== "null" && sessionUser !== null ? true : false;

  const loggedInUser = sessionUser !== "null" ? JSON.parse(sessionUser) : null;
  const [isLoggedIn, setIsLoggedIn] = useState(loginCheck());
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
