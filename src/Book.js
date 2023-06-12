import {books} from './books'

const Book = (props) => {
  // object destructuring to pass props with less typing
  const { img, title, author, id } = props;
  return (
    <article className="book" key={id}>
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className='number'>{`#${id}`}</span>
    </article>
  );
};
export default Book;