

export const fetchLikes = () => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/reviews/${reviewId}/likes`
        })
    )
}

export const createLike = (likeId, like) => {
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