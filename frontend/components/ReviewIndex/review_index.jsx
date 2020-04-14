import React from 'react';
import {Link} from 'react-router-dom';
import ReviewItemContainer from '../Review/review_item_container';
import {withRouter} from 'react-router-dom';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            book:props.book,
            bookId: props.bookId,
            session_user_reviewed: false
        }

        this.writeReview = this.writeReview.bind(this);

    }

    writeReview(){
        // debugger;
        this.props.history.push(`/books/review/${this.props.bookId}/new`);
        // this.props.history.push('/books')
    }

    componentDidUpdate(prevProps){
        // debugger;
        if(prevProps.reviews!==this.props.reviews){
            const reviewItems1 = Object.values(this.props.reviews);
            for(let i = 0; i < reviewItems1.length; i++){
                // debugger;
                if(this.props.user.id === reviewItems1[i].user_id){
                    // debugger;
                    this.setState({session_user_reviewed:true})
                    break;
                }
            }
        }
        debugger;
    }

    componentDidMount(){
        debugger;
        this.props.fetchReviews(this.props.bookId);
        

    }



    render(){
        // debugger;
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

        debugger;

        if(!user){
            return(
                <div className="col-6">
                <h2>Login to start your review of {this.props.book.title}</h2> 
                {reviewItems}
                
                
            </div>
            )    
        }else if(this.state.session_user_reviewed===false){
            return(
                <div className="col-12 allReviews">
                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> start your review of {this.props.book.title}</span></h2> 
                    {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}
                    <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp; <Link to={`/books/${this.props.bookId}/review/new`}>Write a Review</Link> </h2>
                    {reviewItems}           
                </div>
            )
        }else{
            return(
                <div className="col-12 allReviews">
                    <h2 id="reviewsWelcomeH2"><span id="reviewsUsername">{user.username},</span><span id="tellUserReview"> comment on community reviews of {this.props.book.title}</span></h2> 
                    {/* <h2> Ratings Div Placeholder &emsp;  &emsp;  &emsp; &emsp; &emsp;  <button onClick={()=>this.writeReview()}>Write a Review</button></h2> */}

                    {reviewItems}           
                </div>
            )
        }
    }
}

export default withRouter(ReviewIndex);

