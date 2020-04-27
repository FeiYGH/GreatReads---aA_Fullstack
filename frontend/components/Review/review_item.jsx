import React from 'react';
import {Link} from 'react-router-dom';


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
    }

    closeReview(){
        this.setState({reveal:false});
    }


    openReview(){
        this.setState({reveal:true});
    }


    componentDidMount(){
        let review = this.props.review ? this.props.review.id : "";
        this.props.fetchReview(review);
        // this.props.fetchReview(this.props.review.id);
    }

    

    render(){
        const {review, user} = this.props;
        let reviewRatingPic
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
                                        <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span></h2> 
                                        
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
                                        <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span></h2> 
                                        
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
                    </div>
                )
            }    
        }else{
            // debugger;
            return(
                <div className="reviewItem">
                    <div className="row">
                        <div className="col-profilePic" id="defaultProfilePic">
                            <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                        </div>
                        <div className="col-profileMsg" id="RevIndexMsg">
                            <div className="row">
                                <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{review.author.username}</span><span id="tellUserReview"> rated it {reviewRatingPic}</span></h2> 
                            </div>
                            <div className="row">
                                <h2 className="reviewItemTitle">{review.title}</h2>
                            </div>
                        </div>      
                    </div>
               
                    <div className="reviewItemBottom">
                        <h3 className="reviewItemContent">{review.body}</h3>    
                    </div>
                </div>
            )
            // return(
            //     <div>
                   
            //         <div className="reviewItem">
                
            //         {reviewRatingPic}
            //         <h2>{review.rating}</h2>
                    
            //         <h2 className="reviewItemAuthor">{review.author.username}</h2>
            //         <h2 className="reviewItemTitle">{review.title}</h2>
            //         <h3 className="reviewItemContent">{review.body}</h3>
            //     </div>
            //     </div>
                
            // )
        }
        
    }

}

export default ReviewItem;