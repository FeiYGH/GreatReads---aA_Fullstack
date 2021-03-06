import {connect} from 'react-redux';
import ReviewStats from  './review_stats';
import {fetchReviews, fetchReviewsUser} from '../../actions/review_actions';
const mSTP = (state,ownProps) => {
    // debugger;
    return({
        reviews: state.entities.reviews,
        user: state.entities.users[state.sessions.id],
        user_reviewed:false,
        userReviews:state.entities.userReviews
        //this will populate when user's just written review
        // new_user_review: state.session.newReview 
    });
};

const mDTP = dispatch => {
    return({
        fetchReviews: (bookId) => dispatch(fetchReviews(bookId)),
        fetchReviewsUser: (userId) => dispatch(fetchReviewsUser(userId)),
    });
};

export default connect(mSTP, mDTP)(ReviewStats);