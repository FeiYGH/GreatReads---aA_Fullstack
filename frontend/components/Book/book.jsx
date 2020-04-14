import React from 'react';
import {Link} from 'react-router-dom'; 
import ReviewsIndexContainer from '../ReviewIndex/review_index_container';


class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: props.sessionId
        }
        // this.state= this.props.book;
    }
  
    componentDidMount(){
        // debugger;
        this.props.fetchBook(this.props.bookId);
    }

    render(){
        // debugger;
        let myActivity;
        if(this.state.user_id){
            
        }


        const {book} = this.props;
        if(!book){
            return null;
           
        }else{
            return(
                <div className="bookShow">
                    <div className="row">
                        <div className="bookCov col-book">
                            <img src={this.props.book.photoUrl} alt="Memoirs of a Geisha"></img>
                            <div className="statusDropDown">Status Dropdown Coming</div>
                            <div className="rating">Rating Stars Coming</div>

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
                        {/* Logged in user's own reviews */}
                        <div className="row reviewsHeadline"> 
                            <h2>PLACEHOLDER FOR MY ACTIVITY</h2>


                        </div>
                        <div className="row reviewsHeadline"> 
                            <h2>COMMUNITY REVIEWS</h2> 
                        </div>
                        
                        
                        <div className="col-leftOfReviews">
                            
                        </div>
                        <div>
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