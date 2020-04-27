import {RECEIVE_BOOK_REVIEWS_USER, RECEIVE_REVIEW} from '../actions/review_actions';

const userReviewsReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case RECEIVE_BOOK_REVIEWS_USER:
            console.log(action.reviews);
            // debugger;
            return action.reviews;
        case RECEIVE_REVIEW:
          
            return Object.assign({},state,{[action.review.id]:action.review});

            // return state;
        default:
            return state;
    }
};


export default userReviewsReducer;