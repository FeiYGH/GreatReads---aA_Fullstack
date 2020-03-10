import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout,login,signup, clearErrors} from '../../actions/session_actions';
import usersReducer from '../../reducers/users_reducer';
import React from 'react';


const mSTP = (state, ownProps) => {
    // debugger;
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],
        errorsSignUp: state.errors.session_errors.loginErrors,
        errorsLogIn: state.errors.session_errors.signupErrors

        // errors:state.errors.session_errors
        
    });
}

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 
    //    processForm: (user) =>dispatch(login(user))
       login: (user) =>dispatch(login(user, "loginErrors")),
       signup: (user) => dispatch(signup(user, "signupErrors")),
       loginDemo: () => dispatch(login({email: 'user1@gmail.com', password: 'password'})),
       clearErrors: () => dispatch(clearErrors())
    });
};


export default connect(mSTP, mDTP)(Greeting);