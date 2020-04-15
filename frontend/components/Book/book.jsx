import React from 'react';
import {Link} from 'react-router-dom'; 
import ReviewsIndexContainer from '../ReviewIndex/review_index_container';
import MyReviewForBook from '../Review/my_review_for_book';
import Rating from '../Rating/rating';

class Book extends React.Component{
    constructor(props){
        super(props);
        // this.state= this.props.book;
        this.state={
            userReviews: props.userReviews,
            sessionId: props.sessionId
        }
        this.pullUserReview = this.pullUserReview.bind(this);
    }
  
    componentDidMount(){
        debugger;
        this.props.fetchBook(this.props.bookId);
        if(this.state.sessionId){
            this.props.fetchReviewsUser(this.state.sessionId)
                // .then(alert(this.pullUserReview()));
        }
     
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.userReviews !== this.props.userReviews){
    //         this.pullUserReview();
    //     }
    // }


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
                review.book_id === parseInt(this.props.bookId,10));
        }
        // console.log("MY REVIEW");
        // console.log(myReview);
        return myReview;
    }



    render(){
        // debugger;
        const {book} = this.props;

        let myReview = this.pullUserReview();


        if(!book){
            return null;
        }else { 
            return(
                <div className="bookShow">
                    <div className="row">
                        <div className="bookCov col-book">
                            <img src={this.props.book.photoUrl} alt="Memoirs of a Geisha"></img>
                            <div className="statusDropDown">Status Dropdown Coming</div>
                            <div className="rating">
                                Rate this book
                                <Rating 
                                    myReview={myReview} 
                                    loggedIn={!!this.state.sessionId} 
                                    updateReview={this.props.updateReview}   
                                />
                            </div>

                        </div>
        
                        <div className="bookDesc col-6">
                            <h1>{book.title}</h1>
                            <h2>by {book.author}</h2>
                            <div className="ratingsInfo">Ratings Info Coming</div>
                            <h3>{book.description}</h3>
                            <h3>Number of Pages: {book.num_pages}</h3>
                            <h3>Published {book.pub_date} by {book.publisher}</h3>
                    </div>  
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="row reviewsHeadline">MY ACTIVITY</h2>
    
                            <MyReviewForBook 
                                myReview={myReview}
                                loggedIn={!!this.state.sessionId}
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
                            />
                        </div>
                    </div>
                </div>
                
            )
        };
    }

}

export default Book;