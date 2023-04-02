import React from 'react'

export default function JobSeekerCTA() {
  return (
    <div className="container overflow-hidden">
      <div className="relative mx-auto my-24 grid grid-cols-1 overflow-hidden bg-cv-section bg-cover bg-center bg-no-repeat px-8 text-white xs:px-12 sm:grid-cols-3 lg:grid-cols-2">
        {/* Left */}
        <div></div>
        {/* Right */}
        <div className="my-12 space-y-6 text-center sm:col-start-3 sm:text-left lg:col-start-auto lg:col-end-auto xl:space-y-12">
          <h3 className="font-heading text-4xl lg:text-5xl xl:text-6xl">
            Get your <span className="text-primary-300">Matched Jobs</span> in a
            few minutes.
          </h3>
          <p className="mt text-lg leading-10 text-primary-450 lg:text-xl">
            Find your dream job & earn from world leading brands. Upload your CV
            now.
          </p>
          <button className="mt-10 inline-block rounded bg-primary-300 px-2 py-3 font-bold text-black md:px-10 md:text-sm lg:text-base">
            Upload your CV
          </button>
        </div>
        <div className="absolute bottom-0 left-1/4 hidden h-full w-1/2 -translate-x-1/3 translate-y-14 bg-secondary-400 bg-opacity-50 sm:block lg:w-1/3 lg:-translate-x-1/2 lg:translate-y-20 xl:translate-y-12"></div>
      </div>
    </div>
  )
}
