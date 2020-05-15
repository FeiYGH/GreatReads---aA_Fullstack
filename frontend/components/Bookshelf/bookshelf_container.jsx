import {connect} from 'react-redux';
import Bookshelf from './bookshelf';
import {fetchBook} from '../../actions/book_actions';
import {fetchBookPageBookshelf, createBookshelf, editBookshelf} from '../../actions/bookshelf_actions';
import {getUser} from '../../actions/user_actions';

const mSTP = (state,ownProps) => {
    // debugger;
    return({
        book: state.entities.books[ownProps.bookId], //for profile show page
        sessionId:state.sessions.id,
        user: state.entities.users[state.sessions.id],
        bookshelf: state.entities.bookshelves[ownProps.bookId]        
    });
};

const mDTP = dispatch => {
    return({
        fetchBook: (bookId) =>dispatch(fetchBook(bookId)),
        fetchBookshelf: (bookshelfId) => dispatch(fetchBookPageBookshelf(bookshelfId)), 
        getUser: (userId) => dispatch(getUser(userId)),
        createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
        editBookshelf: (bookshelfId, bookshelf) => dispatch(editBookshelf(bookshelfId,bookshelf))
    
    });
};


export default connect(mSTP, mDTP)(Bookshelf);