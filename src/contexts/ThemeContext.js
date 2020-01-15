import React, { useState, createContext } from 'react';

// we create our context (import createContext)
export const ThemeContext = createContext();

// we create the class wich will contain our global data and functions
export const ThemeContextProvider = (props) => {

  // data that we want to share
  const [isLightTheme, setIsLightTheme] = useState(true);
  const light = { syntax: '#555', ui: '#ddd', bg: '#eee' };
  const dark = { syntax: '#ddd', ui: '#333', bg: '#555' };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  }

  return (
    // we pass this to our provider
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
