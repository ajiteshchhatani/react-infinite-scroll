import * as React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import { Login } from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />} ></Route>
    </Routes>
  )
}

export default App;
