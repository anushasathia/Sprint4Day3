import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const mockUsers = {
  admin: { id: 1, name: 'Admin User', role: 'admin' },
  editor: { id: 2, name: 'Editor User', role: 'editor' },
  viewer: { id: 3, name: 'Viewer User', role: 'viewer' },
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('currentUser'); 
      }
    }
  }, []);


  const login = (role) => {
    const selectedUser = mockUsers[role];
    if (selectedUser) {
      setUser(selectedUser);
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify(selectedUser)); 
      console.log(`Logged in as: <span class="math-inline">\{selectedUser\.name\} \(</span>{selectedUser.role})`);
    } else {
      console.error("Invalid role provided for login.");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser'); 
    console.log("Logged out.");
  };

  const contextValue = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};