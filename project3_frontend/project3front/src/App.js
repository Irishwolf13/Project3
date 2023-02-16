import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';
import SearchMenu from './components/SearchMenu';
function App() {
  const [navbarToggle, setNavbarToggle] = useState(false)
  const [logStatus, setLogStatus] = useState("Log In")
  const [currentUser, setCurrentUser] = useState({})
  console.log(currentUser)
  function handleNavbarToggle() {
    setNavbarToggle(!navbarToggle)
  }
  function helperLogStatus(status){
    setLogStatus(status)
    setCurrentUser({})
  }

  function helperLoggingIn(currentUser){
    setLogStatus(`Log out: ${currentUser.user_name}`)
    setCurrentUser(currentUser)
  }

  return (
    <div className='h-screen'>
      <TitleBar handleNavbarToggle={handleNavbarToggle}/>
      {navbarToggle ? <NavigationBar logStatus={logStatus} helperLoggingIn={helperLoggingIn} helperLogStatus={helperLogStatus}/> : null}
      <Routes>
        <Route path="/" element={<MainSpace/>}/>
        <Route path="/solutions" element={<h1>Put Solutions here</h1>}/>
        <Route path="/search" element={<SearchMenu></SearchMenu>}/>
      </Routes>
    </div>
  );
}

export default App;
