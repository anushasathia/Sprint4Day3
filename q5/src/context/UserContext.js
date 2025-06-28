import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('viewer');

  const loginAs = (role) => {
    setUserRole(role);
    console.log(`Logged in as: ${role}`);
  };

  const contextValue = useMemo(() => ({
    userRole,
    loginAs,
  }), [userRole]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
