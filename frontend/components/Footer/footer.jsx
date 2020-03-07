import React from 'react';
import {Link} from 'react-router-dom'; 

class Footer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="row" id="footer">
                <div className="col-footerLinks">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="https://www.goodreads.com/about/us">About us</a></li>
                        <li><a href="https://www.goodreads.com/jobs">Careers</a></li>
                        <li><a href="https://www.goodreads.com/about/terms">Terms</a></li>
                        <li><a href="https://www.goodreads.com/about/privacy">Privacy</a></li>
                        <li><a href="https://www.goodreads.com/s">Help</a></li>
                    </ul> 
                </div>
                <div className="col-footerLinks">

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Footer;