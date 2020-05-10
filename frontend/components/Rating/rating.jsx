import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Rating extends React.Component{
    
    constructor(props){
        // debugger;
        super(props);
        
        this.state={
            title:"",
            body:"",
            rating:0,
            user_id: props.sessionId,
            book_id: props.bookId,
            spoiler:false,
            star:props.myReview.rating,
            updated:0
        };

        this.toggleStars= this.toggleStars.bind(this);
        this.updateRating = this.updateRating.bind(this);
        // this.pullUserReview = this.pullUserReview.bind(this);
    }

    // pullUserReview(){
    //     let myReview;
    //     if(this.state.sessionId){
    //         myReview = Object.values(this.props.userReviews).find(review =>
    //             review.book_id === parseInt(this.props.bookId,10));
    //     }
    //     // console.log("MY REVIEW");
    //     // console.log(myReview);
    //     return myReview;
    // }

    toggleStars(){
        // debugger;


        // let loggedIn = !!this.props.sessionId;
        // const {myReview} = this.props;
        // if(myReview===undefined || myReview.rating===0 || !loggedIn || document.getElementById('rateStarz')===null){return null};
        // debugger;
        // console.log("MY REVIEW");
        // console.log(myReview);
        // document.getElementById(`star${myReview.rating}`).checked =true;
        // document.getElementsByClassName(`star${myReview.rating}`)[0].checked = true;
        // document.getElementsByClassName(`star${myReview.rating}`)[1].checked = true;

        // let myRatings = document.getElementsByClassName(`star${myReview.rating}`);
        // for(let i= 0; i < myRatings.length; i++){
        //     myRatings[i].checked = true;
        // }
    }

    updateRating(newRate){ 
        // debugger;
        this.setState({star: newRate});
        this.setState({rating: newRate})

        //if no user logged in and they hit the star button, take them to login page
        if(!this.props.sessionId){
            this.props.history.push('/');
        }
        // debugger;
        //there was already a rating (and review existing for book). Just updating the rating
        if(this.props.myReview.rating!==0){
            // debugger;
            this.props.myReview.rating=newRate;
            //should have one handler to update MyReview and one handler to update book.jsx
            this.props.updateReview(this.props.myReview.id, this.props.myReview)
                .then(this.props.handleRatingUpdate())
                .then(this.setState({updated:this.state.updated+1}));
        }else{
            // debugger;
            console.log("NEWRATE");
            let ratingOnly = Object.assign({}, this.state, {rating: newRate});
            this.props.createReview(this.props.bookId, ratingOnly)
                .then(this.props.handleRatingUpdate())
                .then(this.setState({updated:this.state.updated+1}));
        }
        
        // if(myReview){
        //     myReview.rating = newRate;
        //     this.props.updateReview(myReview.id, myReview);       
        // }else{
        //     this.props.history.push(`/books/${this.props.bookId}/review/new`);
        // }
    }

    //To re-render child components on parent state change --> this.state.star
    //On first construction, the prop -- myReview.rating set as an intial state, "star"
    //When parent updates state (i.e. myReview is passed down to rating component)
    //rating component has already been constructed, so child component will not update 
    //and re-render. SOOOOO that's where this function comes handy 
    componentDidUpdate(prevProps,prevState){
        // debugger;
        if(prevProps.myReview.rating!== this.props.myReview.rating){
            this.setState({star:this.props.myReview.rating});
        }
        // if(prevProps.book && this.props.book){
        //     if(prevProps.book.title !== this.props.book.title){
        //         this.setState({star:this.props.myReview.rating});
        //     }
        // } 

    }

    
    componentDidMount(){
        debugger;
        this.props.fetchBook(this.props.bookId);
        let loggedIn = !!this.state.sessionId;
        if(loggedIn){
            this.props.fetchReviewsUser(this.state.sessionId)
        }
    }

    render(){
  
        // debugger;
        return(
            <div className="ratingOuterDiv">
                {/* {this.toggleStars()} */}
                <form className="rateForm">
                    <div className="rateStar" id="rateStarz">
                        <input type="radio" checked={this.state.star===5 ? true : false} className="star5" name="rateStar" value="5" onClick={()=>this.updateRating(5)}/>
                            <label for="star5" onClick={()=>this.updateRating(5)} title="text">5</label>
                        <input type="radio" checked={this.state.star===4 ? true: false} className="star4" name="rateStar" value="4" onClick={()=>this.updateRating(4)}/>
                            <label for="star4" onClick={()=>this.updateRating(4)} title="text">4</label>

                        <input type="radio" checked={this.state.star===3 ? true : false} className="star3" name="rateStar" value="3" onClick={()=>this.updateRating(3)}/>
                            <label for="star3" onClick={()=>this.updateRating(3)} title="text">3</label>

                        <input type="radio" checked={this.state.star===2 ?  true : false} className="star2" name="rateStar" value="2" onClick={()=>this.updateRating(2)}/>
                            <label for="star2" onClick={()=>this.updateRating(2)} title="text">2</label>

                        <input type="radio" checked={this.state.star===1 ? true : false} className="star1" name="rateStar" value="1" onClick={()=>this.updateRating(1)}/>                 
                            <label for="star1" onClick={()=>this.updateRating(1)} title="text">1</label>
                    </div>
                    {/* <div className="rateStar" id="rateStarz">
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
                    </div> */}
                </form>
            </div>
        )
    }
}


export default withRouter(Rating);
