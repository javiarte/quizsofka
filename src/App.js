import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Quiz from './components/QuizIndex'
import Login from './components/login/Login'
import LoggedQuiz from './components/LoggedQuiz'

import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Quiz/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="loggedQuiz" element={<LoggedQuiz/>}/>
        </Routes>
    </Router>
  );
}

export default App;
