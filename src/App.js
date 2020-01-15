import React from 'react';
import BookListFuncC from './components/functionalc/BookListFuncC'
import NavbarConsumer from './components/classc/NavbarConsumer';
import NavbarStatic from './components/classc/NavbarWithStatic'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/functionalc/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import NavbarFuncC from './components/functionalc/NavbarFuncC'
import BookContextProvider from './contexts/BookContext';
import BookListConsumer from './components/classc/BookListConsumer'

function App() {
  return (
    <div className="App">
      {/* --Theme Provider-- */}
      <ThemeContextProvider>

        {/* --Auth Provider-- */}
        <AuthContextProvider>

          <NavbarConsumer />
          {/* <NavbarFuncC /> */}
          {/* <NavbarStatic /> */}

          {/* --Books Provider-- */}
          <BookContextProvider>
            <BookListFuncC />
          </BookContextProvider>
          {/* End Books Provider */}
          <ThemeToggle />

        </AuthContextProvider>
        {/* End Auth Provider */}

      </ThemeContextProvider>
      {/* End Theme Provider */}
    </div>
  );
}

export default App;
