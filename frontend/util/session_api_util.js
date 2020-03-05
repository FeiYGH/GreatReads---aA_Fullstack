
export const signup = (user)=>{
    return(
        $.ajax({
            method: "POST",
            url: '/api/users',
            data: {user}

        })
    );
}



export const login = (user) => {
    // debugger; 
    return(
        $.ajax({
            method: "POST",
            url: '/api/session/',
            data: {user}
        })
    );
};

//deleteSession
export const logout = () => {
    return(
        $.ajax({
            method: "DELETE",
            url: '/api/session'
        })
    );
};

// export default SessionApilUtil;