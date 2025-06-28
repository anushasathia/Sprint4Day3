import React, { createContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('appTheme');
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
    document.body.style.backgroundColor = theme === 'light' ? '#f0f2f5' : '#333';
    document.body.style.color = theme === 'light' ? '#333' : '#f0f2f5';
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};