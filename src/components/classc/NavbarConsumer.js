import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext'

// consuming multiple contexts
class NavbarConsumer extends Component {
  render() {
    return (
      // consuming auth context
      <AuthContext.Consumer>{(AuthContext) => (
        // consumig theme context
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = AuthContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}> {isAuthenticated ? 'Logged in' : 'Logged out'}</div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>

      )}
      </AuthContext.Consumer>

    );
  }
}

export default NavbarConsumer;