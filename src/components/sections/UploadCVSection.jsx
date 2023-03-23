import React from 'react'

const UploadCVSection = () => {
  return (
    <div className="container relative mx-auto my-24 flex items-center justify-center overflow-hidden bg-cv-section bg-cover bg-center bg-no-repeat text-white">
      {/* Left */}
      <div className="flex-1"></div>
      {/* Right */}
      <div className="flex-1 space-y-8">
        <h3 className="font-heading text-6xl">
          Get your <span className="text-primary-300">Matched Jobs</span> in a
          few minutes.
        </h3>
        <p className="mt text-xl leading-10 text-primary-450">
          Find your dream job & earn from world leading brands. Upload your CV
          now.
        </p>
        <button className="mt-10 inline-block rounded bg-primary-300 px-10 py-3 font-bold text-black">
          Upload your CV
        </button>
      </div>
      <div className="absolute left-1/4 bottom-0 h-full w-1/3 -translate-x-1/2 translate-y-12 bg-secondary-400 bg-opacity-50"></div>
    </div>
  )
}

export default UploadCVSection
