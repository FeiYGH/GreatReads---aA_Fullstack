
import { connect } from 'react-redux';
import Profile from './profile';
import {updateProfileInfo} from '../../actions/session_actions';

import {getUser} from '../../actions/user_actions';


const mapStateToProps = state => {
    return({
    sessionId:state.sessions.id,
    user:state.entities.users[state.sessions.id],
    updatedUser: state.sessions.updatedUser
});
};

const mapDispatchToProps = dispatch => ({
    getUser: (id) => dispatch(getUser(id))
    // getUpdatedUser: (id) => dispatch(updatedUser(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);