import {RECEIVE_CURRENT_USER,RECEIVE_ERRORS, CLEAR_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS: 
            // debugger;
            return action.errors;

        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state; 
    }
}
export default SessionErrorsReducer;