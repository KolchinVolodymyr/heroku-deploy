import React from 'react';
import {AuthContext} from "../context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import logo from "../logo.svg";

export const HomePage = () => {

    return (
        <div>
            <h1>
                Home Page
            </h1>
            <div className="progress">
                <div className="indeterminate"/>
            </div>
            <p>
                The site is temporarily unavailable. Sorry, routine maintenance is underway.
            </p>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    );
}








