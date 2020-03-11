

export const fetchBook = id => {
    return(
        $.ajax({
            method: 'GET',
            url: `api/books/${id}`
        })
    );
};

export const fetchBooks = () => {
    // debugger;
    return(
        $.ajax({
            method: 'GET',
            url: 'api/books'
        })
    );    
};

