import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/jobi-icon.svg'

const Header = () => {
  return (
    <div className="bg-palette-800 text-palette-100 font-gordita text-base">
      <div className="container mx-auto py-12 flex justify-between items-center">
        {/* Left */}
        <div className="flex justify-start items-center">
          {/* Jobi Icon */}
          <div className="font-eb-garamond text-4xl before:content-jobi-icon before:pr-2">
            jobi
          </div>
          {/* Category Button */}
          <div className="text-palette-500 bg-palette-100 bg-opacity-10 mx-6 rounded-full px-4 py-1 before:content-category-icon before:pr-2">
            Category
          </div>
          {/* Menu */}
          <ul className="flex justify-center items-center gap-6 mx-4">
            <li>Home</li>
            <li>Jobs</li>
            <li>Explore</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        {/* Right */}
        <div className="flex justify-center items-center gap-3">
          <div>Post Job</div>
          <div className="text-palette-500">Login</div>
          <div className="bg-palette-500 text-palette-800 rounded-full px-4 py-1">
            Hire Top Talents
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
