import React from 'react'
import CategoryCard from '../CategoryCard'
import { Link } from 'react-router-dom'
import jobData from '../../data/categories'

const JobCategoriesSection = () => {
  return (
    <div className="relative bg-primary-100 py-36">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-2">
          <h3 className="relative max-w-xl font-eb-garamond text-7xl text-primary-700 after:content-job-categories-art after:absolute after:-top-10 after:right-0">
            Most Demanding <span className="block">Categories.</span>
          </h3>
          <div>
            <p className="text-xl leading-9">
              Together with useful notifications, collaboration, insights, and
              improvement tip lorem etc.
            </p>
            <Link
              to="/"
              className="inline-block text-primary-400 mt-7 border-b-2 border-primary-400 hover:text-primary-500 hover:border-primary-500 transition ease-in-out"
            >
              Explore all fields
            </Link>
          </div>
        </div>
        <div className="my-12 flex justify-between items-center">
          {jobData.map((category) => {
            return <CategoryCard category={category} />
          })}
        </div>
      </div>
      {/* Bg Art */}
      <div className="absolute right-0 bottom-0 before:content-job-categories-art-2 translate-y-2"></div>
    </div>
  )
}

export default JobCategoriesSection
