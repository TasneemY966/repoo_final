import React, { createContext, useState, useContext } from 'react';

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const clearToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider value={{ token, updateToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export const useToken = () => useContext(TokenContext);