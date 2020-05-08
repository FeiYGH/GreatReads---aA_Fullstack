                                                                        import React from 'react';
import {Link} from 'react-router-dom'; 
import {Route, Redirect} from 'react-router-dom';
import NavBarContainer from '../Navbar/navbar_container';

import NavBarLoggedIn from '../Navbar/navbar_home';
import {login, signup} from '../../actions/session_actions';
// import {} from '../../../app/assets/images/masthead_background.jpg';
import SignUpContainer from '../SessionForm/login_form_container';
import SignUpGreetContainer from '../SignUpGreeting/signup_greet_container';
import FrontPageSplash from '../FrontPageSplash/front_page_splash';

//REMINDER THAT CAN'T USE JQUERY 
class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            username2:"",
            email2: "",
            password2: ""
        
        };

        // this.setParentStateState = this.setParentState.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
        // this.clearPageErrors = this.clearPageErrors.bind(this);
        this.renderErrorsLogin = this.renderErrorsLogin.bind(this);
        this.renderErrorsSignUp = this.renderErrorsSignUp.bind(this);
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({errors:nextProps.errors});
    // }

    // clearPageErrors(){
    //     // this.props.clearErrors();
    //     // document.getElementByClass("errorsDisplay").style.height="0px";
    //     $('errorLis').remove(); //can't use jQUERY
    // }


    handleLogIn(e){
        e.preventDefault();
        e.stopPropagation();
        // this.renderErrorsLogin();
        this.props.login(this.state);
        // this.renderErrors();
        
    }

    handleSignUp(e){
        e.preventDefault();
        e.stopPropagation(); //it prevents the bubbling up. 

        // this.renderErrorsSignUp();
        this.props.signup({
            username: this.state.username2,
            email: this.state.email2,
            password:this.state.password2
        });
        // .then(this.setState({username: "hi"}));
        // this.renderErrors();
    }

    updateForm(field){
        return (e) => this.setState({[field]: e.target.value});
    }

    signUpForm(){
        // debugger;
        return(
            <div className ="splash">
                <nav className = "splash">   
                        <h1 className="splash"><Link to="/">greatReads</Link></h1>
                        {/* <SignUpGreetContainer setParentState={()=>this.setParentState()}/> */}
                        <form onSubmit={this.handleSignUp}>
                            <input type="text" placeholder="Name" value={this.state.username} onChange={this.updateForm("username")}/>

                            <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.updateForm("email")}/>

                            <input type="password" placeholder="********" value={this.state.password} onChange={this.updateForm("password")}/>
                            <input type="submit" value="Sign Up"/>
                        </form>


                        {/* <Link to="/">greatReads</Link>
                        <Link to="/signup">Sign Up</Link> */}
                        
                        {/* <form action=""></form> */}
                        {/* <div className="splashButtons">
                            <button >Sign Up</button> 
                            &emsp;
                            <button >Log In</button>
                    </div>*/}

                </nav>
                <img className="splash" src={window.images.mastHead}  alt="books background"
                width="100%"/>
            </div>
        )
    }
    


    renderErrorsSignUp(){
        if(this.props.errorsLogIn){
            // debugger;
            const errorsLi = this.props.errorsLogIn.map(error => 
                (
                    <li class="errorLis">
                        {error}
                    </li>
                )
            );
            // debugger;
            return errorsLi;
        }
    };


    renderErrorsLogin(){
        if(this.props.errorsSignUp){
            const errorsLi = this.props.errorsSignUp.map(error => 
                (
                    <li class="errorLis">
                        {error}
                    </li>
                )
            );
            // debugger;
            return errorsLi;
        }  
    }
    // renderErrorsLogin(){
        
    //     const errorsLi = this.props.errorsLogIn.map(error => 
    //             (
    //                 <li class="errorLis">
    //                     {error}
    //                 </li>
    //             )
    //         );
    //         const ele = document.getElementsByClassName(errorsLoginDisplay);
    //         ele.appendChild(errorsLi);
    //         return errorsLi;
    // }
    

    // renderErrorsSignUp(){
    //     const errorsLi = this.props.errorsSignUp.map(error => 
    //             (
    //                 <li class="errorLis">
    //                     {error}
    //                 </li>
    //             )
    //         );
    //         const ele = document.getElementsByClassName(errorsSignInDisplay);
    //         ele.appendChild(errorsLi);
    //         return errorsLi;
    // }

    render(){
        const {sessionId, logout, currentUser } = this.props;
        // debugger;
        // if (sessionId===undefined || sessionId ===null){
        if(!this.props.currentUser){   
            // debugger;
            return(
                //FIRST TIME
                // <div>
                //     <h2>Hello you are seeing the Greeting page bc session id is undefined or null</h2>
                //     <Link to="/signup">Sign Up</Link>
                //     <br/>
                //     <Link to="/login">Log In</Link>
                //     {/* <Link to="/api/users">Sign Up</Link>
                //     <Link to="api/session">Login</Link>   */}
                // </div>
                
                
                //2ND TIME, SIGN UP WORKING 
                // <div className ="splash">  
                //     <nav className = "splash">   
                //         <h1 className="splash"><Link to="/">greatReads</Link></h1>
                //         <form onSubmit={this.handleSignUp}>
                //             <input type="text" placeholder="Name" value={this.state.username} onChange={this.updateForm("username")}/>

                //             <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.updateForm("email")}/>

                //             <input type="password" placeholder="********" value={this.state.password} onChange={this.updateForm("password")}/>
                //             <input type="submit" value="Sign Up"/>
                //         </form>
                //     </nav>
                //     <img className="splash" src='assets/masthead_background.jpg'  alt="books background"
                //     width="100%"/>
                // </div>

                //1ST TIME, LOG IN WORKS
                //CONTAINER DIV

            <div id="headerDiv"> 
                {/* <div class="testMastHead"></div> */}
                <div className ="splashHeaderContainer">  
                    <nav className = "topLeftSplash">   
                        <h1 className="splash"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                    </nav>
                    <nav className="centerSplash">
                    </nav>
                    
                    {/* Log in form */}
                    <nav className="topRightSplash">
                        <form onSubmit={ this.handleLogIn}>
                            <input type="text" placeholder="Email address" value={this.state.email} onChange={this.updateForm("email")}/>
                            &ensp;&nbsp;
                            <input type="password" placeholder="********" value={this.state.password} onChange={this.updateForm("password")}/>
                            &ensp;&nbsp;
                            <input type="submit" className="gr-button gr-button-dark" value="Sign in"/>
                            &ensp;&nbsp;
                            <input type ="button" className="gr-button gr-button-dark" value="DEMO USER" onClick={()=>this.props.loginDemo()}></input>
                            {/* <span className="errorsLoginDisplay"></span> */}
                            <span className="errorsDisplay">{this.renderErrorsLogin()}</span>
                            {/* {setTimeout(this.props.clearErrors, 5000)} */}
                        </form>
                    </nav>
                </div>
                    {/* <img className="splash" src="masthead_background.jpg"  alt="books background"/> */}
                    {/* <img className="headerSignUp" src="headline.png"  alt="headline pic"/>
                    <p></p> */}
                    

                    {/* <div className="errorsDisplay">{this.renderErrorsLogin()}</div> */}
                <div className="rowInlineBlock">
                    <div className="header30">
                        <img className="headerSignUp" src="headline.png"  alt="headline pic"/>

                    </div>
                
                    <div className ="headerSignUp">

                        {/* Sign Up Form */}
                        <form className="formSignUp" onSubmit={this.handleSignUp}>
                            
                            <h2 className="headerSignUp">New here? Create a free account!</h2>
                            
                            <input type="text" id="nameSignUpForm" size="35" placeholder="Name" value={this.state.username2} onChange={this.updateForm("username2")}/>

                            <input type="text" id="signUpEmailInput" size="35" placeholder="Email Address" value={this.state.email2} onChange={this.updateForm("email2")}/>

                            <input type="password" size="35" placeholder="********" value={this.state.password2} onChange={this.updateForm("password2")}/>
                            <br/>
                            <div id="signUpButtonAndService">
                                <input type="submit" className="signedOutHome newAccountBox" value="Sign Up"/>
                                <div id="termsOfService">
                                By clicking "Signup" I agree to the greatReads <span className="boldTermsOfS">Terms of Service</span> and confirm that I am at least 13 years old.
                                </div>
                            </div>
                            
                            <div className="errorsDisplay">{this.renderErrorsSignUp()}</div>
                            {/* <div className="errorsSignInDisplay"></div> */}
                            {/* <script>setTimeout(this.clearPageErrors, 2000)</script> */}
                            
                        </form>
                </div>
            </div>
                    
        </div>  
            );
            }else{
            // debugger;
            return(
                <div className="welcomeNlogout">
                    {/* <NavBarLoggedIn/> */}
                    <h2>Welcome, {currentUser.username}</h2>
                    {/* <button className="gr-button-dark gr-button logoutButton" onClick={logout}>Logout</button> */}
                    
                </div>
            )
        }
    }
}
export default Greeting;