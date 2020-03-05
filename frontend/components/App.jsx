import React from 'react';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SessionFormContainer from './SessionForm/session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';

const App = () => (
    <div>
        <GreetingContainer />
        <Switch>
            
            <AuthRoute exact path ="/login" component={LoginFormContainer} />
            <AuthRoute exact path ="/signup" component={SessionFormContainer} />
        </Switch>  
    </div>
);

export default App; 