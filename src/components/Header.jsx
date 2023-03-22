import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/jobi-icon.svg'

const Header = () => {
  return (
    <div className="bg-primary-700 font-gordita text-base text-secondary-100">
      <div className="container relative mx-auto flex items-center justify-between pt-12">
        {/* Left */}
        <div className="flex items-center justify-start">
          {/* Jobi Icon */}
          <div className="font-eb-garamond text-4xl before:pr-2 before:content-jobi-icon">
            jobi
          </div>
          {/* Category Button */}
          <div className="mx-6 rounded-full bg-secondary-100 bg-opacity-10 px-4 py-1 text-primary-300 before:pr-2 before:content-category-icon">
            Category
          </div>
          {/* Menu */}
          <ul className="mx-4 flex items-center justify-center gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center">
          <div className="border-r-2 border-secondary-100 border-opacity-25 px-4">
            Post Job
          </div>
          <div className="px-4 text-primary-300">Login</div>
          <div className="rounded-full bg-primary-300 px-6 py-2 text-primary-700">
            Hire Top Talents
          </div>
        </div>
        {/* Header Art */}
        <div className="absolute left-2/3 before:content-header-art"></div>
      </div>
    </div>
  )
}

export default Header
