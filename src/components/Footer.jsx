import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navigation = {
  products: [
    { name: 'Take the tour', href: '#' },
    { name: 'Live chat', href: '#' },
    { name: 'Self-service', href: '#' },
    { name: 'Mobile', href: '#' },
    { name: 'Collaboration', href: '#' },
    { name: 'Reviews', href: '#' },
  ],
  links: [
    { name: 'Pricing', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Terms of use', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: () => <FaFacebookF />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: () => <FaInstagram />,
    },
    {
      name: 'Pinterest',
      href: '#',
      icon: () => <FaPinterestP />,
    },
  ],
}

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="lg:pt-18 container px-6 pb-4 pt-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="font-heading text-4xl before:pr-2 before:content-jobi-icon">
                jobi
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Products
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-black hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Links
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-black hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-black hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h4 className="text-2xl font-bold">Newsletter</h4>
            <div className="mt-6">Join & get important news regularly</div>
            <form className="mt-6">
              <div className="flex rounded-lg bg-secondary-100 p-2 shadow-sm ring-1 ring-inset ring-secondary-100 focus-within:ring-2 focus-within:ring-primary-300">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-20 flex-1 border-none bg-transparent pr-0 placeholder-black placeholder-opacity-25 focus:ring-0 xs:w-full"
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
        <div className="grid grid-cols-1 gap-4 pt-12 lg:grid-cols-3 lg:gap-0">
          <div className="space-x-6 text-center font-bold lg:text-left">
            <Link to="/" className="text-black hover:text-primary-500">
              Privacy & Terms.
            </Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="text-center">Copyright @2023 jobi inc.</div>
          <div className="flex items-center justify-center gap-4 lg:justify-end">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-black hover:text-primary-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
