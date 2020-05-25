import React from 'react';
import {Link} from 'react-router-dom';


class CommentItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            longComment:this.props.longComment,
            fullLength:false
        }

        this.getMonthCommentItem = this.getMonthCommentItem.bind(this);
        this.getTimeCommentItem  = this.getTimeCommentItem.bind(this);
        this.deleteCommentItem = this.deleteCommentItem.bind(this);
        this.toggleViewFullComment = this.toggleViewFullComment.bind(this);
    }


    toggleViewFullComment(){
        if(this.state.fullLength===false){
            this.setState({fullLength:true})
        }else{
            this.setState({fullLength:false})
        }
    }

    deleteCommentItem(commentId){
        this.props.deleteComment(commentId)
            .then(this.props.handleCommentUpdate());
        
    }

    getMonthCommentItem(dateObj){
        let month = dateObj.getMonth() + 1;
        switch(month){
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3: 
                return "March";
            case 4: 
                return "April";
            case 5: 
                return "May";
            case 6: 
                return "June";
            case 7: 
                return "July";
            case 8: 
                return "Aug";
            case 9:
                return "Sept";
            case 10: 
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "didn't work";

        }    
    }



    getTimeCommentItem(dateObj){
        let timeOfDay = "AM";
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let seconds = dateObj.getSeconds();
        let timeStr = "";
        if(hours===12 && minutes===0 && seconds===0){
            timeOfDay= "Noon";
        }else if(hours ===24 && minutes === 0 && seconds===0){
            timeOfDay="Midnight";
        }else if(hours>11){
            timeOfDay="PM";
        }
        if(hours > 12){
            hours = hours - 12;
        }
        if(minutes < 10){
            minutes = "0" + minutes.toString();
        }else{
            minutes = minutes.toString();
        }

        if(seconds <10){
            seconds = "0" + seconds.toString();
        }else{
            seconds = seconds.toString();
        }
        timeStr = hours.toString() + ":" + minutes + timeOfDay;
        return timeStr;
    }

    componentDidMount(){
        this.props.fetchComment(this.props.comment.id);
    }


    render(){
        const {comment, reviewAuthor} = this.props;
        const loggedInUserId = this.props.sessionId ? this.props.sessionId : "";
        let month, day, year, hours, minutes, seconds;
        let timeStr;
        if(comment){
            let dateObj = new Date(comment.created_at);
            month = this.getMonthCommentItem(dateObj);
            day = dateObj.getDate();
            year = dateObj.getFullYear();
            hours = dateObj.getHours();
            minutes = dateObj.getMinutes();
            seconds = dateObj.getSeconds();
            timeStr = this.getTimeCommentItem(dateObj);
            
        }
        
        // debugger;

        //Setting the profile picture of the commenter
        let profilePic;
        let commentAuthor;
        if(this.props.currComment){
            if(this.props.currComment.photoUrl){
                profilePic = this.props.currComment.photoUrl;
            }else{
                profilePic = "https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png";

            }
            commentAuthor=this.props.currComment.author.username;
        }else{
            commentAuthor="loading";
        }

        let tempComment;
        if(comment){
            // console.log("LONGCOMMENT");
            // console.log(this.props.longComment);
            // console.log("STATE FULLCOMMENT");
            // console.log(this.state.fullLength);

            //changing the length of the comment to not go over 150
            // debugger;
            if(this.props.longComment===true){
                if(this.state.fullLength===false){
                    tempComment=comment.comment.slice(0,150);
                }else if(this.state.fullLength===true){
                    tempComment=comment.comment;
                }
            }else{
                tempComment=comment.comment;
            }

            let prompt = "";
            if(this.props.longComment=== true && this.state.fullLength===false){
                prompt = "...more";
            }else{
                prompt = '(less)';
            }

            

            
            
            // console.log("TEMPCOMMENT");
            // console.log(tempComment);
            // console.log("PROMPT");
            // console.log(prompt);
        
            // debugger;
            if(loggedInUserId===comment.user_id){
                if(this.props.longComment===true){
                    return(
                        <div>
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePicComment">
                                    <img  id="defaultProfileImg" src={profilePic} alt="default profile pic"/>
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                                        {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                        <span className="reviewAuthorUsernameComment">{commentAuthor}</span><span className="tempComment">{tempComment}</span><span className="prompt" onClick={()=>this.toggleViewFullComment()}>{prompt}</span>
    
                                    </div>
                                    <div className="row">
                                        <span className="commentTime">{month}&nbsp;{day},&nbsp;{year}&nbsp;{timeStr}</span>
                                        {/* {hours}:{minutes}</span> */}<span className="blackDot">&nbsp;·&nbsp;</span>
                                        <span className="commentDelete" onClick={()=>this.deleteCommentItem(comment.id)}>delete</span>
                                    </div>
        
                                </div>
        
                            </div>
                        </div>
                        
                    )
                }else{
                    return(
                        <div>
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePic">
                                    <img  id="defaultProfileImg" src={profilePic} alt="default profile pic"/>
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                                        {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                        <span className="reviewAuthorUsernameComment">{commentAuthor}</span><span className="tempComment">{tempComment}</span>
    
                                    </div>
                                    <div className="row">
                                    {/* <span>{comment.created_at}</span><span>delete</span> */}
                                    <span className="commentTime">{month}&nbsp;{day},&nbsp;{year}&nbsp;{timeStr}</span>
                                    {/* {hours}:{minutes}</span> */}<span className="blackDot">&nbsp;·&nbsp;</span>
                                    <span className="commentDelete" onClick={()=>this.deleteCommentItem(comment.id)}>delete</span>
                                    </div>
                                    
        
                                </div>
        
                            </div>
                        </div>      
                    )
                }
                
            }else{
                if(this.props.longComment===true){
                    return(
                        <div>
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePic">
                                    <img  id="defaultProfileImg" src={profilePic} alt="default profile pic"/>
        
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                                        {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                        <span className="reviewAuthorUsernameComment">{commentAuthor}</span><span className="tempComment">{tempComment}</span><span className="prompt" onClick={()=>this.toggleViewFullComment()}>{prompt}</span>
    
                                    </div>
                                    <div className="row">
                                    <span className="commentTime">{month}&nbsp;{day},&nbsp;{year}&nbsp;{timeStr}</span>
                                    {/* {hours}:{minutes}</span> */}
                                    </div>
        
                                </div>
        
                            </div>
                        </div>
                        
                    )
                }else{
                    return(
                        <div>
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePicComment">
                                    <img  id="defaultProfileImg" src={profilePic} alt="default profile pic"/>
        
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                                        {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                        <span className="reviewAuthorUsernameComment">{commentAuthor}</span><span className="tempComment">{tempComment}</span>
    
                                    </div>
                                    <div className="row">
                                    <span className="commentTime">{month}&nbsp;{day},&nbsp;{year}&nbsp;{timeStr}</span>
                                    {/* {hours}:{minutes}</span> */}
                                    </div>
        
                                </div>
        
                            </div>
                        </div>
                        
                    )   
                }
                
            }

        }else{
            return(
                <div>

                </div>
            )
        }
       
        
    }



}

export default CommentItem;