import React from 'react';
import {Link} from 'react-router-dom';


//this component is for two scenarios: the review model contains ratings but on GoodReads
//you can update rating without giving a title and body; perhaps they use separate tables.
//1) this first situation is where there is rating but no title and body. 
//        On greatreads, user can give just rating if they want to. Still considered "no review"
//2) User has not rated or given a title/body
class NewReview extends React.Component{
    
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            title: "",
            body: "",
            rating: 0,
            user_id: props.sessionId,
            spoiler: false,
            book_id: props.bookId,
            book: props.book,
            initial:true,
            errorsPresent:false
            // star:props.myReview.rating //needs to be linked via new_review_container
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.updateSpoiler = this.updateSpoiler.bind(this);
        this.ratingForm = this.ratingForm.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.pullUserReview = this.pullUserReview.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.createReview(this.state.book_id, this.state)
    //         .then(this.props.history.push(`/books/${this.props.bookId}`));
    // }


    handleCreate(e){
        // debugger;
        e.preventDefault();
        if (this.state.rating===0){
            let newReview = Object.assign({},this.state, {"rating":null});
            // debugger;
            this.props.createReview(this.state.book_id, newReview)
                .then(this.setState({errorsPresent:true}));
                // .then(this.props.history.push(`/books/${this.props.bookId}`));
        }else{
            this.props.createReview(this.state.book_id, this.state)
            .then(this.props.history.push(`/books/${this.props.bookId}`));
        }
        // debugger;
    }

    

    handleUpdate(ratingInput,userReview){
        // debugger;
        // e.preventDefault();
        let updatedReview = Object.assign({},this.state, {"rating":ratingInput});
        // debugger;
   
        this.props.updateReview(userReview.id, updatedReview)
            .then(this.props.history.push(`/books/${this.props.bookId}`));        
    }


    updateRating(newRate){
        this.setState({rating:newRate});
        this.setState({initial:false});
    };

    pullUserReview(){
        let myReview;
        if(this.state.user_id){
            myReview = Object.values(this.props.userReviews).find(review =>
                review.book_id === parseInt(this.props.bookId,10));
        }
        // debugger;
        // console.log("INSIDE NEW REVIEW");
        // console.log(myReview);
        return myReview;
    }


    renderErrors(){
        if(this.props.errors){
            const errorsLi = this.props.errors.map(error=>
                (
                    <li class="errorsLi">
                        {error}
                    </li>
                )
            )
            return errorsLi;
        }
    }


    ratingForm(stateOfStar){
            
            return(<div className="rating">
                    {/* {this.toggleStars()} */}
                    <form>
                        <div className="rateStar" id="rateStarz">
                            <input type="radio" checked={stateOfStar===5 ? true : false} className="star5" name="rateStar" value="5" onClick={()=>this.updateRating(5)}/>
                                <label for="star5" onClick={()=>this.updateRating(5)} title="text">5</label>
                            <input type="radio" checked={stateOfStar===4 ? true: false} className="star4" name="rateStar" value="4" onClick={()=>this.updateRating(4)}/>
                                <label for="star4" onClick={()=>this.updateRating(4)} title="text">4</label>

                            <input type="radio" checked={stateOfStar===3 ? true : false} className="star3" name="rateStar" value="3" onClick={()=>this.updateRating(3)}/>
                                <label for="star3" onClick={()=>this.updateRating(3)} title="text">3</label>

                            <input type="radio" checked={stateOfStar===2 ?  true : false} className="star2" name="rateStar" value="2" onClick={()=>this.updateRating(2)}/>
                                <label for="star2" onClick={()=>this.updateRating(2)} title="text">2</label>

                            <input type="radio" checked={stateOfStar===1 ? true : false} className="star1" name="rateStar" value="1" onClick={()=>this.updateRating(1)}/>                 
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

    componentDidMount(){
        // debugger;
        this.props.fetchBook(this.props.bookId);
        this.props.fetchReviewsUser(this.state.user_id)
    }

    updateSpoiler(){
        if(this.state.spoiler===false){
            this.setState({spoiler:true});
        }else{
            this.setState({spoiler:false});
        }
    }

    updateForm(field){
        // debugger;
        return(e) => this.setState({[field]:e.target.value});
    }

    // componentDidUpdate(prevProps, prevState){
    //     debugger;
    //     if (prevState.rating !== this.state.rating){
    //         this.props.fetchReviewsUser(this.state.user_id)
    //     }
    // }

    render(){    
        let title;
        let author;

        if(this.props.book){
            title = this.props.book.title;
            author = this.props.book.author;    
        }else{
            title = "";
            author = "";
        }
    
        
        // debugger; 
        //check to see if user review exists for that book

        let userReview = this.pullUserReview();
        // console.log("NEWNEWNEWNEW")
        // console.log(userReview);
     
        // debugger;

        let ratingInput;
        if (this.state.initial===true){
            if(userReview){
                ratingInput = userReview.rating
            }else{
                ratingInput = 0;
            }
        }else{
                ratingInput = this.state.rating;
        }
        // debugger;


        //if userReview exists, return div with createReview. if not, then return div with updateReview
        if(userReview){
            //rating exists but no title and body

            return(
                <div>
                    <div className="row">
                        {this.ratingForm(ratingInput)};
                        <h2>{title}</h2>
                        <h2>{author}</h2>
    
                    </div>
                    <div className="row">
                        <div className="col-2 bookCovThumb">
                            <form onSubmit={()=>this.handleUpdate(ratingInput,userReview)}>
                                <input type="text" placeholder="Review title" value={this.state.title} onChange={this.updateForm("title")}></input>
                                <textarea rows="20" cols ="100" placeholder="Enter your review here..." value={this.state.body} onChange={this.updateForm("body")}>
                                </textarea>
                                <input type="checkbox"  value={this.state.spoiler} onClick={()=>this.updateSpoiler()}></input>
                                <label for="">Spoiler</label>
                                <br/>
                                <input type="submit" value="Post Review"/>
                                {this.renderErrors()}
                            </form>
                        </div>
                    </div>
                </div>
            ) 
        }else{
            return(
                <div>
                    <div className="row">
                        {this.ratingForm(this.state.rating)};
                        <h2>{title}</h2>
                        <h2>{author}</h2>
                    </div>
                    <div className="row">
                        <div className="col-2 bookCovThumb">
                            <form onSubmit={this.handleCreate}>
                                <input type="text" placeholder="Review title" value={this.state.title} onChange={this.updateForm("title")}></input>
                                <textarea rows="20" cols ="100" placeholder="Enter your review here..." onChange={this.updateForm("body")}>
                                </textarea>
                                <input type="checkbox"  value={this.state.spoiler} onClick={()=>this.updateSpoiler()}></input>
                                <label for="">Spoiler</label>
                                <br/>
                                <input type="submit" value="Post Review"/>
                                {this.renderErrors()}
                            </form>
                        </div>
                    </div>
                </div>
            )  
        }
        
       
    }
}

export default NewReview;