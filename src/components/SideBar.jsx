import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-scroll'
import ProfilePic from '../images/profile-pic.jpg'

import { faFacebookSquare, faCodepen, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactTypingEffect from 'react-typing-effect';

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
            <Link to="home" spy={true} className="nav-link" activeClass="active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} className="nav-link" activeClass="active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy={true} className="nav-link" activeClass="active">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" spy={true} className="nav-link" activeClass="active">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} className="nav-link" activeClass="active">Contact</Link>
          </li>
        </ul>
      </div>
      <footer className="mt-auto">
        <div className="social mt-4 mt-md-0">
          <a href="./"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="./"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="./"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="./"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="./"><FontAwesomeIcon icon={faCodepen} /></a>
        </div>
        <p className="mt-2 text-secondary">Made with <FontAwesomeIcon icon={faHeart} />, {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default SideBar
