import React from 'react'

function Skill() {
  return (
    <div className="skills pt-4">
      <h3 className="section-title text-center">Skills</h3>
      <div className="container mt-5">
        <div className="skills_content">
          <div className="left">
            <div className="skill-bar">
              <div className="skill">
                <p className="skill-title">PHP</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="90%" style={{ width: '90%' }}></div>
                </div>

              </div>
              <div className="skill">
                <p className="skill-title">HTML/CSS</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="95%" style={{ width: '95%' }}></div>
                </div>

              </div>
              <div className="skill">
                <p className="skill-title">JavaScript</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="78%" style={{ width: '78%' }}></div>
                </div>

              </div>
              <div className="skill">
                <p className="skill-title">Java</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="75%" style={{ width: '75%' }}></div>
                </div>

              </div>
              <div className="skill">
                <p className="skill-title">C/C++</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="80%" style={{ width: '80%' }}></div>
                </div>

              </div>
              <div className="skill">
                <p className="skill-title">Illustrator</p>
                <div className="progress-line">
                  <div className="progress-bar" data-value="60%" style={{ width: '60%' }}></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
