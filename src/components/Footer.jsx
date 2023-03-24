import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'

const footerCategories = [
  {
    name: 'Products',
    links: [
      {
        text: 'Take the tour',
        url: '',
      },
      {
        text: 'Live chat',
        url: '',
      },
      {
        text: 'Self-service',
        url: '',
      },
      {
        text: 'Mobile',
        url: '',
      },
      {
        text: 'Collaboration',
        url: '',
      },
      {
        text: 'Reviews',
        url: '',
      },
    ],
  },
  {
    name: 'Links',
    links: [
      {
        text: 'Pricing',
        url: '',
      },
      {
        text: 'About us',
        url: '',
      },
      {
        text: 'Careers',
        url: '',
      },
      {
        text: 'Blog',
        url: '',
      },
    ],
  },
  {
    name: 'Legal',
    links: [
      {
        text: 'Terms of use',
        url: '',
      },
      {
        text: 'Terms & Conditions',
        url: '',
      },
      {
        text: 'Privacy',
        url: '',
      },
      {
        text: 'Cookie Policy',
        url: '',
      },
    ],
  },
]

const Footer = () => {
  return (
    <div className="container">
      {/* Top */}
      <div className="flex items-center justify-between border-b border-secondary-400 pb-16">
        {/* Text */}
        <div>
          <h3 className="font-heading text-5xl">Most complete job portal.</h3>
          <p className="mt-2 text-xl font-normal text-black text-opacity-60">
            Signup and start find your job or talents.
          </p>
        </div>
        {/* Buttons */}
        <div>
          <button className="mr-7 rounded-md border border-primary-700 py-4 px-7 text-primary-700">
            Looking for job?
          </button>
          <button className="rounded-md border border-primary-300 bg-primary-300 py-4 px-7 text-primary-700">
            Post a job
          </button>
        </div>
      </div>
      {/* Middle */}
      <div className="my-20 grid grid-cols-5">
        {/* Jobi Icon */}
        <div className="font-heading text-4xl before:pr-2 before:content-jobi-icon">
          jobi
        </div>
        {footerCategories.map((category, index) => {
          return (
            <div key={index}>
              <h4 className="text-2xl font-bold">{category.name}</h4>
              <ul className="mt-6">
                {category.links.map((link, index) => {
                  return (
                    <li key={index} className="mt-6">
                      <Link
                        to={link.url}
                        className="text-black text-opacity-70"
                      >
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <div>
          <h4 className="text-2xl font-bold">Newsletter</h4>
          <div className="mt-6">Join & get important news regularly</div>
          <form className="mt-6">
            <div className="flex rounded-lg bg-secondary-100 p-2 shadow-sm ring-1 ring-inset ring-secondary-100 focus-within:ring-2 focus-within:ring-primary-300">
              <input
                type="text"
                placeholder="Enter your email"
                className="flex-1 border-none bg-transparent pr-0 placeholder-black placeholder-opacity-25 focus:ring-0"
              />
              <button className="rounded-md bg-primary-700 p-2 text-white focus:border-none focus:outline-none focus:ring-2">
                Send
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-secondary-900 text-opacity-50">
            We only send interesting and relevent emails.
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="grid grid-cols-3">
        <div className="space-x-6 text-left font-bold">
          <Link to="/">Privacy & Terms.</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="text-center">Copyright @2023 jobi inc.</div>
        <ul className="justify-right ml-auto flex items-center gap-4">
          <li>
            <Link to="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaPinterestP />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
