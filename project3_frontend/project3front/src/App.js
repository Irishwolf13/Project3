import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';

function App() {

  return (
    <div className='h-screen'>
      {/* <Routes>
        <Route path="/"/>
        <Route path="/user"/>
        <Route path="/problem"/>
        </Routes> */}
        <TitleBar/>
        <NavigationBar/>
        <MainSpace/>
    </div>
  );
}

export default App;
