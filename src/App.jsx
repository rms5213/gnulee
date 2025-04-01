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
// import React from "react";
// import TextField from "./comp/TextField";
// import "./App.css";
//
// function App() {
//     return (
//         <div className="app">
//             <h1>과제02 TextField</h1>
//
//             <h2>언더라인</h2>
//             <TextField placeholder="Input your name" />
//
//             <h2>보더</h2>
//             <TextField placeholder="Input your name" borderStyle={true} />
//         </div>
//     );
// }
//
// export default App;
