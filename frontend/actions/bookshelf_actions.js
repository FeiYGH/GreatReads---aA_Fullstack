import * as BookshelfAPIUtil from '../util/bookshelf_api_util';


export const RECEIVE_BOOKPAGE_BOOKSHELF = 'RECEIVE_BOOKPAGE_BOOKSHELF';
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const RECEIVE_USER_BOOKSHELVES = 'RECEIVE_USER_BOOKSHELVES';

const receiveUserBookshelves = bookshelves => {
    return({
        type:RECEIVE_USER_BOOKSHELVES,
        bookshelves
    });
}

const receiveBookPageBookshelf = bookshelf => {
    return({
        type:RECEIVE_BOOKPAGE_BOOKSHELF,
        bookshelf
    });
};

const receiveBookshelf = bookshelf => {
    return({
        type:RECEIVE_BOOKSHELF,
        bookshelf
    })
}


const receiveErrors = errors => {
    return({
        type: RECEIVE_BOOKSHELF_ERRORS,
        errors
    })
}

export const fetchUserBookshelves = (userId) => dispatch => {
    return(
        BookshelfAPIUtil.fetchBookshelves(userId)
        .then(bookshelves => dispatch(receiveUserBookshelves(bookshelves)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
    )
}

export const fetchBookPageBookshelf = (bookshelfId) => dispatch => {
    return(
        BookshelfAPIUtil.fetchBookshelf(bookshelfId)
            .then(bookshelf => dispatch(receiveBookPageBookshelf(bookshelf)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
    ); 
}



export const createBookshelf = (bookshelf) => dispatch => {
    // debugger;
    return(
        BookshelfAPIUtil.createBookshelf(bookshelf)
            .then(bookshelf =>dispatch(receiveBookshelf(bookshelf)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
    );
};

export const editBookshelf = (bookshelfId, bookshelf) => dispatch => {
    return(
        BookshelfAPIUtil.editBookshelf(bookshelfId, bookshelf)
            .then(bookshelf =>dispatch(receiveBookshelf(bookshelf)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
    );
    
}


