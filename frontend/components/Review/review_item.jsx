import React from 'react';
import {Link} from 'react-router-dom';

class ReviewItem extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
    }

    componentDidMount(){
        let review = this.props.review ? this.props.review.id : "";
        this.props.fetchReview(review);
        // this.props.fetchReview(this.props.review.id);
        
    }

    render(){
        const {review, user} = this.props;
         
        // debugger;
        if(!review){
            return null;
        }else{
            // debugger;
            return(
                <div className="reviewItem">
                    <h2 className="reviewItemAuthor">{review.author.username}</h2>
                    <h2 className="reviewItemTitle">{review.title}</h2>
                    <h3 className="reviewItemContent">{review.body}</h3>
                </div>
            )
        }
        
    }

}

export default ReviewItem;