import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_UPDATE_CURRENT_USER_ERRORS = 'RECEIVE_UPDATE_CURRENT_USER_ERRORS';

const receiveUser = user => {
    // debugger;
    return({
        type: RECEIVE_USER,
        user
    })
}

//need to edit, goes to session_errors_reducer
const receiveErrors = (errors) => {
    return({
        type: RECEIVE_UPDATE_CURRENT_USER_ERRORS,
        errors
    }); 
};


export const getUser = (id) => dispatch => {
    return UserAPIUtil.getUser(id)
        .then(user => dispatch(receiveUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

//for updating current user profile information
//BUT GOES TO SESSION CONTROLLER
export const updateUser = (id, user) => dispatch => {
    // debugger;
    return UserAPIUtil.updateUser(id, user)
        .then(user => dispatch(receiveUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));
};