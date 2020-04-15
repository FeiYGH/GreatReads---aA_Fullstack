import {RECEIVE_BOOK_REVIEWS_USER} from '../actions/review_actions';

const userReviewsReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case RECEIVE_BOOK_REVIEWS_USER:
            console.log(action.reviews);
            // debugger;
            return action.reviews;
        default:
            return state;
    }
};


export default userReviewsReducer;