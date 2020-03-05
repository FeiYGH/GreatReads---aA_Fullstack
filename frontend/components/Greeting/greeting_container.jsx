import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';
import usersReducer from '../../reducers/users_reducer';


const mSTP = (state, ownProps) => {
    debugger;
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id]
    });
}

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()) 
    });
};


export default connect(mSTP, mDTP)(Greeting);