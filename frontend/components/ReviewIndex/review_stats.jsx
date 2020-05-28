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
            updated: false,
            ratingChart: false
        };
        this.closeRatingChart = this.closeRatingChart.bind(this);
        this.openRatingChart = this.openRatingChart.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.bookId);
    }

    closeRatingChart(){
        // debugger;
        this.setState({ratingChart:false});
    }

    openRatingChart(){
        // debugger;
        this.setState({ratingChart:true});
    }

    componentDidUpdate(prevProps, prevState){
        
        if(prevProps.book && this.props.book){
            if(prevProps.book.title !== this.props.book.title){
                this.props.fetchReviews(this.props.bookId);
                this.setState({
                    updated:true
                });
            }
        }  
    }

    

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

        let aveRating = 0;
        let percent5star = 0;
        let percent4star = 0;
        let percent3star = 0;
        let percent2star = 0;
        let percent1star = 0;
        if(totalRatings!==0){
            aveRating = (sumRating/totalRatings).toFixed(2);
            percent5star = (ratings5/totalRatings * 100).toFixed(0);
            percent4star = (ratings4/totalRatings * 100).toFixed(0);
            percent3star = (ratings3/totalRatings * 100).toFixed(0);
            percent2star = (ratings2/totalRatings * 100).toFixed(0);
            percent1star = (ratings1/totalRatings * 100).toFixed(0); 
        }

        let avePercent=0;
        if(aveRating!==0){
            avePercent = (aveRating/5.0 * 100).toFixed(0);
        }

        // debugger;
        if(this.state.ratingChart===true){
            return(
                <div className="ratingStatsDiv">
                    <div>
                        <div className="star-ratings-css">
                            <div className="star-ratings-css-top" style={{width : `${avePercent}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        </div> 
                        <span className="ratingValue">{aveRating}</span>
                        <span className="greyText">&nbsp;&nbsp;·&nbsp;</span>
                        <a onClick={()=>this.openRatingChart} id="rating-details" className="ratingDetailsLink" >
                            <span id="rating-graph" className="rating_graph">
                                <svg className="graphIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="15"><g transform="translate(0,0)"><rect cursor="" x="0" y="0" width="16" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="3" width="13.987164534260144" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="6" width="6.753822800241471" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="9" width="1.5230012718246875" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="12" width="0.6130077774717063" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/></g></svg>
                            </span>
                            <span className="ratingDetailsText" >Rating Details</span>
                        </a>
                        <span className="greyText">&nbsp;·&nbsp;</span>
                        <span className="revRateStats">{totalRatings} ratings</span>
                        <span className="greyText">&nbsp;·&nbsp;</span>
                        <span className="revRateStats">{totalReviews} reviews</span>
                    </div>
    
                    {/* start of rating details chart (first line is the up arrow) */}
                    <div className="arrow-up"></div>
                    <div className="ratingsChartDiv">
                    
                        <div className="ratingChartFirstLine">
                            <div className="ratingChartTitle">Rating Details 
                        </div>
                        <span className="closeButton" onClick={()=>this.closeRatingChart()}>×</span>
                        </div>
                        <dl>
                            {/* <dt >
                                <span className="ratingChartTitle">Rating Details</span>
                            </dt>    */}
                            <dd className={`percentage percentage-${percent5star}`}><span class="text">5&nbsp;<span className="yellow1">★&nbsp;</span> : <span className="graphPercent">&nbsp;{percent5star}% ({ratings5})</span></span></dd>
                            <dd class={`percentage percentage-${percent4star}`}><span class="text">4&nbsp;<span className="yellow1">★&nbsp;</span> : <span className="graphPercent">&nbsp;{percent4star}% ({ratings4})</span></span></dd>
                            <dd class={`percentage percentage-${percent3star}`}><span class="text">3&nbsp;<span className="yellow1">★&nbsp;</span> : <span className="graphPercent">&nbsp;{percent3star}% ({ratings3})</span></span></dd>
                            <dd class={`percentage percentage-${percent2star}`}><span class="text">2&nbsp;<span className="yellow1">★&nbsp;</span> : <span className="graphPercent">&nbsp;{percent2star}% ({ratings2})</span></span></dd>
                            <dd class={`percentage percentage-${percent1star}`}><span class="text">1&nbsp;<span className="yellow1">★&nbsp;</span> : <span className="graphPercent">&nbsp;{percent1star}% ({ratings1})</span></span></dd>                    
                        </dl>    
                    </div>  
                </div>
            )
        }else{
            return(
                    <div className="ratingStatsDiv">
                        <div>
                            <div className="star-ratings-css">
                                <div className="star-ratings-css-top" style={{width : `${avePercent}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            </div> 
                            <span className="ratingValue">{aveRating}</span>
                            <span className="greyText">&nbsp;&nbsp;·&nbsp;</span>
                            <a id="rating-details" className="ratingDetailsLink" >
                                <span id="rating-graph" className="rating_graph">
                                    <svg className="graphIcon" onClick={()=>this.openRatingChart()} xmlns="http://www.w3.org/2000/svg" width="16" height="15"><g transform="translate(0,0)"><rect cursor="" x="0" y="0" width="16" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="3" width="13.987164534260144" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="6" width="6.753822800241471" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="9" width="1.5230012718246875" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/><rect cursor="" x="0" y="12" width="0.6130077774717063" height="2" fill="rgb(33,86,37)" fill-opacity="1" stroke="none" stroke-opacity="0" stroke-width="1.5"/></g></svg>
                                </span>
                                <span className="ratingDetailsText" onClick={()=>this.openRatingChart()}>Rating Details</span>
                            </a>
                            <span className="greyText">&nbsp;·&nbsp;</span>
                            <span className="revRateStats">{totalRatings} ratings</span>
                            <span className="greyText">&nbsp;·&nbsp;</span>
                            <span className="revRateStats">{totalReviews} reviews</span>
                        </div>
                    </div>
            )
        }    
    }
}

export default ReviewStats;