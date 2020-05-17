import {connect} from 'react-redux';
import MyReviewForBook from './my_review_for_book';
import {createReview, fetchReviewsUser,updateReview} from '../../actions/review_actions';
import {fetchBook} from '../../actions/book_actions';
import {fetchBookPageBookshelf} from '../../actions/bookshelf_actions';

const mSTP = (state,ownProps)=> {
    return({
        sessionId: state.sessions.id,
        currentUser: state.entities.users[state.sessions.id],
        userReviews: state.entities.userReviews,
        errors: state.errors.review_errors,
        loggedIn: !!state.sessions.id,
        bookshelf: state.entities.bookshelves[ownProps.bookId]        

        
    })
}

const mDTP = dispatch => {
    return({
        createReview: (bookId, review) => dispatch(createReview(bookId,review)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId)),
        updateReview: (reviewId, review) => dispatch(updateReview(reviewId,review)),
        fetchBookshelf: (bookshelfId) => dispatch(fetchBookPageBookshelf(bookshelfId)), 
        

    });
};

export default connect(mSTP, mDTP)(MyReviewForBook);