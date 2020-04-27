import React from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

class NavBarHome extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        const {currentUser, sessionId} = this.props;
 
        if (!sessionId){
            return(
                <div>
                </div>
            )
        }else if(currentUser){
            return(
                <div className="genNavBarLoggedIn">
                    <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                    <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                    <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1>                
                    <input className="col-4 searchBookInput" type="text" placeholder='Search books'/>  
                    <h1 className="col-3 navLinks"><Link onClick={this.props.logout}>Log out</Link></h1>                
            {/* <h1 className="col-3 navLinks"><Link >{`Welcome, ${currentUser.username}`}</Link></h1>                 */}
                    
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
        
    }

};

export default NavBarHome;