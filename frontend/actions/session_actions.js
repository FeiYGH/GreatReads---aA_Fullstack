import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

import { RECEIVE_COMMENT } from './comment_actions';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_UPDATED_USER = 'RECEIVE_UPDATED_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveCurrentUser = currentUser => {
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
}


// //errors will be an array
// const receiveErrors = errors => {
//     // debugger;
//     return({
//         type: RECEIVE_ERRORS,
//         errors
//     });
// };

const receiveErrors = (errors,errorType) => {
    return({
        type: RECEIVE_ERRORS,
        errorType: errorType,
        errors
    }); 
};

const logoutCurrentUser = () => {
    return({
        type: LOGOUT_CURRENT_USER
    });
};

export const clearErrors = () => {
    return({
        type:CLEAR_SESSION_ERRORS
    });
};



export const login = (user, errorType) => dispatch => {
    // debugger;
    return SessionAPIUtil.login(user) 
    .then((user) => dispatch(receiveCurrentUser(user)),
    // (errors)=> console.log(errors));
    (errors)=> dispatch(receiveErrors(errors.responseJSON, errorType)));
    
};

export const logout = () => dispatch => SessionAPIUtil.logout()
    .then(()=> dispatch(logoutCurrentUser()),
    (errors)=> dispatch(receiveErrors(errors.responseJSON)));


export const signup = (user, errorType) => dispatch => {
    // debugger;
    SessionAPIUtil.signup(user) 
    .then((user) => dispatch(receiveCurrentUser(user)),
    (errors)=> dispatch(receiveErrors(errors.responseJSON,errorType)));
};




