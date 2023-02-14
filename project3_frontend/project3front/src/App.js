import './App.css';
// import React, { useState, useEffect } from 'react';
import React from 'react';
//import { Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"

function App() {

  return (
    <div className="App">
     <NavigationBar /> 
      {/* <Routes>
        <Route path="/"/>
        <Route path="/user"/>
        <Route path="/problem"/>
      </Routes> */}
    </div>
  );
}

export default App;
