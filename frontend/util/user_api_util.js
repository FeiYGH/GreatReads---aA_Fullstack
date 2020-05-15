export const getUser = (userId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}`
        })
    )
};

export const updateUser = (userId, formData) => {
    return ($.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: formData,
        contentType:false,
        processData:false
    }))
    // .then((response)=> console.log(response.message),
    // (response) => console.log(response.responseJSON)
    // );
}