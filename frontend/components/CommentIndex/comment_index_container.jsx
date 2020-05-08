import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {fetchReviewComments,fetchUserComments, createComment} from '../../actions/comment_actions';
import {fetchReviewForComments} from '../../actions/review_actions'

const mSTP = (state,ownProps) => {
    return({
        sessionId: state.sessions.id,
        comments: state.entities.comments,
        fetchedReviewForComments: state.entities.reviews.fetchedReviewForComments
    })
    
};

const mDTP = dispatch => {
    return({
        fetchReviewComments: (reviewId) => dispatch(fetchReviewComments(reviewId)),
        createComment: (reviewId,comment) => dispatch(createComment(reviewId,comment)),
        fetchReviewForComments: (reviewId) => dispatch(fetchReviewForComments(reviewId))
        
    });
   
};  


export default connect(mSTP,mDTP)(CommentIndex);
