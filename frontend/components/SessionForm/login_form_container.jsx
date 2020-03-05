import {connect} from 'react-redux';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';
import {login} from '../../actions/session_actions';


const mSTP  = (state,ownProps) => {
    return({
        errors: state.errors.session_errors,
        formType: "Log In",
        navLink: <Link to="/signup">Sign Up</Link>
    });
};


const mDTP = dispatch => {
    // debugger;
    return({
        processForm: (user) => dispatch(login(user))
    });
};

export default connect(mSTP, mDTP)(SessionForm);
