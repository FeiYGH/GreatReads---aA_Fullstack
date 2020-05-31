import {RECEIVE_BOOK_REVIEWS,  RECEIVE_REVIEW, DELETE_BOOK_REVIEW, RECEIVE_NEW_REVIEW} from '../actions/review_actions';
import {RECEIVE_REVIEW_FOR_COMMENTS, CLEAR_BOOK_REVIEWS} from '../actions/review_actions';
import {UPDATE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case RECEIVE_BOOK_REVIEWS:
            // console.log(action.reviews);
            // debugger;
            return action.reviews;
        case UPDATE_REVIEW:
            return Object.assign({},state,{[action.review.id]:action.review});
        case RECEIVE_REVIEW:          
            // debugger;
            return Object.assign({},state,{[action.review.id]:action.review});
        case RECEIVE_NEW_REVIEW:
            return Object.assign({},state,{[action.review.id]:action.review});
        case DELETE_BOOK_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        case RECEIVE_REVIEW_FOR_COMMENTS:
            // debugger;
            return Object.assign({},state,{fetchedReviewForComments:action.review});
        case CLEAR_BOOK_REVIEWS:
            // debugger;
            return {}; 

        default:
            return state;
    }

}


export default reviewsReducer;