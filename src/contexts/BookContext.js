import React, { useState, createContext } from 'react'

// we create our context (import createContext)
export const BookContext = createContext();

// we create the class wich will contain our global data and functions
const BookContextProvider = (props) => {

    // data that we want to share
    const [books, setBooks] = useState([
        { title: '1Q84', id: 1 },
        { title: 'After dark', id: 2 },
        { title: 'Kafka en la orilla', id: 3 }
    ])

    return (
        // we pass this to our provider
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
