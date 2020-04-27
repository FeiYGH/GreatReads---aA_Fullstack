import {connect} from 'react-redux';
import NavBar from './navbar';
import {logout} from '../../actions/session_actions';


const mSTP = state =>{
    return({
        sessionId: state.sessions.id
    });
};

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 

    })
}

export default connect(mSTP, mDTP)(NavBar);