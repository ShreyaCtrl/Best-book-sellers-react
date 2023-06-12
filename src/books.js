import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
// for Named export : 
// as we have exported it here as books we have to import it by the same name everywhere
export const books = [
  {
    img: img1,
    title: "The killing joke",
    author: "Christa Faust and Gary Phillips",
    id: 1,
  },
  {
    img: img2,
    title: "The Court of Owls Vol. 2",
    author: "Scott Snyder and Greg Capullo",
    id: 2,
  },
  {
    img: img3,
    title: "The Dawn of DC Knight Terrors",
    author: "Joshua Williamson and Jason Fabok",
    id: 3,
  },
  {
    img: img4,
    title: "The Court of Owls Vol. 1",
    author: "Greg Cox",
    id: 4,
  },
];
// for Default export
// we can import it by the name we want to give it
// export default books;