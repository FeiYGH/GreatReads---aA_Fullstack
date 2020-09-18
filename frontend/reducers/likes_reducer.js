import {RECEIVE_LIKE, RECEIVE_LIKES,DELETE_LIKE,RECEIVE_LIKE_ERRORS} from '../actions/like_actions';


const likesReducer = (state = {}, action) => {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_LIKE:
            return Object.assign({}, state,{[action.like.id]:action.like});
        case RECEIVE_LIKES:
            return action.likes;
        case DELETE_LIKE:
            //debugger;
            delete nextState[action.like.id];
            return nextState;
       
        default:
            return state;
    }
}

export default likesReducer;