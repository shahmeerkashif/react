import React from 'react';
import './LoginPage.css';

function LoginPage(){
    return(
        <div className="login">
            <div className="facebook">
                <div className="facebook-text">
                    facebook
                </div>
                <div className="title">
                    Facebook helps you connect and share
                    <br />with the people in your life
                </div>
            </div>
            <div className="login-container">
            <div className="login-detail">
                <input type="email" placeholder='Email address or Phone Number' />
                <br />
                <input type="password" placeholder='Password' />
            </div>
            <div className="btn">
                Login in
            </div>
            <div className="forget">
                <a href="forget">Forget account</a>
            </div>

            <div className="create">
                <br />
                <button className="btns">
                    Create New Account
                </button>
            </div>
            <p></p>
            <br />
            <div className="page">
                <a href="createpage">Create a Page</a>
                for a celebrity,band or business.
            </div>
            </div>
        </div>
    )
}

export default LoginPage;