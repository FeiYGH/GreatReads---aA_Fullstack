import React from 'react';
import {Link} from 'react-router-dom';
import ReviewItemContainer from '../Review/review_item_container';
import {withRouter} from 'react-router-dom';
import RatingContainer from '../Rating/rating_container';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            book:props.book,
            bookId: props.bookId,
            session_user_reviewed: false,
            loggedIn: !!props.user,
        }

        this.writeReview = this.writeReview.bind(this);
        this.pullUserReview = this.pullUserReview.bind(this);
    }

    writeReview(){
        // debugger;
        this.props.history.push(`/books/review/${this.props.bookId}/new`);
        // this.props.history.push('/books')
    }

    // componentDidUpdate(prevProps){
    //     // debugger;
    //     if(prevProps.reviews!==this.props.reviews){
    //         const reviewItems1 = Object.values(this.props.reviews);
    //         for(let i = 0; i < reviewItems1.length; i++){
    //             // debugger;
    //             if(this.props.user.id === reviewItems1[i].user_id){
    //                 // debugger;
    //                 this.setState({session_user_reviewed:true})
    //                 break;
    //             }
    //         }
    //     }
    //     debugger;
    // }

  

    componentDidMount(){
        // debugger;
        this.props.fetchReviews(this.props.bookId);
        if(this.props.user.id){
            this.props.fetchReviewsUser(this.props.user.id) 
        }
        // if(this.state.loggedIn){
        //     this.findUserReview();
        // }
    }

    pullUserReview(){
        let myReview;
        if(this.props.user.id){
            myReview = Object.values(this.props.userReviews).find(review=>
                (review.book_id === parseInt(this.props.bookId,10) && review.user_id === this.props.user.id))

                // review.book_id ===parseInt(this.props.bookId,10));
        }
        // debugger;
        return myReview;
    }



    render(){
        // debugger;
        const {reviews,user,fetchReviews} = this.props;
        let myReview = this.pullUserReview();

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
        }else if(myReview && (myReview.title===null || myReview.title==="") && (myReview.body ===null || myReview.body==="")){
            return(
                <div className="col-12 allReviews">
                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                    {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}
                    <RatingContainer 
                        // myReview={myReview}
                        
                        myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}

                        bookId={this.props.bookId}
                        // loggedIn={this.props.loggedIn} 
                        // updateReview={this.props.updateReview}
                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                    />
                    <Link to={`/books/${this.props.bookId}/review/new`}>Write a Review</Link>
                    {reviewItems}           
                </div>
            )
        }else if(!myReview){
            return(
                <div className="col-12 allReviews">
                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                    {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}
                    <RatingContainer 
                        // myReview={myReview}
                        
                        myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}

                        bookId={this.props.bookId}
                        // loggedIn={this.props.loggedIn} 
                        // updateReview={this.props.updateReview}
                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                    />
                    <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>
                    {reviewItems}           
                </div>
            )                
        }else{
            return(
                <div className="col-12 allReviews">
                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> thank you for your review on {this.props.book.title}!</span></h2> 
                    {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}

                    {reviewItems}           
                </div>
            )
        }
    }
}

export default withRouter(ReviewIndex);

