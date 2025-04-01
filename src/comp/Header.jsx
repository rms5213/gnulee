import React from "react";
import {useNavigate} from "react-router-dom";
import "./Header.css";
import logoIcon from "../assets/ic_topbar_menu.svg";

const Header = () => {
    const navigate = useNavigate();

    const formatDate = () => {
        const date = new Date();
        const options = {month: "2-digit", day: "2-digit"};
        const formattedDate = date.toLocaleDateString("en-US", options);

        const dayOptions = {weekday: "short"};
        const day = date.toLocaleDateString("en-US", dayOptions).toUpperCase();

        return `${formattedDate} (${day})`;
    };

    return (
        <header className="header">
            <div className="header-left">
                <button className="logo-button" onClick={() => navigate("/login")}>
                    <img src={logoIcon} alt="로고" className="header-logo"/>
                </button>
                <div className="non-click"> </div>
                <button className="myTodo-button" onClick={() => navigate("/login")}>
                    My Todo
                </button>
            </div>
            <div className="header-right">
                <div className ="date-box">{formatDate()}</div>
                <button className="signup-button" onClick={() => navigate("/login")}>
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default Header;
