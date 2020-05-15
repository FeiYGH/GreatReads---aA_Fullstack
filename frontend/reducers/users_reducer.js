import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const usersReducer = (state={}, action)=> {
    Object.freeze({},state);
    let nextState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            // debugger;
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]:action.user});
        default:
            return state;
    }
}

export default usersReducer;