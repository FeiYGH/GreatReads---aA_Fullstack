import {connect} from 'react-redux';
import CommentItem from '../Comment/comment_item';
import {fetchComment ,deleteComment,updateComment} from '../../actions/comment_actions';



const mSTP = (state, ownProps) => {
    // debugger;
    return({

        sessionId:state.sessions.id,
        currComment: state.entities.comments[ownProps.comment.id]
        // user: state.entities.users[state.sessions.id]
    });
};

const mDTP = dispatch => {
    return({
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        updateComment: (reviewId,commentId) => dispatch(updateReview(reviewId,commentId)),
        fetchComment: (commentId) =>dispatch(fetchComment(commentId))
    });
};

export default connect(mSTP, mDTP)(CommentItem);