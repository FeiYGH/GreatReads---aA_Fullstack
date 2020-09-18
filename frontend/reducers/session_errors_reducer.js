import {RECEIVE_CURRENT_USER,RECEIVE_ERRORS, CLEAR_SESSION_ERRORS} from '../actions/session_actions';
import {RECEIVE_UPDATE_CURRENT_USER_ERRORS} from '../actions/user_actions';

const SessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:  
            // return action.errors;
            nextState[action.errorType] = action.errors; 
            return nextState;
        case RECEIVE_UPDATE_CURRENT_USER_ERRORS:
            // debugger;
            // return Object.assign({},state, {updateProfileErrors: action.errors});
            return action.errors;
            case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state; 
    }
}
export default SessionErrorsReducer;