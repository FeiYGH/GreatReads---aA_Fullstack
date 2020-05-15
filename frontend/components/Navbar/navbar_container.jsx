import {connect} from 'react-redux';
import NavBar from './navbar';
import {logout} from '../../actions/session_actions';
import {fetchBooks, fetchBook} from '../../actions/book_actions';

const mSTP = state =>{
    return({
        sessionId: state.sessions.id,
        books:state.entities.books,
        currentUser: state.entities.users[state.sessions.id]
    });
};

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 
       fetchBooks: () => dispatch(fetchBooks()),
       fetchBook: (bookId) =>dispatch(fetchBook(bookId))


    });
};

export default connect(mSTP, mDTP)(NavBar);