import React from 'react'
import backArrow from '../../assets/back-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'

const ExpertSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-24 py-48">
        {/* Top */}
        <div className="flex justify-between items-center">
          <h3 className="relative text-primary-700 font-eb-garamond max-w-2xl text-7xl after:content-job-categories-art after:absolute after:-top-14 after:-right-6">
            Find the best talented experts on jobi.
          </h3>
          {/* buttons */}
          <div className="self-end flex gap-6">
            <button className="w-20 h-20 rounded-full bg-secondary-100 hover:bg-primary-300 transition ease-in-out flex justify-center items-center">
              <img src={backArrow} alt="" />
            </button>
            <button className="w-20 h-20 rounded-full bg-secondary-100 hover:bg-primary-300 transition ease-in-out flex justify-center items-center">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        {/* Members */}
        <div className="grid grid-cols-4 gap-20 mt-12">
          <div className="flex flex-col text-center">
            <div className="bg-secondary-500 h-96 rounded-full">
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
            <div className="bg-secondary-500 h-96 rounded-full">
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
            <div className="bg-secondary-500 h-96 rounded-full">
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
            <div className="bg-secondary-500 h-96 rounded-full">
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
