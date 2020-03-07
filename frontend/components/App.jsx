import React from 'react';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SessionFormContainer from './SessionForm/session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';
import FrontPageSplash from './FrontPageSplash/front_page_splash';
import Footer from './Footer/footer';
const App = () => (
    <div>
        <GreetingContainer />
        {/* <FrontPageSplash/> */}

        <Switch>
            
            <AuthRoute exact path ="/login" component={LoginFormContainer} />
            <AuthRoute exact path ="/signup" component={SessionFormContainer} />
            <Route exact path="/" component={FrontPageSplash}/>
            {/* <Route path = "*" component={componentNotFound}/> */}
        </Switch>  
        <Footer/>
    </div>

);

export default App; 