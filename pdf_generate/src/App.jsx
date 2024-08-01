import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HtmlToPdfAndDocx from './components/pdfConvert';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HtmlToPdfAndDocx />} />
      </Routes>
    </Router>
  );
};

export default App;
