import React, { useState, useEffect } from 'react'

function Home() {
  const [greet, setGreet] = useState('')

  useEffect(() => {
    const getGreet = () => {
      const hr = new Date().getHours();

      if (hr >= 0 && hr < 12)
        setGreet('Good morning');
      else if (hr >= 12 && hr < 17)
        setGreet('Good afternoon');
      else
        setGreet('Good evening');

    }
    getGreet();
  }, [])

  return (
    <div className="home d-flex align-items-center justify-content-center">
      <div className="home-intro text-center">
        <h6 className="text-secondary mb-3">{greet}, I am</h6>
        <h1 className="display-4 font-weight-bold" style={{ fontWeight: '700' }}>AltafAlam Shaikh</h1>
        <p>A Computer science graduate excited in developing fascinating apps.</p>
        <div className="cta" style={{ marginTop: '2.5rem' }}>
          <button className="btn btn-primary me-2" type="button">Download CV</button>
          <button className="btn btn-primary" type="button">About me</button>
        </div>
      </div>
    </div>
  )
}

export default Home
