import {connect} from 'react-redux';
import LoginGreet from '../LoginGreeting/login_greet';
import {Link} from 'react-router-dom';
import React from 'react';
import {signup} from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return({
        formType: "Sign Up",
        errors: state.errors.session_errors,
        navLink: <Link to="/login">Log In</Link>
    });
}

const mDTP = dispatch => {
    return({
        processForm: (user) => dispatch(login(user)) 
    })
}

export default connect(mSTP, mDTP)(LoginGreet);