import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout,login} from '../../actions/session_actions';
import usersReducer from '../../reducers/users_reducer';
import React from 'react';

const mSTP = (state, ownProps) => {
    // debugger;
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],
        errors:state.errors.session_errors
    });
}

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 
       processForm: (user) =>dispatch(login(user))
    });
};


export default connect(mSTP, mDTP)(Greeting);