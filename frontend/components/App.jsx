import React from 'react';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SessionFormContainer from './SessionForm/session_form_container';
import {Route, Switch} from 'react-router-dom';


const App = () => (
    <div>
        <h1>GreatReads</h1>
        <GreetingContainer />
        <Switch>
            <Route path ="/login" component={LoginFormContainer} />
            <Route path ="/signup" component={SessionFormContainer} />
        </Switch>  
    </div>
);

export default App; 