import React from 'react'
import { portfolios } from '../portfolio'

function Card({ img, title, desc, link }) {
  return (
    <div class="col-lg-4 mb-4">
      <div class="card bg-dark" style={{ height: '100%' }}>
        <img src={img} class="card-img-top" alt={title} />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{title}</h5>
          <p class="card-text mb-4" style={{ color: 'hsl(0 0% 64%)' }}>{desc}</p>
          <a href={link} class="btn btn-outline-primary btn-sm mt-auto">Source code</a>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="section-title text-center">Portfolio</h3>
      <div className="container mt-5">
        <div className="row">
          {portfolios.map(p => (
            <Card
              key={p.key}
              img={p.img}
              title={p.title}
              desc={p.desc}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio