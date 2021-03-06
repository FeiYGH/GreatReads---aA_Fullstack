import {combineReducers} from 'redux'; 
import SessionErrorsReducer from './session_errors_reducer';
import BookErrorsReducer from './book_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';
import LikeErrorsReducer from './like_errors_reducer';


const errorsReducer = combineReducers({
    session_errors: SessionErrorsReducer,
    
    // book_errors: BookErrorsReducer,
    review_errors: ReviewErrorsReducer,
    bookshelf_errors: BookErrorsReducer,
    like_errors: LikeErrorsReducer
});

export default errorsReducer;