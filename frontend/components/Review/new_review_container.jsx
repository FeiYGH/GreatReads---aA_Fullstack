import {connect} from 'react-redux';
import NewReview from './new_review';
import {createReview, fetchReviewsUser,updateReview} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';


const mSTP = (state,ownProps)=> {
    //debugger;
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
        createReview: (bookId, review) => dispatch(createReview(bookId,review)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId)),
        updateReview: (reviewId, review) => dispatch(updateReview(reviewId,review))
    });
};

export default connect(mSTP, mDTP)(NewReview);