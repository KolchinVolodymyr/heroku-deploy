/* eslint-disable react/prefer-stateless-function */

import React, { Component }from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {Home} from "./components/Home";


function App() {

        return (
            <div className="App">
                 <Router>
                     <nav>
                         <div className="nav-wrapper">
                             <ul id="nav-mobile" className="right hide-on-med-and-down">
                                 <li><NavLink to="/">Home</NavLink></li>
                                 <li><NavLink to="/login">login</NavLink></li>
                             </ul>
                         </div>
                    </nav>
                     <div>
                         <Switch>
                             <Route exact path="/" component={Home} />
                             <Route exact path="/login" component={Login} />

                         </Switch>
                     </div>
                 </Router>
                <div className="sss App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>31ssssssssss Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );

}

export default App;
