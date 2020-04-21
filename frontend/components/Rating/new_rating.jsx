import React from 'react';
import {Link} from 'react-router-dom';

class Rating extends React.Component{
    constructor(props){
        super(props);
        this.toggleStars= this.toggleStars.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.pullUserReview= this.pullUserReview.bind(this);
    }

    pullUserReview(){
        let myReview;
        if(this.state.sessionId){
            myReview = Object.values(this.props.userReviews).find(review =>
                review.book_id === parseInt(this.props.bookId,10));
        }
        // console.log("MY REVIEW");
        // console.log(myReview);
        return myReview;
    }


    toggleStars(){
        const {myReview, loggedIn} = this.props;
        if(myReview===undefined || myReview.rating===0 || !loggedIn || document.getElementById('rateStarz')===null){return null};
        // debugger;
        console.log("MY REVIEW");
        console.log(myReview);
        document.getElementById(`star${myReview.rating}`).checked =true;
        // let myRatings = document.getElementsByClassName(`star${myReview.rating}`);
        // for(let i= 0; i < myRatings.length; i++){
        //     myRatings[i].checked = true;
        // }
    }

    
    updateRating(newRate){ 
        
        this.props.history.push(`/books/${this.props.bookId}/review/edit`);

        // this.history.push
        // this.props.myReview.rating = newRate;
        // this.props.updateReview(this.props.myReview.id, this.props.myReview)       
    }


    // componentDidMount(){
    //     this.toggleStars();
    // }

    render(){
        let myReview = this.pullUserReview();

        return(
            <div className="rating">
                {this.toggleStars()}
                <form>
                    {/* <div className="rateStar" id="rateStarz">
                        <input type="radio" className="star5" name="rateStar" value="5" onClick={()=>this.updateRating(5)}/>
                            <label for="star5" title="text">5</label>
                        <input type="radio" className="star4" name="rateStar" value="4" onClick={()=>this.updateRating(4)}/>
                            <label for="star4" title="text">4</label>

                        <input type="radio" className="star3" name="rateStar" value="3" onClick={()=>this.updateRating(3)}/>
                            <label for="star3" title="text">3</label>

                        <input type="radio" className="star2" name="rateStar" value="2" onClick={()=>this.updateRating(2)}/>
                            <label for="star2" title="text">2</label>

                        <input type="radio" className="star1" name="rateStar" value="1" onClick={()=>this.updateRating(1)}/>                 
                            <label for="star1" title="text">1</label>
                    </div> */}
                    <div className="rateStar" id="rateStarz">
                        <input type="radio" id="star5" name="rateStar" value="5" onClick={()=>this.updateRating(5)}/>
                            <label for="star5" title="text">5</label>
                        <input type="radio" id="star4" name="rateStar" value="4" onClick={()=>this.updateRating(4)}/>
                            <label for="star4" title="text">4</label>

                        <input type="radio" id="star3" name="rateStar" value="3" onClick={()=>this.updateRating(3)}/>
                            <label for="star3" title="text">3</label>

                        <input type="radio" id="star2" name="rateStar" value="2" onClick={()=>this.updateRating(2)}/>
                            <label for="star2" title="text">2</label>

                        <input type="radio" id="star1" name="rateStar" value="1" onClick={()=>this.updateRating(1)}/>                 
                            <label for="star1" title="text">1</label>
                    </div>
                </form>
            </div>
        )
    }
}


export default Rating;
