import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import SideBar from './components/SideBar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`wrapper position-relative ${toggle && 'active'}`}>
      <button className="hamburger position-fixed d-block d-md-none" onClick={() => setToggle(!toggle)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="container-fluid p-0 position-relative d-flex" style={{ height: '100vh' }}>
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content">
          <section className="home-container" id="home">
            <Home />
          </section>
          <section className="home-container" id="about">
            <About />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
