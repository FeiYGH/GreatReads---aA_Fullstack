import {connect} from 'react-redux';
import ReviewItem from './review_item';
import {fetchReview} from '../../actions/review_actions';
import {fetchReviewComments} from '../../actions/comment_actions';

// const mSTP = (state, ownProps) => {
//     return({
//         reviewProps: state.entities.reviews[this.props.review.id]
//     });
// };

const mDTP = dispatch => {
    return({
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchReviewComments: (reviewId) => dispatch(fetchReviewComments(reviewId))
    });
};

export default connect(null, mDTP)(ReviewItem);