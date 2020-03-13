import {connect} from 'react-redux';
import frontPageSplash from './front_page_splash';

const mSTP = (state,ownProps) => {
    return({
        sessionId: state.sessions.id
    })
    
};

// const mDTP = dispatch => {
    
// };


export default connect(mSTP,null)(frontPageSplash);
