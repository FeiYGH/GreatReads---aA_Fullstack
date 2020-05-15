import React from 'react';
import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_UPDATED_USER} from '../actions/session_actions';
import {RECEIVE_NEW_REVIEW} from '../actions/review_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    const nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            // debugger;
            //only one user pojo for session component
            // nextState.currentUser = action.currentUser.id;
            // return nextState; 
            // return Object.assign({}, state, {id: action.currentUser.id});
            return Object.assign({},{id: action.currentUser.id},{user:action.currentUser});
        case RECEIVE_UPDATED_USER:
            return Object.assign({},{updatedUser: action.updatedUser});
            
        case RECEIVE_NEW_REVIEW:
            //this is for if I wanted to put user's newly written
            //review inside session slice of state
            return Object.assign({}, state, {newReview: action.review});
        case LOGOUT_CURRENT_USER:
            return _nullSession; 
        default:
            return state;
    }
};
 

export default sessionReducer; 