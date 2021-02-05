import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [ Theme, setTheme ] = useState({
    BackGroundColor: '#fff',
    Color: '#333'
  });

  return (
    <ThemeContext.Provider value={[Theme, setTheme]} >
      {children}
    </ThemeContext.Provider>
  );
}