export const fetchReview = id => {
    return(
        $.ajax({
            method: 'GET',
            url: `api/reviews/${id}`
        })
    );
};

export const fetchReviews = (bookId) => {
    // debugger;
    return(
        $.ajax({
            method: 'GET',
            url: `/api/books/${bookId}/reviews`
        })
    );
};

export const fetchReviewsUser = (authorId) => {
    return(
        $.ajax({
            method: 'GET',
            url:`/api/users/${authorId}/reviews`
        })
    );
}



export const createReview = (bookId, review) => {
    // debugger;
    return(
        $.ajax({
        method: 'POST',
        url: `/api/books/${bookId}/reviews`,
        data: {review}
        })
    );
};



//putting {review} like so means that I'm creating object
//with key review:{:title,:body, etc.}
export const updateReview = (reviewId,review) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${reviewId}`,
        data: {review}
    })
);

export const deleteReview = (reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
);