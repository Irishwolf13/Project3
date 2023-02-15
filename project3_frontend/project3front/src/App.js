import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';
import SolutionCard from "./components/SolutionCard"
import SubmitSolve from './components/SubmitSolve';
function App() {

  return (
    <div className='h-full'>
      {/* <Routes>
        <Route path="/"/>
        <Route path="/user"/>
        <Route path="/problem"/>
        </Routes> */}
        <TitleBar/>
        <NavigationBar/>
        <MainSpace/>
        <SolutionCard/>
        <SubmitSolve/>
    </div>
  );
}

export default App;
