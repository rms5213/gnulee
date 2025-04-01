import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./comp/Header";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
