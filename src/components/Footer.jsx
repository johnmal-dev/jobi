import React from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      {/* Top */}
      <div>
        {/* Text */}
        <div>
          <h3>Most complete job portal.</h3>
          <p>Signup and start find your job or talents</p>
        </div>
        {/* Buttons */}
        <button>Looking for job?</button>
        <button>Post a job</button>
      </div>
      {/* Middle */}
      <div className="grid grid-cols-5">
        <div>Logo</div>
        {footerCategories.map((category) => {
          return (
            <div>
              <h4>{category.name}</h4>
              <ul>
                {category.links.map((link) => {
                  return (
                    <li>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
        <div>
          <h4>Newsletter</h4>
          <div>Join & get important news regularly</div>
          <form>
            <input type="text" />
            <button>Send</button>
          </form>
          <div>We only send interesting and relevent emails.</div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">Privacy & Terms.</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div>Copyright @2023 jobi inc.</div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">f</Link>
          </li>
          <li>
            <Link to="/">i</Link>
          </li>
          <li>
            <Link to="/">p</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
