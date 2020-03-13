import React from 'react';
import {Link} from 'react-router-dom';
import ReviewItemContainer from '../Review/review_item_container';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        // debugger;
        this.props.fetchReviews(this.props.bookId);
    }

    render(){
        const {reviews,user,fetchReviews} = this.props;
        // const reviewsArr = Object.values(reviews);
        // console.log(reviews);
        // console.log(reviewsArr);

        // debugger;
        const reviewItems = Object.values(reviews).map((review)=>{
            // let prop = review[idx+1] ? review[idx+1].id : ""
            // debugger;
            return(
                <ReviewItemContainer
                    review={review}
                    reviewId={review.id}
                    // reviewId={prop}
                    user={user}
                />
            );
        });
        if(!user){
            return(
                <div className="col-6">
                <h2>Login to start your review of {this.props.book.title}</h2> 
                {reviewItems}
            </div>
            )    
        }else{
            return(
            
                <div className="col-12 allReviews">
                    <div>
                        <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                    </div>
                    {reviewItems}
                </div>
            )
        }
        
    }
}

export default ReviewIndex;

