import React from 'react'
import { portfolios } from '../portfolio'

function Card({ img, title, desc, link }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card bg-dark" style={{ height: '100%' }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-4" style={{ color: 'hsl(0 0% 64%)' }}>{desc}</p>
          <a href={link} className="btn btn-outline-primary btn-sm mt-auto" target="_blank" rel="noopener noreferrer">Source code</a>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <div className="portfolio pt-4">
      <h3 className="section-title text-center">Portfolio</h3>
      <div className="container mt-5">
        <div className="row">
          {portfolios.map(p => (
            <Card
              key={p.id}
              img={p.img}
              title={p.title}
              desc={p.desc}
              link={p.sourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
