import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';
import SearchMenu from './components/SearchMenu';
import SolutionsSpace from './components/SolutionsSpace';
function App() {
  const [searchProblem, setSearchProblem] = useState(1)
  const [navbarToggle, setNavbarToggle] = useState(false)
  const [logStatus, setLogStatus] = useState("Log In")
  const [currentUser, setCurrentUser] = useState({})
  
  function handleNavbarToggle() {
    setNavbarToggle(!navbarToggle)
  }
  function helperLogStatus(status){
    setLogStatus(status)
    setCurrentUser({})
  }
  function helperSetSearch(myProblem){
    setSearchProblem(myProblem)
  }

  function helperLoggingIn(currentUser){
    setLogStatus(`Log out: ${currentUser.user_name}`)
    setCurrentUser(currentUser)
  }

  return (
    <div className='h-screen'>
      <TitleBar handleNavbarToggle={handleNavbarToggle}/>
      {navbarToggle ? <NavigationBar logStatus={logStatus} helperLoggingIn={helperLoggingIn} helperLogStatus={helperLogStatus} handleNavbarToggle={handleNavbarToggle}/> : null}
      <Routes>
        <Route path="/" element={<MainSpace problem_ID={searchProblem}/>} />
        <Route path="/solutions" element={<SolutionsSpace currentUser={currentUser}/>}/>
        <Route path="/search" element={<SearchMenu helperSetSearch={helperSetSearch}/>}/>
      </Routes>
    </div>
  );
}

export default App;
