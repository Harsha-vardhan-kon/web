import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home"; 
import "./index.css";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Feedback from "./Feedback/Feedback";

const App = () => {
  return (
    <div className="app">
      <header>Welcome</header>
      <div className="main-container">
      
        <Home /> 
        
       
        <div className="content">
          <Routes>
            <Route path="/" element={<div>Welcome to Dashboard</div>} />
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Aboutus" element={<About/>}/>
            <Route path="/Feedback" element={<Feedback/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;