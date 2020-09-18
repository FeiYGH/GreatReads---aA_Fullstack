import {RECEIVE_LIKE_ERRORS} from '../actions/like_actions';

const LikeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_LIKE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default LikeErrorsReducer;
