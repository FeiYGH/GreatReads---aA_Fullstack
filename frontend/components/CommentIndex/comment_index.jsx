import React from 'react';
import {Link} from 'react-router-dom';
import CommentItemContainer from '../Comment/comment_item_container';


class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            closed:true,
            comments:false,
            viewComments:false,
            fullForm:false,
            updatingComments:false,
            comment:"",
            user_id: this.props.sessionId,
            review_id: this.props.reviewId
        };
        this.updateForm=this.updateForm.bind(this);
        this.toggleCommentContainer= this.toggleCommentContainer.bind(this);
        this.openFormContaniner = this.openFormContainer.bind(this);
        this.toggleViewAllComments = this.toggleViewAllComments.bind(this);
        this.createComment = this.createComment.bind(this);
        this.writeCommentContainer = this.writeCommentContainer.bind(this);

    }

    updateForm(field){
        // debugger;
        return(e) => this.setState({[field]:e.target.value});
    }

    openFormContainer(){
        this.setState({fullForm:true});
    }

    writeCommentContainer(){
        this.setState({fullForm:true});
    }
    toggleViewAllComments(){
        if(this.state.viewComments===false){
            this.setState({viewComments:true});
        }else{
            this.setState({viewComments:false});
        }
    }


    toggleCommentContainer(){
        if (this.state.comments===false){
            this.setState({comments:true});
        }else{
            this.setState({comments:false});
        }
        
    }

    // componentDidMount(){
    //     debugger;
    //     this.props.fetchReviewComments(this.props.reviewId);
    // }

    createComment(comment){
        debugger;
        this.props.createComment(this.props.reviewId, comment)
            // .then(this.props.fetchReviewForComments(this.props.reviewId))
            .then(this.props.handleCommentUpdate());
        this.setState({fullForm:false})
        this.setState({viewComments:true})
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.book.id !==this.props.book.id){
    //         this.props.fetchReviewComments(this.props.reviewId);

    //     }
    // }

    render(){
        const {sessionId,reviewId,reviewAuthor} = this.props;
        let allComments;
        let commentCount = 0;
        // debugger;
        console.log("ALL COMMENTS");
        console.log("REVIEW ID");
        console.log(reviewId);
        console.log("BOOK NAME")
        console.log(this.props.book.title);
        console.log("HOW MANY COMMENTS");
        console.log(Object.values(this.props.review.comments).length);

        // debugger;
        debugger;


        let longComment=false
        if(this.props.review){
            allComments = Object.values(this.props.review.comments).map(comment =>{
                debugger;
                if(comment.review_id===reviewId){
                    commentCount+=1;
                    if(comment.comment.length > 150){
                        longComment=true;
                    }
                    return(
                        <CommentItemContainer
                            comment={comment}
                            sessionId={sessionId}
                            reviewId={reviewId}
                            reviewAuthor={reviewAuthor}
                            handleCommentUpdate={this.props.handleCommentUpdate}
                            longComment={longComment}
                        />
                    )   
                }
                 
            });
        }  

        if(this.props.review){
                if(commentCount===0 && this.state.comments===false){
                    return(
                        
                    <div className="commentIndexContainer">
                        <h1 className="commentIndexContainer"> <span onClick={()=>this.toggleCommentContainer()}>no comments </span><span className="blackDot">&nbsp;·&nbsp;</span> <span onClick={()=>this.toggleCommentContainer()}>write a comment</span></h1>
                    </div>
                         
                    )
                }else if(commentCount===0 && this.state.comments===true){
                    return(
                    <div className="commentIndexContainer">
                        <h1 className="commentIndexContainer"> <span onClick={()=>this.toggleCommentContainer()}>no comments </span><span className="blackDot">&nbsp;·&nbsp;</span><span onClick={()=>this.toggleCommentContainer()}>write a comment</span></h1>
                        <div className="row wholeCommentForm">
                            <div className="col-comments">
                                <div className="col-profilePicComment"      id="defaultProfilePic">
                                        <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                                </div>
                                <div className="col-commentFormFull commentItemTextAreaDiv">
                                    <form className="commentItemTextAreaDivForm">
                                    <textarea className="commentItemTextArea" placeholder="Write a comment..." rows="5" cols="30" value={this.state.comment} onChange={this.updateForm("comment")}/>
                                    <button className="commentButton"onClick={()=>this.createComment(this.state)}>Comment</button>
                                    </form>
                                </div>
                            </div>
                                
                        </div>
                    </div>)
                }
                
                if(this.state.comments===false){
                    return(
                        <div>
                            <h1 className="commentIndexContainer"> <span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span><span className="blackDot">&nbsp;·&nbsp;</span> <span onClick={()=>this.toggleCommentContainer()}>write a comment</span></h1>
                        </div>
                    )
                }else if(this.state.comments===true && this.state.viewComments===false && this.state.fullForm===false){
                    return(
                        <div className="commentIndexContainer">
                            <h1 className="commentIndexContainer"><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span></h1>

                            <div className="row wholeCommentForm">  
                                <div className="col-comments">
                                    <div className="row commentItemRow">
                                        <h1 className="viewAllComments"><span onClick={()=>this.toggleViewAllComments()}>View all {commentCount} comments</span></h1>
                                    </div>
                                    <div className="row commentItemRow">
                                        <form className="inputWriteCommentPHForm">
                                            <input className="inputWriteCommentPH" onClick={()=>this.openFormContainer()} placeholder="Write a comment..." type="text"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                          
                            
                        </div>
                    )
            }else if(this.state.comments===true && this.state.viewComments===false && this.state.fullForm===true){
                return(
                    
                    <div className="commentIndexContainer">
                    
                        <h1 className="commentIndexContainer"><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span></h1>

                        
                        {/* <h1><span onClick={()=>this.toggleViewAllComments()}>View all {commentCount} comments</span></h1> */}
                        <div className="row wholeCommentForm">
                            <div className="col-comments">
                                        <div className="row commentItemRow">
                                            <h1 className="viewAllComments"><span onClick={()=>this.toggleViewAllComments()}>View all {commentCount} comments</span></h1>
                                        </div>
                                        <div className="row commentItemRow">
                                            <div className="col-profilePicComment"      id="defaultProfilePic">
                                                <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                                            </div>
                                            <div className="col-commentFormFull commentItemTextAreaDiv">
                                                <form className="commentItemTextAreaDivForm">
                                                <textarea className="commentItemTextArea" placeholder="Write a comment..." rows="5" cols="30" value={this.state.comment} onChange={this.updateForm("comment")}/>
                                                <button className="commentButton"onClick={()=>this.createComment(this.state)}>Comment</button>
                                                </form>
                                            </div>
                                        </div>
                                
                            </div>
                                
                        </div>
                    </div>
                )
    
            }else if(this.state.comments===true && this.state.viewComments===true && this.state.fullForm===false){
                return(
                    <div className="commentIndexContainer">

                        <h1 className="commentIndexContainer"><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span><span className="blackDot">&nbsp;·&nbsp;</span> <span onClick={()=>this.toggleViewAllComments()}>Hide comments</span></h1>
                        
                        <div className="row wholeCommentForm"> 
                            <div className="col-comments">  
                                <div className="row commentItemRow">
                                    {allComments}
                                </div>
                                <div className="row commentItemRow">
                                    <form onClick={()=>this.openFormContainer()} className="inputWriteCommentPHForm">
                                        <input className="inputWriteCommentPH" onClick={()=>this.openFormContainer()} placeholder="Write a comment..." type="text"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        {/* <form onClick={()=>this.openFormContainer()}> 
                            <input placeholder="Write a comment..." type="text"></input>
                        </form> */}
    
                    </div>
                )
            }else if(this.state.comments===true && this.state.viewComments===true && this.state.fullForm===true){
                return(
                    <div className="commentIndexContainer">
                        <h1 className="commentIndexContainer"><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span><span className="blackDot">&nbsp;·&nbsp;</span><span onClick={()=>this.toggleViewAllComments()}>Hide comments</span></h1>
                        <div className="row wholeCommentForm"> 
                            <div className="col-comments">  
                                <div className="row commentItemRow">
                                    {allComments}
                                </div>
                                <div className="row commentItemRow">
                                            <div className="col-profilePicComment"      id="defaultProfilePic">
                                                <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                                            </div>
                                            <div className="col-commentFormFull commentItemTextAreaDiv">
                                                <form className="commentItemTextAreaDivForm">
                                                <textarea className="commentItemTextArea" placeholder="Write a comment..." rows="5" cols="30" value={this.state.comment} onChange={this.updateForm("comment")}/>
                                                <button className="commentButton"onClick={()=>this.createComment(this.state)}>Comment</button>
                                                </form>
                                            </div>
                                        </div>

                            </div>
                        </div>
                       
    
                    </div>)
            }
        }else{
            return(
                <div>NO COMMENTS</div>
            )
        }
        
       
    }


}

export default CommentIndex;