import React from 'react';

export const Login = () => {

    return (
        <div id="login" className="col s6">
            <h2>Login to store</h2>
            <div>
                <div className="input-field">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="validate"
                        //onChange={changeHandler}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="Enter your email"/>
                </div>
                <div className="input-field">
                    <input
                        id="password"
                        type="password"
                        className="validate"
                        name="password"
                        //onChange={changeHandler}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <span className="helper-text" data-error="Enter password"/>
                </div>
                <button
                    className="btn btn-primary"
                    // disabled={loading}
                    // onClick={loginHandler}
                >
                    Log in
                </button>
            </div>
        </div>
    );
}








