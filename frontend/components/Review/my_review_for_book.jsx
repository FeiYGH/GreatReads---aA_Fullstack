import React from 'react';
import {Link} from 'react-router-dom';
import RatingContainer from '../Rating/rating_container';

class MyReviewForBook extends React.Component{
    constructor(props){
        // debugger;
        super(props);
        this.state={
            sessionId: props.sessionId,
            ratingUpdated: false
        }
        this.pullUserReview = this.pullUserReview.bind(this);
        this.handleRatingUpdateMyReview = this.handleRatingUpdateMyReview.bind(this);
    }

    componentDidMount(){
        if(this.state.sessionId){
            this.props.fetchReviewsUser(this.state.sessionId);
        }
    }

    pullUserReview(){
        let myReview;
        if(this.state.sessionId){
            myReview = Object.values(this.props.userReviews).find(review =>
                (review.book_id === parseInt(this.props.bookId,10) && review.user_id === this.state.sessionId));

                // review.book_id === parseInt(this.props.bookId,10));
        }
        // debugger;
        // console.log("INSIDE NEW REVIEW");
        // console.log(myReview);
        return myReview;
    }

    handleRatingUpdateMyReview(){
        this.setState({ratingUpdated: true})
        .then(
            this.props.fetchReviewsUser(this.state.sessionId)
        );
    }

    render(){
        // debugger;
        const {loggedIn} = this.props;
        let myReview = this.pullUserReview();

        // debugger;
        if(!loggedIn){
            return(
                <div>
                    <h2>Please login to see your activity</h2> 
                </div>
            )
        }else if(!myReview){
            return(
                <div>
                    <h2>You have not written a review for this book. </h2>
                    <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>

                </div>
            )
        }else if(myReview && (myReview.title===null || myReview.title==="") && (myReview.body ===null || myReview.body==="")){
            return(
                <div>
                    <RatingContainer 
                        // myReview={myReview}
                        myReview={myReview===undefined ? {rating:0} : myReview}
                        handleRatingUpMyReview={this.handleRatingUpdateMyReview}
                        bookId={this.props.bookId}
                        // loggedIn={this.props.loggedIn} 
                        // updateReview={this.props.updateReview}
                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                    />
                    THANK YOU FOR Rating
                    PLEASE REVIEW
                    <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>
                </div>
            )
        }else if(myReview){
            console.log("INSIDE MY ACCOUNT INFO")
            return(
                <div>   
                    <h2>{myReview.title}</h2>
                  
                    <RatingContainer 
                        // myReview={myReview}
                        myReview={myReview===undefined ? {rating:0} : myReview}

                        bookId={this.props.bookId}
                        // loggedIn={this.props.loggedIn} 
                        // updateReview={this.props.updateReview}
                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                    />
                    <h2>{myReview.body}</h2>
                    <Link to={`/books/${this.props.bookId}/review/edit`}>Edit Review</Link>
                </div>
            )
        }else{
            return(
                <div>
                    <h2>You have not written a review for this book. </h2>
                </div>
            )
        }
    }


}

export default MyReviewForBook;