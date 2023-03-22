import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/get-talented-experts-image.svg'

const GetTalentedExpertsSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid grid-cols-2 p-44">
        <div>
          <img src={image} alt="" className="h-full" />
        </div>
        <div className="py-12">
          <h3 className="max-w-lg font-eb-garamond text-7xl text-primary-700">
            Get over 50,000+ talented experts on jobi.
          </h3>
          <p className="mt-8 text-lg leading-9 text-black text-opacity-70">
            A full hybrid workforce management tool for you to use, as well as
            access to our top 1% of talent.
          </p>
          <ul className="mt-7 font-bold">
            <li className="my-6 before:pr-6 before:content-checkmark">
              Seamless searching
            </li>
            <li className="my-6 before:pr-6 before:content-checkmark">
              Get top 3% experts on your project
            </li>
            <li className="my-6 before:pr-6 before:content-checkmark">
              Protected payments system
            </li>
          </ul>
          <Link
            to="/"
            className="mt-10 inline-block rounded-3xl bg-primary-300 px-10 py-3"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetTalentedExpertsSection
