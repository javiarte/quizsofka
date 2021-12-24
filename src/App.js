import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Quiz from './components/QuizIndex'
import Login from './components/login/Login'

import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Quiz/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;
