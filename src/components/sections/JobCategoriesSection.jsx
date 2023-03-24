import React from 'react'
import CategoryCard from '../CategoryCard'
import { Link } from 'react-router-dom'
import jobData from '../../data/categories'

const JobCategoriesSection = () => {
  return (
    <div className="relative -z-20 bg-primary-100 py-36">
      <div className="container">
        <div className="grid grid-cols-2">
          <h3 className="relative max-w-xl font-heading text-7xl text-primary-700 after:absolute after:-top-10 after:right-0 after:content-job-categories-art">
            Most Demanding <span className="block">Categories.</span>
          </h3>
          <div>
            <p className="text-xl leading-9">
              Together with useful notifications, collaboration, insights, and
              improvement tip lorem etc.
            </p>
            <Link
              to="/"
              className="mt-7 inline-block border-b-2 border-primary-400 text-primary-400 transition ease-in-out hover:border-primary-500 hover:text-primary-500"
            >
              Explore all fields
            </Link>
          </div>
        </div>
        <div className="my-12 flex flex-wrap items-center justify-center">
          {jobData.map((category, index) => {
            return <CategoryCard key={index} category={category} />
          })}
        </div>
      </div>
      {/* Bg Art */}
      <div className="absolute right-0 bottom-0 translate-y-2 before:content-job-categories-art-2"></div>
    </div>
  )
}

export default JobCategoriesSection
