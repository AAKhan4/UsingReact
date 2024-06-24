import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bid } = useParams();
  const books = useContext(BooksContext);

  const book = books.find((book) => book.id === parseInt(bid.bid));
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
