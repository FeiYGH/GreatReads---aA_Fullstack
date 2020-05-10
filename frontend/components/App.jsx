import React from 'react';
import GreetingContainer from './Greeting/greeting_container';
import LoginFormContainer from './SessionForm/login_form_container';
import SessionFormContainer from './SessionForm/session_form_container';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';
import FrontPageSplash from './FrontPageSplash/front_page_splash';
import FrontPageSplashContainer from './FrontPageSplash/front_page_splash_container';
import Footer from './Footer/footer';
import BookContainer from '../components/Book/book_container';
import BooksContainer from '../components/BookIndex/book_index_container';
import NavBar from '../components/Navbar/navbar';
import NavBarContainer from '../components/Navbar/navbar_container';
import NavBarHomeContainer from '../components/Navbar/navbar_home_container';
import newReviewContainer from '../components/Review/new_review_container';
import EditReviewContainer from '../components/Review/edit_review_container';

const App = () => (
    // < GreetingContainer />
    <div>
        
        <Switch>
            <Route exact path='/' component={GreetingContainer}/>          
            {/* <AuthRoute exact path='*' component={NavBarContainer}/>  */}
        </Switch>
        <Switch>
            <Route exact path='/' component={NavBarHomeContainer}/>  
            <Route exact path='*' component={NavBarContainer}/>
        </Switch>

            

        <Switch>
            {/* <AuthRoute exact path ="/login" component={LoginFormContainer} />
            <AuthRoute exact path ="/signup" component={SessionFormContainer} /> */}
            {/* <Route path = "*" component={componentNotFound}/> */}
            <Route exact path='/books' component={BooksContainer}/>
            <Route exact path='/books/:bookId' component={BookContainer}/>
            <Route exact path='/books/:bookId/review/new' component={newReviewContainer}/>
            <Route exact path='/books/:bookId/review/edit' component={EditReviewContainer}/>
            
            
            <Route exact path="/" component={FrontPageSplashContainer}/>
            
            <AuthRoute path ="*" component={FrontPageSplashContainer} />
        </Switch>  

        {/* <Switch>
            <Route exact path='/books/:bookId' comopnent=
        </Switch> */}

        <Footer/>
    </div>

);

export default App; 