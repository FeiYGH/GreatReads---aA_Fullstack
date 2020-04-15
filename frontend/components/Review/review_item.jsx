import React from 'react';
import {Link} from 'react-router-dom';

class ReviewItem extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
        this.state ={
            spoiler:props.review.spoiler,
            reveal:false
        };
        this.closeReview = this.closeReview.bind(this);
        this.openReview = this.openReview.bind(this);
    }

    closeReview(){
        this.setState({reveal:false});
    }


    openReview(){
        this.setState({reveal:true});
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
        }else if(this.state.spoiler){
            if(this.state.reveal===false){
                return(
                    <div>
                        <p>This review has been hidden because it contains spoilers. To view it, <button onClick={this.openReview}>click here</button></p>
                    </div>
                )   
            }else{
                return(
                    <div>
                        <p>This review was hidden because it contains spoilers. To close it, <button onClick={this.closeReview}>click here</button></p>
                        <div className="reviewItem">
                            <h2 className="reviewItemAuthor">{review.author.username}</h2>
                            <h2 className="reviewItemTitle">{review.title}</h2>
                            <h3 className="reviewItemContent">{review.body}</h3>
                         </div>
                    </div>

                )
            }    
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