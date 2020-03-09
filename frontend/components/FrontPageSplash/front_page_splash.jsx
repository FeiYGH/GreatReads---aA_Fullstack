import React from 'react';
import {Link} from 'react-router-dom'; 

class FrontPageSplash extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="mainSplash">frontPageSplash
                <div className ="row">
                    <div className ="brown col-12"></div>
                </div>
                <div className="row">
                    <div className ="brown col-12"></div>
                    <div className ="brown col-12"></div>
                    {/* <div className ="brown col-12"></div> */}

                    <div className="col-6">
                        
                        <h2 className="mainSplash">
                            Deciding what to read next?
                        </h2>
                        <p className="mainSplash">
                            You're in the right place. Tell us what titles or genres you've enjoyed in the past, and we'll give you surprisingly insightful recommendations.
                        </p>
                    </div>
                    <div className="col-6">
                        <h2 className="mainSplash">What are your friends reading?</h2>
                        <p className="mainSplash">
                            Chances are your friends are discussing their favorite (and least favorite) books on greatReads.
                        </p>
                        
                    </div>

                </div>
                <div className="row" id="discoveryBox">
                    <h2 className="mainSplash">What will you discover?</h2>
                    <div className = "discoverySourceBooks col-8">
                        <p>Because Deborah liked...</p>
                        <div className="flex-books">
                            <div className="col-book">
                                <a href="">
                                    <img src={window.images.memoirs} alt="Memoirs of a Geisha"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    <img src="Guernsey.jpg" alt="Guernsey"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    {/* <img src="assets/Deborah/WaterForElephants.jpg" alt="Water For Elephants"/> */}
                                    <img src="WaterForElephants.jpg" alt="Water For Elephants"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    {/* <img src="assets/Deborah/TheHelp.jpg" alt="The Help"/> */}
                                    <img src="TheHelp.jpg" alt="The Help"/>
                                </a>
                            </div>
                            <div className="col-arrow">
                                {/* <img src="assets/discovery_arrow.png" alt="Discovery Arrow"/> */}
                                <img src="discovery_arrow.png" alt="Discovery Arrow"/>

                            </div>
                            
                        </div>
                    </div>
                    <div className="col-4">
                        <p>She discovered:</p>
                        <div className="flex-book2">
                            <div className="col-book2">
                                <a href="">
                                    <img src="Deborah/Moloka.jpg" alt="Moloka"/>
                                </a>
                            </div>
                            <div className="bookCategories">
                                <br/>
                                <p>Historical Fiction, Book Club</p>
                            </div>
                        </div>
                    </div>
                    <div class="row grid1"></div>
                </div>

                <div className="row" id="discoveryBox">
                    
                    <div className = "discoverySourceBooks col-8">
                        <p>Because Brian liked...</p>
                        <div className="flex-books">
                            <div className="col-book">
                                <a href="">
                                    <img src="Brian/Nudge.jpg" alt="Nudge"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    <img src="Brian/Traffic.jpg" alt="Traffic"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    <img src="Brian/Predictable.jpg" alt="Predictably Irrational"/>
                                </a>
                            </div>
                            <div className="col-book">
                                <a href="">
                                    <img src="Brian/Curious.jpg" alt="Curious"/>
                                </a>
                            </div>
                            <div className="col-arrow">
                                <img src="discovery_arrow.png" alt="Discovery Arrow"/>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <p>He discovered:</p>
                        <div className="flex-book2">
                            <div className="col-book2">
                                <a href="">
                                    <img src="Brian/ThinkingFast.jpg" alt="Thinking Fast and Slow"/>
                                </a>
                            </div>
                            <div className="bookCategories">
                                <br/>
                                <p>Decision-making, Sociology, Marketing</p>
                            </div>
                        </div>
            
                    </div>
                    <div class="row grid1"></div>
                </div>


                
               
            </div>
        )
    }
}

export default FrontPageSplash;