import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Greeting/>
    </React.StrictMode>
)
const Image = (props) => <img src="./images/img1.png" />;
const Title = () => <h2>Think Straight</h2>;
const Author = () => {
  const inline = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: " 0.5rem",
    letterSpacing: "0.2rem",
  };
  return <h4 style={inline}>Darius Foroux</h4>;
};
// object destructuring right at the arguments because we know they all will be there set in the components
const Book = ({ imgLink, title, author, children }) => {
  // the children prop should always be declared with the same name it is a prop provided by react
  return (
    <article className="book">
      <img src={imgLink} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {/* this children is available for first instance only hence none others are able to load it */}
      {children}
    </article>
  );
};


const Event = () => {
  const handleClick = () => {
    console.log("clicked");
    alert("clicked");
  };
  const formSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("form submitted");
    alert("form submitted");
  };
  return (
    <section>
      <form onClick={formSubmit}>
        <h2>Details</h2>
        <input type="text" name="example" id="example" />
        <button type="submit">Submit</button>
      </form>
      <button type="submit" onClick={handleClick}>
        click me
      </button>
    </section>
  );
};
const Greeting = () => {
  // return (
  //   React.createElement('h2', {}, 'hello world')
  // )
  return (
    // React.Fragment is used to avoid creating extra fragments
    <React.Fragment>
      {/* React.createElement('h2', {}, 'hello world') */}
      <div>
        <ul>
          <li>
            <a href="index.js">Home</a>
          </li>
          <li>
            <a href="index.js">Contacts</a>
          </li>
        </ul>
        <section>this is a section</section>
        <input type="text" name="sls" id="sdf" className="random" />
        <hr />
        <h1>Components rendering</h1>
        <Person />
        <Person></Person>
        <Message></Message>
        <Message />
      </div>
    </React.Fragment>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "asdfjlkhg")
  // );
};
const Person = () => <h2>Bruce Wayne</h2>;
const Message = () => {
  return <p>I am batman</p>;
};
const fbook = {
  imgLink:
    "https://m.media-amazon.com/images/I/81QmMZUrg8L._AC_UY327_FMwebp_QL65_.jpg",
  title: "The killing joke",
  author: "Christa Faust and Gary Phillips",
};
const sbook = {
  imgLink:
    "https://m.media-amazon.com/images/I/91H1elJFgML._AC_UY327_FMwebp_QL65_.jpg",
  title: "The Court of Owls Vol. 2",
  author: "Scott Snyder and Greg Capullo",
};
const tbook = {
  imgLink:
    "https://m.media-amazon.com/images/I/91PuOcLUjHL._AC_UY327_FMwebp_QL65_.jpg",
  title: "The Dawn of DC Knight Terrors",
  author: "Joshua Williamson and Jason Fabok",
};
const obook = {
  imgLink:
    "https://m.media-amazon.com/images/I/91qe4NRoEPL._AC_UY327_FMwebp_QL65_.jpg",
  title: "The Court of Owls Vol. 1",
  author: "Greg Cox",
};

export default Greeting;