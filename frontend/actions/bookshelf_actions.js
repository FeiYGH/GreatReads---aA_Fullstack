import * as BookshelfAPIUtil from '../util/bookshelf_api_util';


export const RECEIVE_BOOKPAGE_BOOKSHELF = 'RECEIVE_BOOKPAGE_BOOKSHELF';
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';

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