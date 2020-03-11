import React from 'react';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SessionFormContainer from './SessionForm/session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';
import FrontPageSplash from './FrontPageSplash/front_page_splash';
import Footer from './Footer/footer';
import BookContainer from '../components/Book/book_container';
import BooksContainer from '../components/BookIndex/book_index_container';

const App = () => (
    <div>
        <GreetingContainer />
        {/* <FrontPageSplash/> */}

        <Switch>
            {/* <AuthRoute exact path ="/login" component={LoginFormContainer} />
            <AuthRoute exact path ="/signup" component={SessionFormContainer} /> */}
            {/* <Route path = "*" component={componentNotFound}/> */}
           
           
            <Route exact path='/books' component={BooksContainer}/>
            <Route exact path='/books/:bookId' component={BookContainer}/>
            <Route exact path="/" component={FrontPageSplash}/>
            <AuthRoute path ="*" component={FrontPageSplash} />
        </Switch>  
        <Footer/>
    </div>

);

export default App; 