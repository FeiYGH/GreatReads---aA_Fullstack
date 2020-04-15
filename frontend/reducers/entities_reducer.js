import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './reviews_reducer';
import userReviewsReducer from './user_reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    reviews: reviewsReducer,
    userReviews: userReviewsReducer
});


export default entitiesReducer; 