import {connect} from 'react-redux';
import Book from './book';
import {fetchBooks,fetchBook} from '../../actions/book_actions';
//fetchReviewsUser is to fetch all reviews by a particular user
import {fetchReviewsUser, updateReview} from '../../actions/review_actions';

const mSTP = (state,ownProps) => {
    // debugger;
    return({
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        userReviews: state.entities.userReviews,
        sessionId:state.sessions.id,
        reviews:state.entities.reviews
    });
};

const mDTP = dispatch => {
    return({
        fetchBook: (bookId) =>dispatch(fetchBook(bookId)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId)),
        updateReview: (bookId,review) =>dispatch(updateReview(bookId,review))
        // fetchBooks: () => dispatch(fetchBooks())
    });
};


export default connect(mSTP, mDTP)(Book);