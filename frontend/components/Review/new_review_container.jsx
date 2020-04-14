import {connect} from 'react-redux';
import NewReview from './new_review';
import {createReview} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';

const mSTP = (state,ownProps)=> {
    return({
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id]
    })
}

const mDTP = dispatch => {
    return({
        createReview: (bookId, review) => dispatch(createReview(bookId,review)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId))
    });
};

export default connect(mSTP, mDTP)(NewReview);