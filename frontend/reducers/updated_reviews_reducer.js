
import {INCREMENT_UPDATED_REVIEWS} from '../actions/review_actions';
import {UPDATE_REVIEW} from '../actions/review_actions';

const updatedReviewsCountReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case INCREMENT_UPDATED_REVIEWS:
        // debugger;
            if(state>0){
                return state+1;
            }else{
                return 1;
            }
        case UPDATE_REVIEW:
            if(state>0){
                return state+1;
            }else{
                return 1;
            }
        default:
            return state;
    }

}

export default updatedReviewsCountReducer;



