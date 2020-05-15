import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_REVIEW_COMMENTS = 'RECEIVE_REVIEW_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_USER_COMMENTS = 'RECEIVE_USER_COMMENTS';


const receiveComment = comment => {
    // debugger;
    return({
        type: RECEIVE_COMMENT,
        comment
    });
};

const receiveReviewComments = comments => {
    // debugger;
    return({
        type: RECEIVE_REVIEW_COMMENTS,
        comments
    });
};

const receiveUserComments = comments => {
    return({
        type: RECEIVE_USER_COMMENTS,
        comments
    })
}

const receiveCommentErrors = (errors) => {
    return({
        type: RECEIVE_COMMENT_ERRORS,
        errors
    })
}

const deleteReviewComment = (commentId) => {
    return({
        type: DELETE_COMMENT,
        commentId

    });
};

export const fetchComment = (commentId) => dispatch => {
    return(
        CommentAPIUtil.fetchComment(commentId)
            .then(comment => dispatch(receiveComment(comment)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
            )
    );
};


export const fetchReviewComments = (reviewId) => dispatch => {

    return(
        CommentAPIUtil.fetchReviewComments(reviewId)
            .then(comments => dispatch(receiveReviewComments(comments)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
            )
        );
};

export const fetchUserComments = (userId) => dispatch => {
    return(
        CommentAPIUtil.fetchUserComments(userId)
            .then(comments => receiveUserComments(comments)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
};

export const createComment = (reviewId,comment) => dispatch => {
    // debugger;
    return(
        CommentAPIUtil.createComment(reviewId,comment)
            .then(comment => dispatch(receiveComment(comment)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON)))
        )
}

export const updateComment = (reviewId,commentId, comment) => dispatch =>  {
    return(
        CommentAPIUtil.updateComment(reviewId,commentId,comment)
            .then(comment => dispatch(receiveComment(comment)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON)))
    )
};


export const deleteComment = (commentId) =>  dispatch => {
    return(
        CommentAPIUtil.deleteComment(commentId)
            .then(() => dispatch(deleteReviewComment(commentId)),
            (errors) => dispatch(receiveCommentErrors(errors.responseJSON)))
    )
}
