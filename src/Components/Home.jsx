import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook } from "../Store/actions/fetchBooksAction.js";
import RecipeReviewCard from "../Utils/cards.jsx";
const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
      <h1>Book List</h1>
      <div>
        <RecipeReviewCard />
      </div>
      {books.map((book) => (
        <ul key={book.id}>
          <li>{book.title}</li>
          <li>{book.author.authorName}</li>
          <li>{book.publisher.publisherName}</li>
          <li>{book.isbn}</li>
          <li>{book.genre.genreName}</li>
          <li>{book.publicationYear}</li>
          <li>{book.quantity}</li>
        </ul>
      ))}
    </>
  );
};

export default Home;
