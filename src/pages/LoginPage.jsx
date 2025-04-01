import React from "react";
import "./LoginPage.css";
import SendIcon from "../assets/Vector.svg";

const LoginPage = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Welcome Newbie!!</h1>
            <h1 className="login-title">MyTodo makes it easy to stay organized and manage your life.</h1>

            {/*<p className="login-description">*/}
            {/*    MyTodo makes it easy to stay organized and manage your life.*/}
            {/*</p>*/}
            <form className="login-form">
                <label htmlFor="name" className="login-label">
                    What is your name?
                </label>
                <div className="input-container">
                    <input
                        id="name"
                        type="text"
                        placeholder="Input your name"
                        className="login-input"
                    />
                    <button className="logo-button" onClick={() => navigate("/login")}>
                        <img src={SendIcon} alt="전송하기" className="header-logo"/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
