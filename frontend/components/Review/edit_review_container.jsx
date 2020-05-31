import {connect} from 'react-redux';
import EditReview from './edit_review';
import {createReview, fetchReviewsUser,updateReview} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';
import {incrementUpdatedReviewsFlag} from '../../actions/review_actions';

const mSTP = (state,ownProps)=> {
    return({
        bookId: ownProps.match.params.bookId,
        book: state.entities.books[ownProps.match.params.bookId],
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],
        userReviews: state.entities.userReviews,
        errors: state.errors.review_errors
        
    })
}

const mDTP = dispatch => {
    return({
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId)),
        updateReview: (reviewId, review) => dispatch(updateReview(reviewId,review)),
        incrementUpdatedReviewsCountFlag: () => dispatch(incrementUpdatedReviewsFlag())
    });
};

export default connect(mSTP, mDTP)(EditReview);