import React from 'react';
import {Link} from 'react-router-dom'; 

class FrontPageSplash extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        let divItem;
        
        if(!this.props.sessionId){
            divItem = (
                <div className ="brown col-12"></div>
            )
        }
        // debugger;

        return(
            <div className="mainSplash">
                {/* <div className ="row">
                    <div className ="brown col-12"></div>
                </div> */}

                <div className="row">
                    {/* <div className ="brown col-12"></div> */}
                    {/* <div className ="brown col-12"></div> */}
                    {divItem}
                    {/* <div className ="brown col-12"></div> */}

                    <div className="col-6 mainSplashPromptings">
                        <br/>
                        <br/>
                        <h2 className="mainSplash">
                            Deciding what to read <span className="splashBookLink"><Link to='/books'>next</Link></span>?
                        </h2>
                        <p className="mainSplash">
                            You're in the right place. Tell us what titles or genres you've enjoyed in the past, and we'll give you surprisingly insightful recommendations.
                        </p>
                    </div>
                    <div className="col-6 mainSplashPromptings">
                        <br/>
                        <br/>
                        <h2 className="mainSplash">What are your friends <span className="splashBookLink"><Link to='/books'>reading</Link></span>?</h2>
                        
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
                                <Link to="/books/55">
                                    <img src={window.images.memoirs} alt="Memoirs of a Geisha"/>
                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/56">
                                    <img src="Guernsey.jpg" alt="Guernsey"/>
                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/57">
                                    {/* <img src="assets/Deborah/WaterForElephants.jpg" alt="Water For Elephants"/> */}
                                    <img src="WaterForElephants.jpg" alt="Water For Elephants"/>
                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/58">
                                    {/* <img src="assets/Deborah/TheHelp.jpg" alt="The Help"/> */}
                                    <img src="TheHelp.jpg" alt="The Help"/>
                                </Link>
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
                                <Link to="/books/59">
                                    <img src="Moloka.jpg" alt="Moloka"/>
                                </Link>
                            </div>
                            <div className="bookCategories">
                                <br/>
                                <p>Historical Fiction, Book Club</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grid1"></div>
                </div>

                <div className="row" id="discoveryBox">
                    
                    <div className = "discoverySourceBooks col-8">
                        <p>Because Brian liked...</p>
                        <div className="flex-books">
                            <div className="col-book">
                                <Link to="/books/60">
                                    
                                    {/* <img src="Brian/Nudge.jpg" alt="Nudge"/> --would write if pulling from assets folder*/}
                                    <img src="Nudge.jpg" alt="Nudge"/>

                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/61">
                                    {/* <img src="Brian/Traffic.jpg" alt="Traffic"/> */}
                                    <img src="Traffic.jpg" alt="Traffic"/>

                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/62">
                                    {/* <img src="Brian/Predictable.jpg" alt="Predictably Irrational"/> */}
                                    <img src="Predictable.jpg" alt="Predictably Irrational"/>

                                </Link>
                            </div>
                            <div className="col-book">
                                <Link to="/books/63">
                                    {/* <img src="Brian/Curious.jpg" alt="Curious"/> */}
                                    <img src="Curious.jpg" alt="Curious"/>

                                </Link>
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
                                <Link to="/books/64">
                                    {/* <img src="Brian/ThinkingFast.jpg" alt="Thinking Fast and Slow"/> */}
                                    <img src="ThinkingFast.jpg" alt="Thinking Fast and Slow"/>

                                </Link>
                            </div>
                            <div className="bookCategories">
                                <br/>
                                <p>Decision-making, Sociology, Marketing</p>
                            </div>
                        </div>
            
                    </div>
                    <div className="row grid1"></div>
                </div>
            </div>
        )
    }
}

export default FrontPageSplash;