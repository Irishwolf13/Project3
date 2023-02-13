import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"/>
        <Route path="/user"/>
        <Route path="/problem"/>
      </Routes>
    </div>
  );
}

export default App;
