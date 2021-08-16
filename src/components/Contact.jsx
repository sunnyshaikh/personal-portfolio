import React from 'react'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className="footer text-center pt-4">
      <h5>AltafAlam Shaikh</h5>
      <div className="row mt-4">
        <p className="col-md-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          <span style={{ color: 'hsl(0, 0%, 64%)' }}>Pune, Maharashtra</span>
        </p>
        <p className="col-md-4">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          <a href="tel:7773905221" className="text-decoration-none" style={{ color: 'hsl(0, 0%, 64%)' }}>+91-777 390 5221</a>
        </p>
        <p className="col-md-4">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <a href="mailto:altafalamshaikh55@gmail.com" className="text-decoration-none" style={{ color: 'hsl(0, 0%, 64%)' }}>altafalamshaikh55@gmail.com</a>
        </p>
      </div>
      <hr />
      <p className="mt-5">Thank you :)</p>
      <h3 className="text-secondary">Portfolio built with React Js</h3>
    </div>
  )
}

export default Contact
