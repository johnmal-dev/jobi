import React from 'react'
import JobsForm from '../JobsForm'

const JobDetailsBannerSection = () => {
  return (
    <div className="relative bg-primary-700 pt-0 lg:pt-6">
      <div className="container relative flex flex-col items-center pt-12 pb-16 lg:pt-24 lg:pb-40">
        <h1 className="z-20 font-heading text-5xl text-white sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Job Details
        </h1>
        <p className="mt-12 text-center text-xl text-white">
          Here will be your company job details & requirements
        </p>
      </div>
    </div>
  )
}

export default JobDetailsBannerSection
