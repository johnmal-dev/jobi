import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/jobi-icon.svg'

const Header = () => {
  return (
    <div className="bg-primary-700 text-secondary-100 font-gordita text-base">
      <div className="relative container mx-auto pt-12 flex justify-between items-center">
        {/* Left */}
        <div className="flex justify-start items-center">
          {/* Jobi Icon */}
          <div className="font-eb-garamond text-4xl before:content-jobi-icon before:pr-2">
            jobi
          </div>
          {/* Category Button */}
          <div className="mx-6 px-4 py-1 text-primary-300 bg-secondary-100 bg-opacity-10 rounded-full before:content-category-icon before:pr-2">
            Category
          </div>
          {/* Menu */}
          <ul className="flex justify-center items-center gap-6 mx-4">
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
        <div className="flex justify-center items-center">
          <div className="px-4 border-r-2 border-secondary-100 border-opacity-25">
            Post Job
          </div>
          <div className="px-4 text-primary-300">Login</div>
          <div className="bg-primary-300 text-primary-700 rounded-full px-6 py-2">
            Hire Top Talents
          </div>
        </div>
        {/* Header Art */}
        <div className="absolute before:content-header-art left-2/3"></div>
      </div>
    </div>
  )
}

export default Header
