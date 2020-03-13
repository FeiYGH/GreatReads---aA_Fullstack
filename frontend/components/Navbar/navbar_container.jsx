import {connect} from 'react-redux';
import NavBar from './navbar';

const mSTP = state =>{
    return({
        sessionId: state.sessions.id
    });
};

// const mDTP = dispatch => {
//     return({

//     })
// }

export default connect(mSTP, null)(NavBar);