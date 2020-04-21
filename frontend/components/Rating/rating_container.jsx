import {connect} from 'react-redux';
import Rating from './rating';

import {createReview,updateReview, fetchReviewsUser} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';


const mSTP = (state,ownProps)=> {
    return({
        // bookId: ownProps.match.params.bookId,
        // book: state.entities.books[ownProps.match.params.bookId],
        sessionId: state.sessions.id,
        userReviews: state.entities.userReviews
        // currentUser: state.entities.users[state.sessions.id]
    })
}

const mDTP = dispatch => {
    // debugger;
    return({
        createReview: (bookId, review) => dispatch(createReview(bookId,review)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        updateReview: (reviewId, review) => dispatch(updateReview(reviewId,review)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId))
    });
};

export default connect(mSTP, mDTP)(Rating);