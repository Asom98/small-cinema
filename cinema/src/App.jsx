import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Screenings } from './Screenings';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Screenings />}></Route>
    </Routes>
  );
}

export default App;
