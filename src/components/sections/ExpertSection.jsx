import React from 'react'
import backArrow from '../../assets/back-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'

const ExpertSection = () => {
  return (
    <div className="bg-white">
      <div className="container py-48">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h3 className="relative max-w-2xl font-heading text-7xl text-primary-700 after:absolute after:-top-14 after:-right-6 after:content-job-categories-art">
            Find the best talented experts on jobi.
          </h3>
          {/* buttons */}
          <div className="flex gap-6 self-end">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={backArrow} alt="" />
            </button>
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        {/* Members */}
        <div className="mt-12 grid grid-cols-4 gap-20">
          <div className="flex flex-col text-center">
            <div className="h-96 rounded-full bg-secondary-500">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-xl font-bold">Julie Ake</div>
              <div className="text-lg text-black text-opacity-50">
                Product Designer
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="h-96 rounded-full bg-secondary-500">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-xl font-bold">Juan Marko</div>
              <div className="text-lg text-black text-opacity-50">
                Javascript Developer
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="h-96 rounded-full bg-secondary-500">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-xl font-bold">Elizabeth Foster</div>
              <div className="text-lg text-black text-opacity-50">
                UI/UX Designer
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="h-96 rounded-full bg-secondary-500">
              <img src="" alt="" />
            </div>
            <div className="mt-12 text-black">
              <div className="text-xl font-bold">Rashed Ka</div>
              <div className="text-lg text-black text-opacity-50">
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
