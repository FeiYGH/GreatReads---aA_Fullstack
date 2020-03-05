import {connect} from 'react-redux';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';
import {signup} from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return({
        formType: "Sign Up",
        errors: state.errors.session_errors,
        navLink: <Link to="/login">Log In Instead</Link>
    });
}

const mDTP = dispatch => {
    return({
        processForm: (user) => dispatch(signup(user)) 
        
    })
}

export default connect(mSTP, mDTP)(SessionForm);