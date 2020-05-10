import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../CommentIndex/comment_index_container';

class ReviewItem extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
        this.state ={
            spoiler:props.review.spoiler,
            reveal:false
        };
        this.closeReview = this.closeReview.bind(this);
        this.openReview = this.openReview.bind(this);
        this.getMonthCommentItem = this.getMonthCommentItem.bind(this);
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

    closeReview(){
        this.setState({reveal:false});
    }


    openReview(){
        this.setState({reveal:true});
    }


    componentDidMount(){
        let reviewId = this.props.review ? this.props.review.id : "";
        this.props.fetchReview(reviewId);
        
        // if(reviewId !== ""){
        //     this.props.fetchReviewComments(reviewId);
        // }
        // this.props.fetchReview(this.props.review.id);
    }

    

    render(){
        const {review, user} = this.props;
        let reviewRatingPic;
        switch(review.rating){
            case 1:
                reviewRatingPic = (
                    <div className="staticStarsPic">
                        <span className="yellow">★</span><span className="grey">★★★★</span>
                    </div>
                )
                break;
            case 2: 
                reviewRatingPic = (
                    <div className="staticStarsPic">
                        <span className="yellow">★★</span><span className="grey">★★★</span>
                    </div>
                )
                break;
            case 3: 
                reviewRatingPic = (
                    <div className="staticStarsPic">
                        <span className="yellow">★★★</span><span className="grey">★★</span>
                    </div>
                )
                break;
            case 4:
                reviewRatingPic = (
                    <div className="staticStarsPic">
                        <span className="yellow">★★★★</span><span className="grey">★</span>
                    </div>
                )
                break;
            case 5:
                reviewRatingPic = (
                    <div className="staticStarsPic">
                        <span className="yellow">★★★★★</span>
                    </div>
                )
            break;
        }

       
        let month;
        let day;
        let year;
        if(review){
            let dateObj = new Date(review.created_at);
            month = this.getMonthCommentItem(dateObj);
            day = dateObj.getDate();
            year = dateObj.getFullYear();
             
        }


        // debugger;
        if(!review){
            return null;
        }else if(review.title==="" && review.body===""){
            return(
                <div></div>
            )
        }else if(this.state.spoiler){
            if(this.state.reveal===false){
                return(
                    <div>
                        <div className="reviewItem">
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePic">
                                    <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span><span className='reviewItemDate'>{month}&nbsp;{day},&nbsp;{year}</span></h2> 
                                        
                                    </div>
                                    <div className="row">
                                        <h2 className="reviewItemTitle">{review.title}</h2>
                                    </div>
                                </div>      
                            </div>
                    
                            <div className="reviewItemBottom">
                                <span className="hideSpoilers">This review has been hidden because it contains spoilers. To view it,<a className="closeSpoilerLink" onClick={this.openReview}>click here.</a>
                                </span> 
                            </div>
                        </div>
                        <div className="row">
                        <CommentIndexContainer 
                            review={review}
                            reviewId={review.id}
                            reviewAuthor={review.author}
                            book={this.props.book}
                            handleCommentUpdate={this.props.handleCommentUpdate}
                        />
                        </div>
                    </div>
                )
                // return(
                //     <div>
                //         <p>This review has been hidden because it contains spoilers. To view it, <button onClick={this.openReview}>click here</button></p>
                //     </div>
                // )   
            }else{
                // debugger;
                return(
                    <div>
                        <div className="reviewItem">
                            <div className="row">
                                <div className="col-profilePic" id="defaultProfilePic">
                                    <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                                </div>
                                <div className="col-profileMsg" id="RevIndexMsg">
                                    <div className="row">
                                        <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span><span className='reviewItemDate'>{month}&nbsp;{day},&nbsp;{year}</span></h2> 
                                        
                                    </div>
                                    <div className="row">
                                        <h2 className="reviewItemTitle">{review.title}</h2>
                                    </div>
                                </div>      
                            </div>
                    
                            <div className="reviewItemBottom">
                                <span className="hideSpoilers">This review contains spoilers. To hide it,<a className="closeSpoilerLink" onClick={this.closeReview}>click here.</a>
                                </span>
                                <h3 className="reviewItemContent">{review.body}</h3>    
                            </div>
                        </div>
                        <div className="row">
                        <CommentIndexContainer 
                            review={review}
                            reviewId={review.id}
                            reviewAuthor={review.author}
                            book={this.props.book}
                            handleCommentUpdate={this.props.handleCommentUpdate}
                        />
                        </div>
                    </div>
                )
            }    
        }else{
            // debugger;
            return(
                <div>
                    <div className="reviewItem">
                        <div className="row">
                            <div className="col-profilePic" id="defaultProfilePic">
                                <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                            </div>
                            <div className="col-profileMsg" id="RevIndexMsg">
                                <div className="row">
                                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span><span className='reviewItemDate'>{month}&nbsp;{day},&nbsp;{year}</span></h2> 
                                </div>
                                <div className="row">
                                    <h2 className="reviewItemTitle">{review.title}</h2>
                                </div>
                            </div>      
                        </div>
                
                        <div className="reviewItemBottom">
                            <h3 className="reviewItemContent">{review.body} </h3>  
                            
                            

                            {/* <h2>{new Intl.DateTimeFormat("en-GB",{month:"long", day: "2-digit", year: "numeric", hour: 'numeric', minute: 'numeric', second: 'numeric'}).format(review.created_at.toString())}</h2> */}
                            
                        </div>
                        
                    </div>
                    <div className="row">
                            <CommentIndexContainer 
                                review={review}
                                reviewId={review.id}
                                reviewAuthor={review.author}
                                book={this.props.book}
                                handleCommentUpdate={this.props.handleCommentUpdate}
                            />
                        </div>
                </div>
            )
        }
        
    }

}

export default ReviewItem;