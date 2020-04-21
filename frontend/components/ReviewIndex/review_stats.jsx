import React from 'react';

class ReviewStats extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // reviews:props.reviews,
            // ratings5: 0,
            // ratings4: 0,
            // ratings3: 0, 
            // ratings2: 0,
            // ratings1: 0,
            // total_reviews: 0,
            // total_ratings: 0,
            updated: false
        };
        
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.bookId);
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.reviews !== this.props.reviews){
    //         this.props.fetchReviews(this.props.bookId);
    //         this.setState({
    //             updated:true
    //         })
    //     }
    // }

    

    render(){
        const {reviews} = this.props;
        const totalRatings = Object.values(reviews).length;
        let ratings5 = 0;
        let ratings4 = 0;
        let ratings3 = 0;
        let ratings2 = 0;
        let ratings1 = 0;
        //Here, reviews counts as those that have a title and body
        let totalReviews = 0;
        let sumRating = 0; 
        
        const reviewItems = Object.values(reviews).forEach((review)=>{
            sumRating+=review.rating;
            switch(review.rating){
                case 5:
                    ratings5+=1;
                    break;
                case 4: 
                    ratings4+=1;
                    break;
                case 3: 
                    ratings3+=1;
                    break;
                case 2:
                    ratings2+=1;
                    break;
                case 1:
                    ratings1+=1;
            }
            if(!(review.title===null || review.title==="") && !(review.body ===null || review.body==="")){
                totalReviews+=1;
            }
        });

        const aveRating = sumRating/totalRatings;


        return(
            <div>
                <p>
                    average star rating diagram 
                </p>
                <p>
                    rating details <br/>
                    ratings5 {ratings5} <br/>
                    ratings4 {ratings4} <br/>
                    ratings3 {ratings3} <br/>
                    ratings2 {ratings2} <br/>
                    ratings1 {ratings1} <br/>
                </p>
                <p>
                    total ratings <br/>
                    {totalRatings} 
                </p>
                <p>
                    total reviews <br/>
                    {totalReviews} 
                </p>
                <p>
                    ave rating <br/>
                    {aveRating.toFixed(2)} 
                </p>
                
                
                
            </div>
        )
    }

}

export default ReviewStats;