import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Skill from './components/Skill';
import Home from './components/Home';
import SideBar from './components/SideBar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`wrapper position-relative ${toggle && 'active'}`}>
      <button className="hamburger position-fixed d-block d-md-none bg-dark" onClick={() => setToggle(!toggle)}>
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
          <section className="skills-container" id="skills">
            <Skill />
          </section>
          <section className="portfolio-container" id="portfolio">
            <Portfolio />
          </section>
          <section className="contact-container" id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
