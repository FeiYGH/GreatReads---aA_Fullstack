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

    // componentDidUpdate(prevProps, prevState){
        
    //     if(prevProps.book && this.props.book){
    //         if(prevProps.book.title !== this.props.book.title){
    //             this.props.fetchReviewsUser(this.state.sessionId);

    //         }
    //     }  
    // }

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
        const {loggedIn, book} = this.props;
        let myReview = this.pullUserReview();

        // debugger;
        if(!loggedIn){
            return(
                <div className="myRevForBookOuterDiv"> 
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review of</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 id="myRevBookTitle">{book.title}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>

                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Rating</h3>
                        </div>  
                        <div className="col-myRevCont ">
                            <div className="smallHeight"></div>

                            <Link to={'/'} className="writeReviewButton">Log in or Sign up</Link>
                            
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <div className="smallHeight"></div>

                            <h3>Review</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <div className="smallHeight"></div>
                            <div className="smallHeight"></div>

                            <Link to={'/'} className="writeReviewButton">Log in or Sign up</Link>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                </div>
            )
            // return(
            //     <div>
            //         <h2>Please login to see your activity</h2> 
            //     </div>
            // )
        }else if(!myReview){
            return(
                <div className="myRevForBookOuterDiv"> 
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review of</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 id="myRevBookTitle">{book.title}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>

                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Rating</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <RatingContainer 
                                // myReview={myReview}
                                myReview={myReview===undefined ? {rating:0} : myReview}

                                bookId={this.props.bookId}
                                // loggedIn={this.props.loggedIn} 
                                // updateReview={this.props.updateReview}
                                handleRatingUpdate ={this.props.handleRatingUpdate}   
                            />
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <div className="smallHeight"></div>
                            <Link to={`/books/${this.props.bookId}/review/new`} className="writeReviewButton">Write a Review</Link>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                </div>
            )
            // return(
            //     <div>
            //         <h2>You have not written a review for this book. </h2>
            //         <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>

            //     </div>
            // )
        }else if(myReview && (myReview.title===null || myReview.title==="") && (myReview.body ===null || myReview.body==="")){
            return(
                <div className="myRevForBookOuterDiv"> 
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review of</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 id="myRevBookTitle">{book.title}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>

                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Rating</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <RatingContainer 
                                // myReview={myReview}
                                myReview={myReview===undefined ? {rating:0} : myReview}

                                bookId={this.props.bookId}
                                // loggedIn={this.props.loggedIn} 
                                // updateReview={this.props.updateReview}
                                handleRatingUpdate ={this.props.handleRatingUpdate}   
                            />
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <div className="smallHeight"></div>
                            <Link to={`/books/${this.props.bookId}/review/new`} className="writeReviewButton">Write a Review</Link>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                </div>
            )
            // return(
            //     <div className="myRevForBookOuterDiv">
            //         <RatingContainer 
            //             // myReview={myReview}
            //             myReview={myReview===undefined ? {rating:0} : myReview}
            //             handleRatingUpMyReview={this.handleRatingUpdateMyReview}
            //             bookId={this.props.bookId}
            //             // loggedIn={this.props.loggedIn} 
            //             // updateReview={this.props.updateReview}
            //             handleRatingUpdate ={this.props.handleRatingUpdate}   
            //         />
            //         THANK YOU FOR Rating
            //         PLEASE REVIEW
            //         <Link to={`/books/${this.props.bookId}/review/new`}>Write Review</Link>
            //     </div>
            // )
        }else if(myReview){
            console.log("INSIDE MY ACCOUNT INFO")
            return(
                <div className="myRevForBookOuterDiv"> 
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review of</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 id="myRevBookTitle">{book.title}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>

                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Rating</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <RatingContainer 
                                // myReview={myReview}
                                myReview={myReview===undefined ? {rating:0} : myReview}

                                bookId={this.props.bookId}
                                // loggedIn={this.props.loggedIn} 
                                // updateReview={this.props.updateReview}
                                handleRatingUpdate ={this.props.handleRatingUpdate}   
                            />
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review Title</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 className="reviewMerry">{myReview.title}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                    <div className="row myActRow">
                        <div className="col-myRevLabels">
                            <h3>Review Content</h3>
                        </div>  
                        <div className="col-myRevCont">
                            <h3 className="reviewMerry">{myReview.body}</h3>
                        </div>
                        <div className="col-myRevRight"></div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="myRevForBookOuterDiv">
                    <h2>You have not written a review for this book. </h2>
                </div>
            )
        }
    }


}

export default MyReviewForBook;