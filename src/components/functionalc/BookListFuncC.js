import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { BookContext } from '../../contexts/BookContext';

// functional component context
const BookListFuncC = (props) => {
// import and use context with useContext
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return <li key={book.id} style={{ background: theme.ui, color: theme.syntax }}>{book.title}</li>
        })}
      </ul>
    </div>

  )
}

export default BookListFuncC;