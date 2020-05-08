import {combineReducers} from 'redux'; 
import errorsReducer from './errors_reducer';
// import sessionsReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    sessions: sessionReducer,
    errors: errorsReducer  
    
});

export default rootReducer;