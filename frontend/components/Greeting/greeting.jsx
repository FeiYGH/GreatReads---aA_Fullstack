import React from 'react';
import {Link} from 'react-router-dom'; 
import configureStore from '../../store/store';
import {login, signup} from '../../actions/session_actions';

class Greeting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {sessionId, logout, currentUser } = this.props;
        // debugger;

        if (sessionId===undefined || sessionId ===null){
            return(
                <div>
                    <h2>Hello you are seeing the Greeting page bc session id is undefined or null</h2>
                    <Link to="/signup">Sign Up</Link>
                    <br/>
                    <Link to="/login">Log In</Link>
                    {/* <Link to="/api/users">Sign Up</Link>
                    <Link to="api/session">Login</Link>   */}
                </div>
            )      
        }else{
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