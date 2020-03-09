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
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="https://www.goodreads.com/about/us">About us</a></li>
                        <li><a href="https://www.goodreads.com/jobs">Careers</a></li>
                        <li><a href="https://www.goodreads.com/about/terms">Terms</a></li>
                        <li><a href="https://www.goodreads.com/about/privacy">Privacy</a></li>
                        <li><a href="https://www.goodreads.com/s">Help</a></li>
                    </ul> 
                </div>
                <div className="col-footerLinks">
                    <h3>WORK WITH US</h3>
                        <ul>
                            <li><a href="https://www.goodreads.com/author/program">Authors</a></li>
                            <li><a href="https://www.goodreads.com/advertisers">Advertise</a></li>
                            <li><a href="https://www.goodreads.com/news?content_type=author_blogs">Authors & ads blog</a></li>
                            <li><a href="https://www.goodreads.com/api">API</a></li>
                            
                        </ul> 
                </div>
                <div className="col-footerIconLinks socialMedia">
                  <h3>CONNECT</h3>
                    <ul id="iconMenu">
                        {/* <li><a href="https://www.facebook.com/Goodreads/"><img src="assets/footerIcons/facebook.svg" alt="facebook icon"></img></a></li>
                        <li><a href="https://twitter.com/goodreads"><img src="assets/footerIcons/twitter.svg" alt="twitter icon"></img></a></li>
                        <li><a href="https://www.instagram.com/goodreads/"><img src="assets/footerIcons/instagram.svg" alt="instagram icon"></img></a></li>
                        <li><a href="https://www.linkedin.com/company/goodreads-com/"><img src="assets/footerIcons/linkedIn.svg" alt="linkedIn icon"></img></a></li> */}

                        <li><a href="https://www.facebook.com/Goodreads/"><img src="facebook.svg" alt="facebook icon"></img></a></li>
                        <li><a href="https://twitter.com/goodreads"><img src="twitter.svg" alt="twitter icon"></img></a></li>
                        <li><a href="https://www.instagram.com/goodreads/"><img src="instagram.svg" alt="instagram icon"></img></a></li>
                        <li><a href="https://www.linkedin.com/company/goodreads-com/"><img src="linkedIn.svg" alt="linkedIn icon"></img></a></li>
                        
                    </ul>           
                </div>
                

                <div className="footerStoreLinks">
                    <div className="emptySpace">    
                    </div>
                    <div className="footerStoreLink">
                        <a href="https://www.facebook.com/https://apps.apple.com/app/apple-store/id355833469/"><img src="appleStore.svg" alt="Apple Store Icon"></img></a>    
                    </div>
                    <div className="footerStoreLink">
                        <a href="https://play.google.com/store/apps/details?id=com.goodreads&utm_source=mw_footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img src="GooglePlay.png" alt="Apple Store Icon"></img></a>
                    </div>
                    <p></p>
                    <p id="copyright">2020 greatReads, Inc.</p>
                    <p id="mobileVs"><Link to="/">Mobile version</Link></p>
                </div>
            </div>
        )
    }
}

export default Footer;