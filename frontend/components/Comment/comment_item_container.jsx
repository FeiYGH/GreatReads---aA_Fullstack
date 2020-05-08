import {connect} from 'react-redux';
import CommentItem from '../Comment/comment_item';
import {deleteComment,updateComment} from '../../actions/comment_actions';
import { updateReview } from '../../util/review_api_util';


const mSTP = (state, ownProps) => {
    return({
        sessionId:state.sessions.id
    });
};

const mDTP = dispatch => {
    return({
        deleteComment: (reviewId,commentId) => dispatch(deleteComment(reviewId,commentId)),
        updateComment: (reviewId,commentId) => dispatch(updateReview(reviewId,commentId))
    });
};

export default connect(mSTP, mDTP)(CommentItem);