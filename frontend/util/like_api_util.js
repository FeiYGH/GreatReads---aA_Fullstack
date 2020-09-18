

export const fetchLikes = (reviewId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/reviews/${reviewId}/likes`
        })
    )
}

export const createLike = (reviewId, like) => {
    //debugger;
    return(
        $.ajax({
            method: 'POST',
            url: `/api/reviews/${reviewId}/likes`,
            data: {like}
        })
    )
}

export const deleteLike = (likeId) => {
    return(
        $.ajax({
            method: 'DELETE',
            url: `/api/likes/${likeId}`
        })
    )
}