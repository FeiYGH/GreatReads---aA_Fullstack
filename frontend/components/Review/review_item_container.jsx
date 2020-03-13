import {connect} from 'react-redux';
import ReviewItem from './review_item';
import {fetchReview} from '../../actions/review_actions';

// const mSTP = (state, ownProps) => {
//     return({

//     });
// };

const mDTP = dispatch => {
    return({
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
    });
};

export default connect(null, mDTP)(ReviewItem);