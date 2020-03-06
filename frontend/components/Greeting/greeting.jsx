import React from 'react';
import {Link} from 'react-router-dom'; 
import configureStore from '../../store/store';
import {login, signup} from '../../actions/session_actions';
// import {} from '../../../app/assets/images/masthead_background.jpg';
import SignUpContainer from '../SessionForm/login_form_container';
import SignUpGreetContainer from '../SignUpGreeting/signup_greet_container';

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        // this.setParentStateState = this.setParentState.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({errors:nextProps.errors});
    // }

    handleSignUp(e){
        e.preventDefault();
        this.props.signup(this.state)
        .then(this.setState({username: "hi"}));
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
                    <form onSubmit={this.handleSubmit}>
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
                    </div> */}

            </nav>
            <img className="splash" src='assets/masthead_background.jpg'  alt="books background"
            width="100%"/>
                
        </div>
        )
    }
    
    
    
    render(){
        const {sessionId, logout, currentUser } = this.props;
        // debugger;
        // if (sessionId===undefined || sessionId ===null){
        if(!this.props.currentUser){   
            debugger;
            return(
                // <div>
                //     <h2>Hello you are seeing the Greeting page bc session id is undefined or null</h2>
                //     <Link to="/signup">Sign Up</Link>
                //     <br/>
                //     <Link to="/login">Log In</Link>
                //     {/* <Link to="/api/users">Sign Up</Link>
                //     <Link to="api/session">Login</Link>   */}
                // </div>
                
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
                    <img className="splash" src='assets/masthead_background.jpg'  alt="books background"
                    width="100%"/>
                </div>
            )}else{
            // debugger;
            return(
                <div>
                    <h2>Welcome {currentUser.username}</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            )
        }
    }
}
export default Greeting;