import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';

const receiveBook = (book) => ({
    type:RECEIVE_BOOK,
    book
});

const receiveAllBooks = (books) => ({
    type:RECEIVE_ALL_BOOKS,
    books
});

export const fetchBook = bookId => dispatch => (
    BookApiUtil.fetchBook(bookId)
        .then(book => dispatch(receiveBook(book)),
           (errors) => dispatch(receiveErrors(errors.responseJSON))));

export const fetchBooks = () => dispatch => (
    BookApiUtil.fetchBooks()
        .then(books => dispatch(receiveAllBooks(books)),
            (errors) => dispatch(receiveErrors(errors.responseJSON))));

