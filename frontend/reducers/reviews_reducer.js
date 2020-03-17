import {RECEIVE_BOOK_REVIEWS,  RECEIVE_REVIEW, DELETE_BOOK_REVIEW, RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';

const reviewsReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case RECEIVE_BOOK_REVIEWS:
            console.log(action.reviews);
            // debugger;
            return action.reviews;
        case RECEIVE_REVIEW:    
            
            return Object.assign({},state,{[action.review.id]:action.review});
        case DELETE_BOOK_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }

}


export default reviewsReducer;