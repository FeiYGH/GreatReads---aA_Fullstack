import {connect} from 'react-redux';
import Book from './book';
import {fetchBooks,fetchBook} from '../../actions/book_actions';

const mSTP = (state,ownProps) => {
    // debugger;
    return({
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        sessionId: state.sessions.id
        
    });
};

const mDTP = dispatch => {
    return({
        fetchBook: (bookId) =>dispatch(fetchBook(bookId))
        // fetchBooks: () => dispatch(fetchBooks())
    });
};


export default connect(mSTP, mDTP)(Book);