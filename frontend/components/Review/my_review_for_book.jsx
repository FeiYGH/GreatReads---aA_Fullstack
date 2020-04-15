import React from 'react';
import {Link} from 'react-router-dom';


class MyReviewForBook extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const {myReview, loggedIn} = this.props;
        debugger;
        if(!loggedIn){
            return(
                <div>
                    <h2>Please login to see your activity</h2> 
                </div>
            )
        }
        if(myReview){
            return(
                <div>   
                    <h2>{myReview.title}</h2>
                    <h2>{myReview.body}</h2>
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