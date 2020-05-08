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
            user_id: this.props.reviewAuthor.id,
            review_id: this.props.reviewId
        };
        this.updateForm=this.updateForm.bind(this);
        this.toggleCommentContainer= this.toggleCommentContainer.bind(this);
        this.openFormContaniner = this.openFormContainer.bind(this);
        this.viewAllComments = this.viewAllComments.bind(this);
        this.createComment = this.createComment.bind(this);

    }

    updateForm(field){
        // debugger;
        return(e) => this.setState({[field]:e.target.value});
    }

    openFormContainer(){
        this.setState({fullForm:true});
    }

    viewAllComments(){
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


        if(this.props.review){
            allComments = Object.values(this.props.review.comments).map(comment =>{
                debugger;
                if(comment.review_id===reviewId){
                    commentCount+=1;
                    return(
                        <CommentItemContainer
                            comment={comment}
                            sessionId={sessionId}
                            reviewId={reviewId}
                            reviewAuthor={reviewAuthor}
                        />
                    ) 
                }
                 
            });
        }

        // if(this.props.fetchedReviewForComments){
        //     allComments.push(
        //         <CommentItemContainer
        //             comment={this.props.fetchedReviewForComments}
        //             sessionId={sessionId}
        //             reviewId={reviewId}
        //             reviewAuthor={reviewAuthor}
        //         />
        //     )
        // }


        // let comments;
        // if(this.props.fetchedReviewForComments){
        //     comments = this.state.fetchedReviewForComments.comments;
        // }else if(this.props.review){
        //     comments=this.props.review.comments;
        // }


        // if(this.props.review || this.props.fetchedReviewForComments){
        //     // allComments = this.props.review.comments.map(comment =>{
            
        //     allComments = comments.map(comment =>{
        //         debugger;
        //         if(comment.review_id===reviewId){
        //             commentCount+=1;
        //             debugger;
        //             return(
        //                 <CommentItemContainer
        //                     comment={comment}
        //                     sessionId={sessionId}
        //                     reviewId={reviewId}
        //                     reviewAuthor={reviewAuthor}
        //                 />
        //             ) 
        //         }
                 
        //     });
        // }

       

        if(this.props.review){
            if(this.state.comments===false ){
                return(
                    <div>
                        <h1> <span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span>&nbsp;·&nbsp; <span>write a comment</span></h1>
                    </div>
                )
            }else if(this.state.comments===true && this.state.viewComments===false && this.state.fullForm===false){
                return(
                    <div>
                        <h1><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span>&nbsp;·&nbsp; </h1>
                        <h1><span onClick={()=>this.viewAllComments()}>View all {commentCount} comments</span></h1>
                        <form>
                            <input onClick={()=>this.openFormContainer()} placeholder="Write a comment..." type="text"></input>
                        </form>
    
                    </div>
                )
            }else if(this.state.comments===true && this.state.viewComments===false && this.state.fullForm===true){
                return(
                    <div>
                        <h1><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span>&nbsp;·&nbsp; </h1>
                        <h1><span onClick={()=>this.viewAllComments()}>View all {commentCount} comments</span></h1>
                        <div className="row">
                            <div className="col-2">PIC</div>
                            <div className="col-10">
                                <form>
                                <textarea placeholder="Write a comment..." rows="10" cols="50" value={this.state.comment} onChange={this.updateForm("comment")}/>
                                <button onClick={()=>this.createComment(this.state)}>Comment</button>
                                </form>
                            </div>
    
                        </div>
                       
    
                    </div>
                )
    
            }else if(this.state.comments===true && this.state.viewComments===true && this.state.fullForm===false){
                return(
                    <div>
                        <h1><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span>&nbsp;·&nbsp; </h1>                   
                        {allComments}
                        <form onClick={()=>this.openFormContainer()}> 
                            <input placeholder="Write a comment..." type="text"></input>
                        </form>
    
                    </div>
                )
            }else if(this.state.comments===true && this.state.viewComments===true && this.state.fullForm===true){
                return(
                    <div>
                        <h1><span onClick={()=>this.toggleCommentContainer()}>{commentCount} comments </span>&nbsp;·&nbsp; <span>write a comment</span></h1>
                        <div className="row">
                            <div className="col-2">PIC</div>
                            {allComments}
                            <div className="col-10">
                                <form>
                                <textarea placeholder="Write a comment..." rows="10" cols="50" value={this.state.comment} onChange={this.updateForm("comment")}/>
                                <button onClick={()=>this.createComment(this.state)}>Comment</button>
                                </form>
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