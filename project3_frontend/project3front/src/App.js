import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';
function App() {
  const [navbarToggle, setNavbarToggle] = useState(false)

  function handleNavbarToggle() {
    setNavbarToggle(!navbarToggle)
  }

  return (
    <div className='h-screen'>
      <TitleBar handleNavbarToggle={handleNavbarToggle}/>
      {navbarToggle ? <NavigationBar/> : null}
      <Routes>
        <Route path="/" element={<MainSpace/>}/>
        <Route path="/soutions" element={<h1>Put Solutions here</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
