import {connect} from 'react-redux';
import NavBarHome from './navbar_home';
import {logout} from '../../actions/session_actions';


const mSTP = state =>{
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],


    });
};

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 

    })
}

export default connect(mSTP, mDTP)(NavBarHome);