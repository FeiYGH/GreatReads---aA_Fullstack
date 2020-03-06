import React from 'react';
import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    const nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            debugger;
            //only one user pojo for session component
            // nextState.currentUser = action.currentUser.id;
            // return nextState; 
            // return Object.assign({}, state, {id: action.currentUser.id});
            return Object.assign({},{id: action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return _nullSession; 
        default:
            return state;
    }
};

export default sessionReducer; 