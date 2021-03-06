import {connect} from 'react-redux';
import NavBarHome from './navbar_home';
import {logout} from '../../actions/session_actions';
import {fetchBooks, fetchBook} from '../../actions/book_actions';



const mSTP = state =>{
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],
        books:state.entities.books
    });
};

const mDTP = dispatch => {
    return({
       logout: () => dispatch(logout()), 
       fetchBooks: () => dispatch(fetchBooks()),
       fetchBook: (bookId) =>dispatch(fetchBook(bookId))
    })
}

export default connect(mSTP, mDTP)(NavBarHome);