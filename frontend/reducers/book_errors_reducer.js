import {RECEIVE_BOOK,RECEIVE_ALL_BOOKS,RECEIVE_BOOK_ERRORS} from '../actions/book_actions';

const BookErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_BOOK:
            return [];
        case RECEIVE_ALL_BOOKS:
            return [];
        case RECEIVE_BOOK_ERRORS: 
            // debugger;
            return action.errors;           
        // case CLEAR_SESSION_ERRORS:
        //     return [];
        default:
            return state; 
    }
}
export default BookErrorsReducer;