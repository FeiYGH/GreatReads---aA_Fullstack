import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOK_REVIEWS = 'RECEIVE_BOOK_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_BOOK_REVIEW = 'DELETE_BOOK_REVIEW';

const receiveReview = review => {
    debugger;
    return({
        type: RECEIVE_REVIEW,
        review
    });
};

const receiveBookReviews = reviews => {
    
    return({
        type: RECEIVE_BOOK_REVIEWS,
        reviews
    });
};

//other way of doing it is just passing in reviewId
const deleteBookReview = reviewId => {
    return({
        type: DELETE_BOOK_REVIEW,
        reviewId
    });
};

const receiveReviewErrors = (errors) => {
    return({
        type: RECEIVE_REVIEW_ERRORS,
        errors
    });
};

export const fetchReview = (reviewId) => dispatch => (
    ReviewAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
    );

export const fetchReviews = (bookId) => dispatch => (
    ReviewAPIUtil.fetchReviews(bookId) 
        .then(reviews => dispatch(receiveBookReviews(reviews)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
    );   

export const createReview = (bookId, review) => dispatch => (
    ReviewAPIUtil.createReview(bookId,review)
    .then(review => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);


export const updateReview = (bookId, review) => dispatch => (
    ReviewAPIUtil.updateReview(reviewId, review)
        .then(review => dispatch(receiveReview(review)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(review => dispatch(deleteBookReview(review.id)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);