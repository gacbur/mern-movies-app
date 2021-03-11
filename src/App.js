import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './layouts/Navbar'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import ScrollToTop from './components/scrollToTop/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <div className="app__wrapper">
          <Navbar />
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
