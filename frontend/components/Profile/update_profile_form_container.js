import { connect } from 'react-redux';
import {clearErrors} from '../../actions/session_actions';
import UpdateProfileForm from './update_profile_form';
import {updateUser} from '../../actions/user_actions';


const mapStateToProps = state => {
    return {
        errors: state.errors.session_errors,
        sessionId: state.sessions.id,
        user: state.entities.users[state.sessions.id] // need to add it to state.
    };
};

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    updateProfileInfo: (id,user)=> dispatch(updateUser(id,user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm);