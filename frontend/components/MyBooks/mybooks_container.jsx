
import { connect } from 'react-redux';
import MyBooks from './mybooks';
import {updateProfileInfo} from '../../actions/session_actions';
import {getUser} from '../../actions/user_actions';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';

const mapStateToProps = state => {
    return({
    sessionId:state.sessions.id,
    user:state.entities.users[state.sessions.id],
    updatedUser: state.sessions.updatedUser,
    userBookshelves: state.entities.bookshelves
});
};

const mapDispatchToProps = dispatch => ({
    getUser: (id) => dispatch(getUser(id)),
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId))
    // getUpdatedUser: (id) => dispatch(updatedUser(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);