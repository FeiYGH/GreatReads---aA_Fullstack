import {RECEIVE_BOOKSHELF_ERRORS} from '../actions/bookshelf_actions';

const BookshelfErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_BOOKSHELF_ERRORS:
            return action.errors; 
        default:
            return state;
    }
}

export default BookshelfErrorsReducer;