import React from 'react'
import accountIcon from '../../assets/account-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'
import applyIcon from '../../assets/apply-icon.svg'

const HowItWorksSection = () => {
  return (
    <div className="bg-primary-700 text-center text-white">
      <div className="container flex flex-col items-center justify-center">
        <h3 className="relative mt-28 font-heading text-7xl after:absolute after:-top-12 after:-right-24 after:content-none sm:after:content-job-categories-art">
          How it works
        </h3>
        <div className="my-12 flex flex-col items-center justify-center gap-16 md:my-24 md:flex-row md:gap-36">
          <div className="relative flex max-w-sm flex-col items-center justify-center after:absolute after:right-0 after:top-0 after:translate-x-36 after:content-none md:after:content-arrow">
            <div className="m-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary-300">
              <img src={accountIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Create Account</h4>
            <p className="mt-4 text-lg leading-8 text-primary-450">
              It's very easy to open an account and start your journey.
            </p>
          </div>
          <div className="relative flex max-w-sm flex-col items-center justify-center after:absolute after:right-0 after:top-0 after:translate-x-36 after:content-none md:after:content-arrow">
            <div className="m-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary-300">
              <img src={profileIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Complete your profile</h4>
            <p className="mt-4 text-lg leading-8 text-primary-450">
              Complete your profile with all the info to get attention of
              client.
            </p>
          </div>
          <div className="flex max-w-sm flex-col items-center justify-center">
            <div className="m-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary-300">
              <img src={applyIcon} alt="" />
            </div>
            <h4 className="mt-6 text-xl font-bold">Apply job or hire</h4>
            <p className="mt-4 text-lg leading-8 text-primary-450">
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
