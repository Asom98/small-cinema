import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Screenings } from './Screenings';
import CenteredTextNavbar from './CenteredTextNavbar';


function App() {
  return (
    <><CenteredTextNavbar />
    <Routes>
      <Route path='/' element={<Screenings />}></Route>
    </Routes></>
  );
}

export default App;
