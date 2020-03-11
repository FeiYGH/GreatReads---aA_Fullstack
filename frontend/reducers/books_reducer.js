import {RECEIVE_ALL_BOOKS,RECEIVE_BOOK} from '../actions/book_actions';

const booksReducer = (state={}, action) => {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_BOOK:
            // debugger;
            return Object.assign({},state, {[action.book.id]:action.book });
        case RECEIVE_ALL_BOOKS:
            // debugger;
            return action.books;
        default:
            return state;
    }
};

export default booksReducer;