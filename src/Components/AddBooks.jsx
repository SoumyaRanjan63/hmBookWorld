import  { useState } from "react";
import { useDispatch } from "react-redux";
import { booksAdd } from '../Store/actions/addBooksaction';

const AddBooks = () => {
    const [booksInput, setBooksInput] = useState('');
    const [authorInput, setAuthorInput] = useState('');
    const [publisherInput, setPublisherInput] = useState('');
    const [isbnInput, setIsbnInput] = useState('');
    const [genreInput, setGenreInput] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [qty, setQty] = useState('');

    const dispatch = useDispatch();

    const handleAddBook = (e) => {
        e.preventDefault();
        dispatch(
            booksAdd({
                title: booksInput,
                author: {
                    authorName: authorInput
                },
                publisher: {
                    publisherName: publisherInput
                },
                isbn: isbnInput,
                genre: {
                    genreName: genreInput
                },
                publicationYear: pubYear,
                quantity: qty
            })
        );
        // Clear input fields after adding the book
        setBooksInput('');
        setAuthorInput('');
        setPublisherInput('');
        setIsbnInput('');
        setGenreInput('');
        setPubYear('');
        setQty('');
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleAddBook}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={booksInput}
                        onChange={(e) => setBooksInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        value={authorInput}
                        onChange={(e) => setAuthorInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Publisher:
                    <input
                        type="text"
                        value={publisherInput}
                        onChange={(e) => setPublisherInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    ISBN:
                    <input
                        type="text"
                        value={isbnInput}
                        onChange={(e) => setIsbnInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        value={genreInput}
                        onChange={(e) => setGenreInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Publication Year:
                    <input
                        type="text"
                        value={pubYear}
                        onChange={(e) => setPubYear(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;
