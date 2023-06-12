import React from 'react'

const Testing = () => {
  return (
    <div>Testing</div>
  )
}
// *************************************************** //
const Book = (props) => {
  // object destructuring to pass props with less typing
  const { imgLink, title, author, id, getBook } = props;
  const getIdBook = () => {
    // we cant call the getBook directly because it requires passing parameters which is passed at runtime
    // so we use the arrow function to pass the parameters at runtime
    getBook(id);
  };
  return (
    <article className="book" key={id}>
      <button onClick={getIdBook}>click me</button>
      <img src={imgLink} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
}
// *************************************************************** //
const Book1List = () => {
  return (
    <>
      <section className="booklist">
        {/* <Book imgLink={fbook.imgLink} title={fbook.title} author={fbook.author}>
        <p>
          <b>
            this paragraph is a part of children prop of the first book
            component
            </b>
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore
            enim amet quam. Nulla voluptatum cupiditate alias dolorem, praesentium
            repudiandae dolore suscipit commodi, ipsa nihil modi quae ex. Cum,
            aliquid!
            </p>
          </Book> */}
        {books.map((book) => {
          // console.log(book);
          // const { imgLink, title, author, id } = book;
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};
// ********************************************************************* //
export default Testing