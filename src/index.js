import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1 className="headline">Best Sellers of Today</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
// the above and below are the same a self closing tag and opening tag with closing one give are equivalent due to xml rules
// root.render(<Greeting><Greeting/>);
