import React, { createContext, useState, useContext } from 'react';

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const updateRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => useContext(RoleContext);