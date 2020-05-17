
import {RECEIVE_USER_BOOKSHELVES, RECEIVE_BOOKPAGE_BOOKSHELF, RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';


const bookShelfReducer = (state ={}, action) => {
    Object.freeze({},state);
    switch(action.type){
        case RECEIVE_USER_BOOKSHELVES:
            return action.bookshelves;
        case RECEIVE_BOOKPAGE_BOOKSHELF:
            return Object.assign({},state,{[action.bookshelf.book_id]: action.bookshelf});
        case RECEIVE_BOOKSHELF:
            return Object.assign({}, state,{[action.bookshelf.book_id]:action.bookshelf});
        default:
            return state;
    }
}

export default bookShelfReducer;
