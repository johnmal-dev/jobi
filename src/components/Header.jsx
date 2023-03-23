import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-primary-700 font-body text-base text-secondary-100">
      <div className="relative mx-auto flex items-center justify-between px-16 py-12">
    <div className="bg-primary-700 font-body text-base text-secondary-100">
      <div className="relative mx-auto flex items-center justify-between px-16 py-12">
        {/* Left */}
        <div className="flex items-center justify-start">
          {/* Jobi Icon */}
          <Link
            to="/"
            className="block font-heading text-4xl transition ease-in-out before:pr-2 before:content-jobi-icon hover:text-primary-300 focus:text-primary-300"
          >
            jobi
          </Link>
          {/* Category Button */}
          <button className="mx-6 rounded-full bg-secondary-100 bg-opacity-10 px-4 py-1.5 text-primary-300 transition ease-in-out before:pr-2 before:content-category-icon hover:text-primary-100 focus:text-primary-100">
            Category
          </button>
          </button>
          {/* Menu */}
          <ul className="mx-4 flex items-center justify-center gap-6">
            <li>
              <Link to="/" className="link link-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="link link-white">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-white">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-white">
                Pages
              </Link>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="link-white link mx-2 block border-r border-secondary-100 border-opacity-25 pr-4"
          >
            Post Job
          </Link>
          <Link
            to="/"
            className="link link-green mx-2 block px-2 text-primary-300"
          >
            Login
          </Link>
          <Link to="/" className="btn btn-primary block">
            Hire Top Talents
          </Link>
        </div>
        {/* Header Art */}
        <div className="absolute left-2/3 -translate-x-36 before:content-header-art"></div>
      </div>
    </div>
  )
}

export default Header
