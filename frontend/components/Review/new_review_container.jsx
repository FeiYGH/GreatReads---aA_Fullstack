import {connect} from 'react-redux';
import NewReview from './new_review';
import {createReview} from '../../actions/review_actions';

const mSTP = (state,ownProps){
    return({
        bookId: ownProps.match.params.bookId
    })
}

const mDTP = dispatch => {
    return({
        createReview: (bookId, review) => dispatch(createReview(bookId,review))
    });
};

export default connect(mSTP, mDTP)(NewReview);