//using hooks to write....
import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const DELETE_LIKE = 'DELETE LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveLike = like =>{
    return({
        type:RECEIVE_LIKE,
        like
    });
};

const receiveReviewLikes = (likes) => {
    return({
        type:RECEIVE_LIKES,
        likes
    });
};

const deleteLikeReview = like => {
    debugger;
    return({
        type:DELETE_LIKE,
        like
    });
};

const receiveLikeErrors = (errors) =>{
    return({
        type: RECEIVE_LIKE_ERRORS,
        errors
    });
};



export const fetchLikesReview = (reviewId) => dispatch => (
    LikeAPIUtil.fetchLikes(reviewId)
        .then(likes => dispatch(receiveReviewLikes(likes)),
            (errors) => dispatch(receiveLikeErrors(errors.responseJSON)))
);

export const deleteLike = (likeId) => dispatch => {
    debugger;
    return(
        LikeAPIUtil.deleteLike(likeId)
            .then(like => dispatch(deleteLikeReview(like)),
            (errors) => dispatch(receiveLikeErrors(errors.responseJSON)))
    );
};

export const createLike = (reviewId, like) => dispatch => {
    return(
        LikeAPIUtil.createLike(reviewId, like)
            .then(like => dispatch(receiveLike(reviewId, like)),
            (errors) => dispatch(receiveLikeErrors(errors.responseJSON)))
    );
};




    


