import React from 'react'

export default function JobDetailsBanner() {
  return (
    <div className="relative bg-primary-700 pt-0 lg:pt-6">
      <div className="container relative flex flex-col items-center pb-16 pt-12 lg:pb-40 lg:pt-24">
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
