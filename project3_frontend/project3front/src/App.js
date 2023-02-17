import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavigationType } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import TitleBar from './components/TitleBar';
import MainSpace from './components/MainSpace';
import SearchMenu from './components/SearchMenu';
function App() {

  return (
    <div className='h-screen'>
      <TitleBar/>
      <Routes>
        <Route path="/" element={<MainSpace/>}/>
        <Route path="/solutions" element={<h1>Put Solutions here</h1>}/>
        <Route path="/search" element={<SearchMenu></SearchMenu>}/>
      </Routes>
    </div>
  );
}

export default App;
