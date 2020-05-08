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
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }

    writeReview(){
        // debugger;
        this.props.history.push(`/books/review/${this.props.bookId}/new`);
        // this.props.history.push('/books')
    }



    componentDidUpdate(prevProps, prevState){
        
        if(prevProps.book && this.props.book){
            if(prevProps.book.title !== this.props.book.title){
                this.props.fetchReviews(this.props.bookId);
                // this.setState({
                //     updated:true
                // });
            }
        }  
    }

  
    handleCommentUpdate(){
        this.props.fetchReviews(this.props.bookId);
    }

    componentDidMount(){
        // debugger;
        this.props.fetchReviews(this.props.bookId);
        
        if(this.props.user){
            this.props.fetchReviewsUser(this.props.user.id); 
        }
        // if(this.state.loggedIn){
        //     this.findUserReview();
        // }
    }

    pullUserReview(){
        let myReview;
        
        if(this.props.user){
            myReview = Object.values(this.props.userReviews).find(review=>
                (review.book_id === parseInt(this.props.bookId,10) && review.user_id === this.props.user.id))

                // review.book_id ===parseInt(this.props.bookId,10));
        }
        // debugger;
        return myReview;
    }



    render(){
        // debugger;
        const {reviews,user,fetchReviews, book} = this.props;
        console.log("BOOOOOK TITLE!!!!!!!!!!!!!")
        console.log(book.title);
        let myReview = this.pullUserReview();

        const reviewItems = Object.values(reviews).map((review)=>{
            // let prop = review[idx+1] ? review[idx+1].id : ""
            // debugger;
            let reviewId=review.id;
            return(
                <ReviewItemContainer
                    review={review}
                    reviewId={reviewId}
                    book={book}
                    // reviewId={prop}
                    user={user}
                    handleCommentUpdate={this.handleCommentUpdate}
                />
            );
        });


        if(!user){
            return(
                <div className="col-12 allReviews" id="col12Reviews">
                    <div className="row">
                        <div className="col-profilePic" id="defaultProfilePic">
                            <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                        </div>
                        <div className="col-profileMsg" id="RevIndexMsg">
                            <div className="row">
                                <h2><Link id="loginLink" to='/'>Log in</Link>to start your review of {this.props.book.title}</h2> 
                            </div>
                            <div className="row">
                                <RatingContainer 
                                    myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}
                                    bookId={this.props.bookId}
                                    // loggedIn={this.props.loggedIn} 
                                    // updateReview={this.props.updateReview}
                                    handleRatingUpdate ={this.props.handleRatingUpdate}   
                                />
                            </div>
                        </div>
                    </div>
                    
                    {reviewItems}
                </div>
            )    
        }else if(myReview && (myReview.title===null || myReview.title==="") && (myReview.body ===null || myReview.body==="")){
            return(
                <div className="col-12 allReviews" id="col12Reviews">
                    <div className="row">
                        <div className="col-profilePic" id="defaultProfilePic">
                            <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                        </div>
                        <div className="col-profileMsg" id="RevIndexMsg">
                            <div className="row">
                                <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                            </div>
                            <div className="row">
                                <div className="col-myRatinRevIndex">
                                    <RatingContainer 
                                        myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}
                                        bookId={this.props.bookId}
                                        // loggedIn={this.props.loggedIn} 
                                        // updateReview={this.props.updateReview}
                                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                                    />
                                </div>
                                <div className="col-writeRevButRevIndex">
                                    <div className="smallHeight"></div>
                                    <Link className="writeReviewButton" to={`/books/${this.props.bookId}/review/new`}>Write a Review</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {reviewItems}
                </div>
            ) 
            
            // return(
            //     <div className="col-12 allReviews" id="col12Reviews">
            //         <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
            //         {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}
            //         <RatingContainer 
            //             myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}
            //             bookId={this.props.bookId}
            //             // loggedIn={this.props.loggedIn} 
            //             // updateReview={this.props.updateReview}
            //             handleRatingUpdate ={this.props.handleRatingUpdate}   
            //         />
            //         <Link to={`/books/${this.props.bookId}/review/new`}>Write a Review</Link>
            //         {reviewItems}           
            //     </div>
            // )
        }else if(!myReview){
            return(
                <div className="col-12 allReviews" id="col12Reviews">
                    <div className="row">
                        <div className="col-profilePic" id="defaultProfilePic">
                            <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                        </div>
                        <div className="col-profileMsg" id="RevIndexMsg">
                            <div className="row">
                                <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                            </div>
                            <div className="row">
                                <div className="col-myRatinRevIndex">
                                    <RatingContainer 
                                        myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}
                                        bookId={this.props.bookId}
                                        // loggedIn={this.props.loggedIn} 
                                        // updateReview={this.props.updateReview}
                                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                                    />
                                </div>
                                <div className="col-writeRevButRevIndex">
                                    <div className="smallHeight"></div>
                                    <Link className="writeReviewButton" to={`/books/${this.props.bookId}/review/new`}>Write a Review</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {reviewItems}
                </div>
            ) 
            // return(
            //     <div className="col-12 allReviews" id="col12Reviews">
            //         <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
            //         {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}
            //         <RatingContainer 
            //             // myReview={myReview}
                        
            //             myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}

            //             bookId={this.props.bookId}
            //             // loggedIn={this.props.loggedIn} 
            //             // updateReview={this.props.updateReview}
            //             handleRatingUpdate ={this.props.handleRatingUpdate}   
            //         />
            //         <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>
            //         {reviewItems}           
            //     </div>
            //)                
        }else{
            return(
                <div className="col-12 allReviews" id="col12Reviews">
                    <div className="row" id="addTopPadding">
                        <div className="col-profilePic" id="defaultProfilePic">
                            <img  id="defaultProfileImg" src="https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/profile_pic.png" alt="default profile pic"/>
                        </div>
                        <div className="col-profileMsg" id="RevIndexMsg">
                            <div className="row">
                                <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> thank you for your review on {this.props.book.title}!</span></h2> 
                            </div>
                            <div className="row">
                                <div className="col-myRatinRevIndex">
                                    <RatingContainer 
                                        myReview={this.props.myReview===undefined ? {rating:0} : this.props.myReview}
                                        bookId={this.props.bookId}
                                        // loggedIn={this.props.loggedIn} 
                                        // updateReview={this.props.updateReview}
                                        handleRatingUpdate ={this.props.handleRatingUpdate}   
                                    />
                                </div>
                                <div className="col-writeRevButRevIndex">
                                    <div className="smallHeight"></div>
                                    <Link className="writeReviewButton" to={`/books/${this.props.bookId}/review/edit`}>Edit Review</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {reviewItems}
                </div>
            )
            
            // return(
            //     <div className="col-12 allReviews" id="col12Reviews">
            //         <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> thank you for your review on {this.props.book.title}!</span></h2> 
            //         {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}

            //         {reviewItems}           
            //     </div>
            // )
        }
    }
}

export default withRouter(ReviewIndex);

