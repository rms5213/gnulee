import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../comp/TextField";
import "./LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (name) => {
        if (name) {
            // console.log(` ${name}`);
            navigate("/home");
        }
    };

    return (
        <div className="login-container">
            <p className="login-title">Welcome Newbie!!</p>
            <p className="login-description">
                MyTodo makes it easy to stay organized and manage your life.
            </p>
            <label htmlFor="name" className="login-label">
                What is your name?
            </label>
            <div className="input-container">
                <TextField
                    placeholder="Input your name"
                    borderStyle={false}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default LoginPage;
