import React from 'react'
import { Link } from 'react-router-dom'
import art1 from '../../assets/collaboration.svg'

const CollaborationSection = () => {
  return (
    <div className="container my-24 xl:my-36">
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-24 lg:flex-row lg:gap-32">
        {/* Left */}
        <div className="flex flex-1 items-center justify-center">
          <img src={art1} alt="" className="w-3/4 lg:w-full" />
        </div>
        {/* Right */}
        <div className="flex flex-1 flex-col gap-12">
          <div className="text-xs uppercase text-black text-opacity-20">
            Top Brand
          </div>
          <h3 className="text-center font-heading text-5xl text-primary-700 sm:text-left lg:text-6xl">
            Collaboration with Top Brands.
          </h3>
          <p className="text-xl leading-10 text-black text-opacity-70 lg:text-2xl">
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
