import React from 'react'
import { Link } from 'react-router-dom'
import art1 from '../../assets/collaboration.svg'
import art2 from '../../assets/job-categories-art.svg'

const CollaborationSection = () => {
  return (
    <div>
      {/* Left */}
      <div>
        <img src={art1} alt="" />
        <img src={art2} alt="" />
      </div>
      {/* Right */}
      <div>
        <div>Top Brand</div>
        <h3>Collaboration with Top Brands.</h3>
        <p>
          We collaborate with a number of top tier companies on imagining the
          future of work, have a look.
        </p>
        <Link to="/">Learn More</Link>
      </div>
    </div>
  )
}

export default CollaborationSection
