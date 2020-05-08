export const fetchComment = (reviewId, id) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/reviews/${reviewId}/comments/${id}`
        })
    );

}

export const fetchReviewComments = (reviewId) => {
    // debugger;
    return(
        $.ajax({
            method: 'GET',
            url: `/api/reviews/${reviewId}/comments`
        })
    )
}

export const fetchUserComments = (userId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}/comments`
        })
    )
}

export const createComment = (reviewId, comment) => {
    // debugger;
    return(
        
        $.ajax({
            method: 'POST',
            url: `/api/reviews/${reviewId}/comments`,
            data: {comment}
        })
    );
};

export const updateComment = (reviewId, commentId,comment) => {
    return(
        $.ajax({
            method: 'PATCH',
            url: `/api/reviews/${reviewId}/comments/${commentId}`,
            data: {comment}
        })
    );
};

export const deleteComment = (reviewId, commentId) => {
    return(
        $.ajax({
            method:'DELETE',
            url: `/api/reviews/${reviewId}/comments/${commentId}`,
        })
    )
}