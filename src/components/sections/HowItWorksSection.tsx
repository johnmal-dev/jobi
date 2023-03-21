import React from 'react'
import accountIcon from '../../assets/account-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'
import applyIcon from '../../assets/apply-icon.svg'

const HowItWorksSection = () => {
  return (
    <div className="bg-primary-700 text-white text-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h3 className="relative font-eb-garamond text-7xl mt-28 after:content-job-categories-art after:absolute after:-top-12 after:-right-24">
          How it works
        </h3>
        <div className="my-24 flex justify-center gap-36">
          <div className="relative flex flex-col justify-center items-center after:absolute after:content-arrow after:right-0 after:top-0 after:translate-x-36">
            <div className="m-8 bg-primary-300 h-20 w-20 flex justify-center items-center rounded-full">
              <img src={accountIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Create Account</h4>
            <p className="mt-4 text-lg text-primary-450 leading-8">
              It's very easy to open an account and start your journey.
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center after:absolute after:content-arrow after:right-0 after:top-0 after:translate-x-36">
            <div className="m-8 bg-primary-300 h-20 w-20 flex justify-center items-center rounded-full">
              <img src={profileIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Complete your profile</h4>
            <p className="mt-4 text-lg text-primary-450 leading-8">
              Complete your profile with all the info to get attention of
              client.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="m-8 bg-primary-300 h-20 w-20 flex justify-center items-center rounded-full">
              <img src={applyIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Apply job or hire</h4>
            <p className="mt-4 text-lg text-primary-450 leading-8">
              Apply & get your preferable jobs with all the requirements and get
              it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
