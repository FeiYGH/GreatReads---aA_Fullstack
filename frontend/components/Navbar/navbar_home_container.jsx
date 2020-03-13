import {connect} from 'react-redux';
import NavBarHome from './navbar_home';

const mSTP = state =>{
    return({
        sessionId: state.sessions.id
    });
};

// const mDTP = dispatch => {
//     return({

//     })
// }

export default connect(mSTP, null)(NavBarHome);