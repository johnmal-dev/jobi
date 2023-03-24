import React from 'react'
import CategoryCard from '../CategoryCard'
import { Link } from 'react-router-dom'
import jobData from '../../data/categories'

const JobCategoriesSection = () => {
  return (
    <div className="relative bg-primary-200 pt-24 pb-12 xs:pb-24 lg:pt-48">
      <div className="container">
        <div className="grid grid-cols-1 text-center xs:text-left xl:grid-cols-2">
          <h3 className="relative max-w-xl font-heading text-5xl text-primary-700 after:absolute after:-top-10 after:right-0 after:content-none xs:text-7xl xs:after:content-job-categories-art">
            Most Demanding <span className="block">Categories.</span>
          </h3>
          <div>
            <p className="pt-10 text-xl leading-9 xl:pt-0">
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
        <div className="my-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {jobData.map((category, index) => {
            return <CategoryCard key={index} category={category} />
          })}
        </div>
      </div>
      {/* Bg Art */}
      <div className="absolute right-0 bottom-0 hidden translate-y-2 before:content-job-categories-art-2 xs:block"></div>
    </div>
  )
}

export default JobCategoriesSection
