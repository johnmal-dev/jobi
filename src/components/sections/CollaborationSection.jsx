import React from 'react'
import { Link } from 'react-router-dom'
import art1 from '../../assets/collaboration.svg'
import art2 from '../../assets/job-categories-art.svg'

const CollaborationSection = () => {
  return (
    <div className="container my-36">
      <div className="flex items-center justify-center gap-32">
        {/* Left */}
        <div className="relative flex-1">
          <img src={art1} alt="" />
          <img
            src={art2}
            alt=""
            className="absolute bottom-1/2 right-0 -translate-x-3/4 translate-y-full"
          />
        </div>
        {/* Right */}
        <div className="flex flex-1 flex-col gap-12">
          <div className="text-xs uppercase text-black text-opacity-20">
            Top Brand
          </div>
          <h3 className="font-heading text-6xl text-primary-700">
            Collaboration with Top Brands.
          </h3>
          <p className="text-2xl leading-10 text-black text-opacity-70">
            We collaborate with a number of top tier companies on imagining the
            future of work, have a look.
          </p>
          <Link to="/" className="font-bold">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CollaborationSection
