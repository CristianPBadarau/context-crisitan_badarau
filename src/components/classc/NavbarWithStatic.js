import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

// Using contextType
// can not consume multiple context

class Navbar extends Component {
  
  // consuming context
  static contextType = ThemeContext;

  render() {

    // using context
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;