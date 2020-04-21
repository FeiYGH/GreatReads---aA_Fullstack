import React from 'react';
import {Link} from 'react-router-dom'; 
import ReviewsIndexContainer from '../ReviewIndex/review_index_container';
import MyReviewForBook from '../Review/my_review_for_book';
import MyReviewForBookContainer from '../Review/my_review_for_book_container';
import Rating from '../Rating/rating';
import RatingContainer from '../Rating/rating_container';
import ReviewStatsContainer from '../ReviewIndex/review_stats_container';

class Book extends React.Component{
    constructor(props){
        super(props);
        // this.state= this.props.book;
        this.state={
            userReviews: props.userReviews,
            sessionId: props.sessionId,
            //for purposes of triggering a rerender of component when user updates rating
            ratingUpdated: 0
        };
        this.pullUserReview = this.pullUserReview.bind(this);
        this.handleRatingUpdate = this.handleRatingUpdate.bind(this);
    }
  
    componentDidMount(){
        // debugger;
        this.props.fetchBook(this.props.bookId);
        if(this.state.sessionId){
            this.props.fetchReviewsUser(this.state.sessionId)
                // .then(alert(this.pullUserReview()));
        }
        // debugger;
    }

    


    //this function returns the review of logged in user for this book,
    //if user reviewed
    pullUserReview(){
        //This returns the index of logged user review, if exists
        // let reviewIndex = -1; 
        // if(this.state.sessionId){
        //     const userReviews = Object.values(this.props.userReviews);
        //     const bookIdArr = userReviews.map(review => {
        //         return(
        //             review.book_id
        //         );
        //     });
        //     //need to turn this.props.bookId into a number 
        //     reviewIndex = bookIdArr.indexOf(parseInt(this.props.bookId,10));
        //     console.log(reviewIndex);
        // }
        // return reviewIndex;

        let myReview;
        if(this.state.sessionId){
            myReview = Object.values(this.props.userReviews).find(review =>
                (review.book_id === parseInt(this.props.bookId,10) && review.user_id === this.state.sessionId))
        };
        console.log("MY REVIEW");
        console.log(myReview);
        return myReview;
    }

    handleRatingUpdate(){
        // debugger;
        this.props.fetchReviewsUser(this.state.sessionId)
            .then(this.setState({ratingUpdated:this.state.ratingUpdated+1}))
        // this.setState({ratingUpdated:this.state.ratingUpdated+1});
        console.log("STATE OF RATINGUPATED");
      
    }

    // componentDidUpdate(prevProps){
    //     debugger;
    //     if(prevProps.userReviews!==prevProps.userReviews){
    //         if(this.state.sessionId){
    //             this.props.fetchReviewsUser(this.state.sessionId)
    //         }
    //     }
    // }

   

    render(){
        
        const {book} = this.props;

        let myReview = this.pullUserReview();

        //TESTING TAKING THIS OUT
        // let testReview = Object.values(this.props.reviews);
        // let lastReview=testReview[testReview.length-1];
        // if(myReview && this.state.ratingUpdated===true && lastReview.id!==myReview.id){
        //     myReview=lastReview;
        // }
        // debugger;

        console.log(myReview, "MYREVIEWBOOK");
        
        if(!book){
            return null;
        }else { 
            // debugger;
            return(
                <div className="bookShow">
                    <div className="row">
                        <div className="bookCov col-book">
                            <img src={this.props.book.photoUrl} alt="Memoirs of a Geisha"></img>
                            <div className="statusDropDown">Status Dropdown Coming</div>
                            <div className="rating">
                                {myReview===undefined ? "Rate this book" : "My rating:"}
                                <RatingContainer 
                                    myReview={myReview===undefined ? {rating:0} : myReview}
                                    // myReview={myReview} 
                                    bookId={this.props.bookId}
                                    // loggedIn={!!this.state.sessionId} 
                                    handleRatingUpdate ={this.handleRatingUpdate} 
                                />
                            </div>

                        </div>
        
                        <div className="bookDesc col-6">
                            <h1>{book.title}</h1>
                            <h2>by {book.author}</h2>
                            <div className="ratingsInfo">Ratings Info Coming</div>
                            <ReviewStatsContainer
                                bookId={this.props.bookId}
                            />
                            <h3>{book.description}</h3>
                            <h3>Number of Pages: {book.num_pages}</h3>
                            <h3>Published {book.pub_date} by {book.publisher}</h3>
                    </div>  
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="row reviewsHeadline">MY ACTIVITY</h2>

                            <MyReviewForBookContainer
                                // myReview={myReview}
                                // myReview={myReview===undefined ? {rating:0} : myReview} 
                                bookId={this.props.bookId}
                                // loggedIn={!!this.state.sessionId}
                                handleRatingUpdate ={this.handleRatingUpdate} 

                            />

                        </div>
                        <div className="row reviewsHeadline"> 
                            <h2>COMMUNITY REVIEWS</h2> 
                        </div>
                        <div className="col-leftOfReviews">
                            
                        </div>
                        
                        <div className="col-6 reviews">
                            <ReviewsIndexContainer
                                bookId={this.props.bookId}
                                book={this.props.book}
                                myReview={myReview}
                                handleRatingUpdate={this.handleRatingUpdate}
                            />
                        </div>
                    </div>
                </div>
                
            )
        };
    }

}

export default Book;