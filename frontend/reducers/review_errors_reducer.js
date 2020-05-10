import {RECEIVE_REVIEW_ERRORS,RECEIVE_REVIEW,RECEIVE_BOOK_REVIEWS, DELETE_BOOK_REVIEW,} from '../actions/review_actions';

const ReviewErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_REVIEW:
            return [];
        case RECEIVE_BOOK_REVIEWS:
            return [];
        case DELETE_BOOK_REVIEW:
            return [];
        case RECEIVE_REVIEW_ERRORS: 
            debugger;
            return action.errors;           
        // case CLEAR_SESSION_ERRORS:
        //     return [];
        default:
            return state; 
    }
};


export default ReviewErrorsReducer;