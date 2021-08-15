import React from 'react'
import Avatar from 'react-avatar'
import ProfilePic from '../images/profile-pic.jpg'

import { faDove, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
  return (
    <div className="about text-center">
      <h3 className="section-title">About me</h3>
      <div className="container mt-5">
        <div className="avatar p-2 border d-inline-block" style={{ borderRadius: '50%' }}>
          <Avatar src={ProfilePic} size={200} round={true} />
        </div>
        <div className="about-desc col-12 col-md-10 mx-auto mt-4 pb-1">
          <h2 className="mb-3">AltafAlam Shaikh</h2>
          <p style={{ color: 'hsl(0, 0%, 64%)' }}>
            I studied Computer Science, and during my studies I got in contact with the basic concepts of programming. Since then I've always wanted to become a developer. Fortunately I became a Computer Science Graduate in 2020 from Pune university.
          </p>
          <p style={{ color: 'hsl(0, 0%, 64%)' }}>
            I am passionate about ideating, conceptualizing and producing consumer-centric as well as technology-enabled products from level zero. Open for exploring exciting full-stack development opportunities in startups as well as companies with scale.
          </p>
        </div>
        <div className="contact mt-5">
          <h4>Contact details</h4>
          <div className="row mt-3 mx-auto d-flex align-items-center">
            <p className="col-md-3 col-12">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              <span style={{ color: 'hsl(0, 0%, 64%)' }}>Bhosari, Pune-411039</span>
            </p>
            <p className="col-md-3 col-12">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <a href="tel:7773905221" className="text-decoration-none" style={{ color: 'hsl(0, 0%, 64%)' }}>+91-777 390 5221</a>
            </p>
            <p className="col-md-3 col-12">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <a href="mailto:altafalamshaikh55@gmail.com" className="text-decoration-none" style={{ color: 'hsl(0, 0%, 64%)' }}>altafalamshaikh55@gmail.com</a>
            </p>
            <p className="col-md-3 col-12">
              <a href="./" className="btn btn-primary">
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About