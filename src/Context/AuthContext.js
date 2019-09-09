import React, { createContext, useState } from "react";
//컨텍스트 생성

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthOpen,
        setIsAuthOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
