export const fetchBookshelves = (userId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}/bookshelves`
        })
    );
};


export const fetchBookshelf = (bookshelfId) => {
    // debugger;
    return(
        $.ajax({
            method: 'GET',
            url: `/api/bookshelves/${bookshelfId}`
        })
    );
}

export const createBookshelf = (bookshelf) => {
    // debugger;
    return(
        $.ajax({
            method: 'POST',
            url: '/api/bookshelves',
            data: {bookshelf}
        })
    )
}

export const editBookshelf = (bookshelfId, bookshelf) => {
    return(
        $.ajax({
            method: 'PATCH',
            url: `/api/bookshelves/${bookshelfId}`,
            data: {bookshelf}
        })
    );
};


