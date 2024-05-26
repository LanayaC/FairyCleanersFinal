import React from "react";
import Home from "./home/Home";
import {Route, Routes } from "react-router-dom";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import CommunityandFeedback from "./comandfeed/CommunityandFeed";
import Signup from "./components/Signup";


function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/contact-us" element = {<Contact/>}/>
        <Route path="/community-and-feedback" element = {<CommunityandFeedback/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App
