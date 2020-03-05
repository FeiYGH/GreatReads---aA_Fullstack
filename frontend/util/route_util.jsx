import { Component } from "react";
import {withRouter} from 'react-router';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route 
        path={path}
        exact={exact}
        render={
            (props) => 
            !loggedIn ? <Component {...props}/> : (<Redirect to="/" />)
        }
    />
);


//container
const mapStateToProps = state => {
    return {loggedIn: Boolean(state.sessions.id)};
};

//HashRouter inside root.jsx - so now for the this component, can use withRouter
//withRouter allows the component to access location, history, and match
export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);