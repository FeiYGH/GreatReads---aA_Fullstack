import {combineReducers} from 'redux'; 
import SessionErrorsReducer from './session_errors_reducer';


const errorsReducer = combineReducers({
    session_errors: SessionErrorsReducer
});

export default errorsReducer;