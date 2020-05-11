import {RECEIVE_COMMENT, RECEIVE_REVIEW_COMMENTS, RECEIVE_USER_COMMENTS, DELETE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action)=> {
    Object.freeze({},state);
    let nextState= Object.assign({},state);
    switch(action.type){
        case RECEIVE_REVIEW_COMMENTS:
            // console.log(action.comments);
            // debugger;
            return Object.assign({},state,action.comments);
            // return Object.assign({}, state, {[Object.values(action.comments)[0].review_id]: action.comments});

        case RECEIVE_COMMENT:          
            // debugger;
            return Object.assign({},state,{[action.comment.id]:action.comment});
        case DELETE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }

}


export default commentsReducer;