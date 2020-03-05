import {connect} from 'react-redux';
import Greeting from './greeting';

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.sessions.id
    });
}

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()) 
    });
};


export default connect(mSTP, mDTP)(Greeting);