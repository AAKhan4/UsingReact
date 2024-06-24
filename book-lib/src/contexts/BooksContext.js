import React, { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return <BooksContext.Provider value={books}>{props}</BooksContext.Provider>;
};
