import React, { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './layouts/Navbar'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import Sidedrawer from './components/Sidedrawer'
import Backdrop from './components/Backdrop'

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <div className="app">
        <div className="app__wrapper">
          <Navbar show_menu={() => setSideToggle(true)} />
          <Sidedrawer show={sideToggle} hide_menu={() => setSideToggle(false)} />
          <Backdrop show={sideToggle} hide_menu={() => setSideToggle(false)} />
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
