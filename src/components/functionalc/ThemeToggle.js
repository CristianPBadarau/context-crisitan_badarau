import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = (props) => {
  // consuming context and getting a shared function
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => {
      toggleTheme()
    }}>Toggle the theme</button>
  )
}

export default ThemeToggle;