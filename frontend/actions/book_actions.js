import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
//don't have a RECEIVE_BOOK_ERRORS constant
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

const receiveBook = (book) => ({
    type:RECEIVE_BOOK,
    book
});

const receiveAllBooks = (books) => ({
    type:RECEIVE_ALL_BOOKS,
    books
});

const receiveBookErrors =  (errors) => {
    return({
        type: RECEIVE_BOOK_ERRORS,
        errors
    });
};

export const fetchBook = bookId => dispatch => (
    BookApiUtil.fetchBook(bookId)
        .then(book => dispatch(receiveBook(book)),
           (errors) => dispatch(receiveBookErrors(errors.responseJSON))));

export const fetchBooks = () => dispatch => (
    BookApiUtil.fetchBooks()
        .then(books => dispatch(receiveAllBooks(books)),
            (errors) => dispatch(receiveBookErrors(errors.responseJSON))));

