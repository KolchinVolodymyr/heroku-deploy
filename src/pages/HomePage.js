import React from 'react';
import {AuthContext} from "../context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import logo from "../logo.svg";

export const HomePage = () => {

    return (
        <div id="login" className="col s6">
            <h2>Home home</h2>
            <div className="App">
                <div className="sss App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>336ssssssssss Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    );
}








