import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/"/>
        <Route path="/user"/>
        <Route path="/problem"/>
        </Routes> */}
      <div>
        <TitleBar/>
        <NavigationBar/>
        <MainSpace/>
      </div>
    </div>
  );
}

export default App;
