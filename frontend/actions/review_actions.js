import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOK_REVIEWS = 'RECEIVE_BOOK_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_BOOK_REVIEW = 'DELETE_BOOK_REVIEW';
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW';
export const RECEIVE_BOOK_REVIEWS_USER = 'RECEIVE_BOOK_REVIEWS_USER';
export const RECEIVE_REVIEW_FOR_COMMENTS = 'RECEIVE_REVIEW_FOR_COMMENTS';

const receiveReview = review => {
    // debugger;
    return({
        type: RECEIVE_REVIEW,
        review
    });
};

const receiveNewReview = review => {
    // debugger;
    return({
        type: RECEIVE_NEW_REVIEW,
        review
    });
};

const receiveBookReviews = reviews => {
    
    return({
        type: RECEIVE_BOOK_REVIEWS,
        reviews
    });
};

const receiveBookReviewsUser = reviews => {
    
    return({
        type: RECEIVE_BOOK_REVIEWS_USER,
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


const receiveReviewForComments = (review) => {
    return({
        type:RECEIVE_REVIEW_FOR_COMMENTS,
        review
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

export const fetchReviewsUser = (userId) => dispatch => (
    ReviewAPIUtil.fetchReviewsUser(userId)
    .then(reviews => dispatch(receiveBookReviewsUser(reviews)),
        (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
    )
);

//THIS ONE THE NORMAL ONE
// export const createRevieBw = (bookId, review) => dispatch => (
//     ReviewAPIUtil.createReview(bookId,review)
//     .then(review => dispatch(receiveReview(review)),
//     (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
// );

export const createReview = (bookId, review) => dispatch => {
    // debugger;
    return(ReviewAPIUtil.createReview(bookId,review)
    .then(review => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);
};
    

// export const createReview = (bookId, review) => dispatch => (
//     ReviewAPIUtil.createReview(bookId,review)
//     .then(review => dispatch(receiveNewReview(review)),
//     (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
// );


export const updateReview = (reviewId, review) => dispatch => (
    ReviewAPIUtil.updateReview(reviewId, review)
        .then(review => dispatch(receiveReview(review)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(review => dispatch(deleteBookReview(review.id)),
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const fetchReviewForComments = (reviewId) => dispatch => (
    ReviewAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReviewForComments(review)),
        (errors)=> dispatch(receiveReviewErrors(errors.responseJSON)))
);
