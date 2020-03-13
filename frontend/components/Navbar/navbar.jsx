import React from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        if (!this.props.sessionId){
            return(
                <div className="genNavBar">
                    <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                    <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                    <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1>                
                    <input className="col-4 searchBookInput" type="text" placeholder="Search books"/> 
                    <h1 className="col-3 navLinks"><Link to="/">Sign in</Link></h1>             
                    <h1 className="col-2 navLinks"><Link to="/">Join</Link></h1>    
                </div>
            )
        }else{
            return(
                <div className="genNavBar">
                    <h1 className="navLogo"><Link to="/"><span id="great">great</span><span id="Reads">Reads</span></Link></h1>
                    <h1 className="col-2 navLinks"><Link to="/">Home</Link></h1>
                    <h1 className="col-3 navLinks"><Link to="/books">All Books</Link></h1>                
                    <input className="col-4 searchBookInput" type="text" placeholder="Search books"/>  
                </div>
            )
        }
        
    }

};

export default NavBar;