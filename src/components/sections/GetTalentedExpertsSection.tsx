import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/get-talented-experts-image.svg'

const GetTalentedExpertsSection = () => {
  return (
    <div>
      <div className="container mx-auto bg-white p-44 grid grid-cols-2">
        <div>
          <img src={image} alt="" className="h-full" />
        </div>
        <div className="py-12">
          <h3 className="text-primary-700 font-eb-garamond max-w-lg text-7xl">
            Get over 50,000+ talented experts on jobi.
          </h3>
          <p className="text-lg mt-8 leading-9 text-black text-opacity-70">
            A full hybrid workforce management tool for you to use, as well as
            access to our top 1% of talent.
          </p>
          <ul className="mt-7 font-bold">
            <li className="my-6 before:content-checkmark before:pr-6">
              Seamless searching
            </li>
            <li className="my-6 before:content-checkmark before:pr-6">
              Get top 3% experts on your project
            </li>
            <li className="my-6 before:content-checkmark before:pr-6">
              Protected payments system
            </li>
          </ul>
          <Link
            to="/"
            className="mt-10 inline-block bg-primary-300 px-10 py-3 rounded-3xl"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetTalentedExpertsSection
