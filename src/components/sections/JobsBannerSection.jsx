import React from 'react'
import JobsForm from '../JobsForm'

const JobsBannerSection = () => {
  return (
    <div className="relative bg-primary-700 pt-0 lg:pt-6">
      <div className="container relative flex flex-col items-center pt-12 pb-16 lg:pt-24 lg:pb-40">
        <h1 className="z-20 font-heading text-5xl text-white sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Job Listings
        </h1>
        <p className="mt-12 text-xl text-white">
          We deliver blazing fast & striking work solutions
        </p>
        <JobsForm />
      </div>
      <div className="absolute left-0 bottom-0 hidden content-banner-art lg:block"></div>
    </div>
  )
}

export default JobsBannerSection
