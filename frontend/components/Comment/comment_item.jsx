import React from 'react';
import {Link} from 'react-router-dom';


class CommentItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const {comment, reviewAuthor} = this.props;
        const loggedInUserId = this.props.sessionId ? this.props.sessionId : "";
        let month, day, year, hours, minutes, seconds;
        if(comment){
            let dateObj = new Date(comment.created_at);
            month = dateObj.getMonth() + 1;
            day = dateObj.getDate();
            year = dateObj.getFullYear();
            hours = dateObj.getHours();
            minutes = dateObj.getMinutes();
            seconds = dateObj.getSeconds();
        }
        
        // debugger;

        if(comment){
            if(loggedInUserId===comment.user_id){
                return(
                    <div>
                        <div className="row">
                            <div className="col-profilePic" id="defaultProfilePic">
                                <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                            </div>
                            <div className="col-profileMsg" id="RevIndexMsg">
                                <div className="row">
                                    {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                    <span>{reviewAuthor.username}</span><span>{comment.comment}</span>

                                </div>
                                <div className="row">
                                {/* <span>{comment.created_at}</span><span>delete</span> */}
                                <span>{month},{day},{year}, {hours}:{minutes}.{seconds}</span>
                                
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
                                <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
    
                            </div>
                            <div className="col-profileMsg" id="RevIndexMsg">
                                <div className="row">
                                    {/* <span>{comment.author.username}</span><span>{comment.comment}</span> */}
                                    <span>{reviewAuthor.username}</span><span>{comment.comment}</span>

                                </div>
                                <div className="row">
                                <span>{month},{day},{year}, {hours}:{minutes}.{seconds}</span>
                                </div>
    
                            </div>
    
                        </div>
                    </div>
                    
                )
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