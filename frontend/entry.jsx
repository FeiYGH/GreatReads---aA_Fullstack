import React from 'react';
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/root';


// import {login,logout,signup} from './util/session_api_util';
import {signup,login,logout} from './actions/session_actions';



document.addEventListener("DOMContentLoaded", ()=>{
    // //TESTING START
   
    // window.dispatch = store.dispatch;

    // window.store = store;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    let store;
    // debugger;
    if(window.currentUser){
        const preloadedState = {
            sessions: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store= configureStore();
    }   
    window.getState = store.getState;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    
});

window.u1 = {user: {
    username: "julia12",
    password: "hunter12",
    email: "fakeemail.com"
    }
}