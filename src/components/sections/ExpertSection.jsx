import React from 'react'
import backArrow from '../../assets/back-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'

const ExpertSection = () => {
  return (
    <div className="bg-white">
      <div className="container py-24 sm:py-32 md:py-48">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:gap-0">
          <h3 className="relative max-w-2xl text-center font-heading text-5xl text-primary-700 after:absolute after:-top-14 after:-right-6 after:content-none xs:text-6xl sm:text-left sm:text-7xl sm:after:content-job-categories-art">
            Find the best talented experts on jobi.
          </h3>
          {/* buttons */}
          <div className="flex gap-6 sm:self-end">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={backArrow} alt="" />
            </button>
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        {/* Members */}
        <div className="mt-12 grid grid-cols-1 gap-10 xs:grid-cols-2 md:gap-20 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-48 w-1/2 rounded-full bg-secondary-500 xs:h-52 xs:w-full sm:h-60 sm:w-4/5 md:h-80 lg:w-2/3 xl:h-80 xl:w-full 2xl:h-96">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-md font-bold xs:text-xl">Julie Ake</div>
              <div className="text-black text-opacity-50 xs:text-lg">
                Product Designer
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-48 w-1/2 rounded-full bg-secondary-500 xs:h-52 xs:w-full sm:h-60 sm:w-4/5 md:h-80 lg:w-2/3 xl:h-80 xl:w-full 2xl:h-96">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-md font-bold xs:text-xl">Juan Marko</div>
              <div className="text-black text-opacity-50 xs:text-lg">
                Javascript Developer
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-48 w-1/2 rounded-full bg-secondary-500 xs:h-52 xs:w-full sm:h-60 sm:w-4/5 md:h-80 lg:w-2/3 xl:h-80 xl:w-full 2xl:h-96">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-md font-bold xs:text-xl">
                Elizabeth Foster
              </div>
              <div className="text-black text-opacity-50 xs:text-lg">
                UI/UX Designer
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-48 w-1/2 rounded-full bg-secondary-500 xs:h-52 xs:w-full sm:h-60 sm:w-4/5 md:h-80 lg:w-2/3 xl:h-80 xl:w-full 2xl:h-96">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-md font-bold xs:text-xl">Rashed Ka</div>
              <div className="text-black text-opacity-50 xs:text-lg">
                Marketing Expert
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertSection
