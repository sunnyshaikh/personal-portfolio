import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-scroll'
import ProfilePic from '../images/profile-pic.jpg'

import { faFacebookSquare, faCodepen, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactTypingEffect from 'react-typing-effect';

const handleClick = () => {
  document.querySelector('.wrapper').classList.remove('active')
}

function SideBar() {
  return (
    <div className="sidebar p-4 text-center d-flex flex-column">
      <div className="sidebar__intro">
        <div className="avatar p-2 d-inline-block border" style={{ borderRadius: '50%' }}>
          <Avatar src={ProfilePic} size={100} round={true} />
        </div>
        <h4 className="text-light mt-4">AltafAlam Shaikh</h4>
        <div className="text-secondary">
          <ReactTypingEffect
            text={["Web Developer", "CS Graduate", "Web Designer", "Java | Php | Js"]}
            speed='80'
            eraseSpeed='80'
            typingDelay='80'
          />
        </div>
      </div>
      <div className="sidebar-menu mt-5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="home" spy={true} className="nav-link" activeClass="active" onClick={handleClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} className="nav-link" activeClass="active" onClick={handleClick}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy={true} className="nav-link" activeClass="active" onClick={handleClick}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" spy={true} className="nav-link" activeClass="active" onClick={handleClick}>Portfolio</Link>
          </li>
          <hr style={{ margin: '.5rem' }} />
          <li className="nav-item">
            <a href="https://techwise-code.blogspot.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Visit my Blog</a>
          </li>
          {/* <li className="nav-item">
            <Link to="contact" spy={true} className="nav-link" activeClass="active" onClick={handleClick}>Contact</Link>
          </li> */}
        </ul>
      </div>
      <footer className="mt-auto">
        <div className="social mt-4 mt-md-0">
          <a href="https://facebook.com/makewebattractive" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="https://instagram.com/__techwise" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com/in/altafalam-shaikh-640809160" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/sunnyshaikh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://codepen.io/sunnyshaikh99/pens/public" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
        </div>
        <p className="mt-2 text-secondary">Made with <FontAwesomeIcon icon={faHeart} />, {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default SideBar
