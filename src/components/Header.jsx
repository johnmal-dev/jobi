import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { logoutService } from '../utils/services'
import UserIcon from './UserIcon'
import UserContext from './context/UserContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { currentUser } = useContext(UserContext)

  return (
    <Disclosure as="nav" className="relative bg-primary-700">
      {({ open }) => (
        <>
          <div className="absolute left-2/3 hidden -translate-x-36 before:content-header-art xl:block"></div>
          <div className="mx-auto px-2 py-6 sm:px-4 xl:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 xl:px-0">
                <div className="flex-shrink-0">
                  <Link
                    to="/"
                    className="block font-heading text-4xl text-white transition ease-in-out before:pr-2 before:content-jobi-icon hover:text-primary-300 focus:text-primary-300"
                  >
                    jobi
                  </Link>
                </div>
                <div className="hidden xl:ml-6 xl:block">
                  <div className="flex space-x-4">
                    <button className="mx-6 rounded-full bg-secondary-100 bg-opacity-10 px-4 py-1.5 text-primary-300 transition ease-in-out before:pr-2 before:content-category-icon hover:text-primary-100 focus:text-primary-100">
                      Category
                    </button>
                    <Link
                      to="/"
                      className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                    >
                      Home
                    </Link>
                    <Link
                      to="/jobs"
                      className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                    >
                      Jobs
                    </Link>
                    <Link
                      to="/jobs/new"
                      className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                    >
                      Post New Job
                    </Link>
                    <Link
                      to="/"
                      className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex xl:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 text-primary-100 hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden xl:ml-4 xl:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  {currentUser ? (
                    <Menu as="div" className="relative z-50 ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-primary-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <UserIcon user={currentUser} />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                                onClick={logoutService}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                      >
                        Register
                      </Link>
                      <Link
                        to="/login"
                        className="rounded-full px-3 py-2 font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                      >
                        Login
                      </Link>
                      <Link
                        to="/jobs/new"
                        className="btn btn-primary ml-4 block"
                      >
                        Hire Top Talents
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                as={Link}
                to="/"
                className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/jobs"
                className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
              >
                Jobs
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/"
                className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/jobs/new"
                className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
              >
                Post New Job
              </Disclosure.Button>
              {!currentUser && (
                <>
                  <Disclosure.Button
                    as={Link}
                    to="/register"
                    className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                  >
                    Register
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block rounded-full px-3 py-2 text-base font-medium text-white hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                  >
                    Login
                  </Disclosure.Button>
                </>
              )}
            </div>
            {currentUser && (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <UserIcon user={currentUser} />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      John Malapit
                    </div>
                    <div className="text-sm font-medium text-primary-100">
                      john@mail.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-primary-700 p-1 text-primary-100 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as={Link}
                    to="#"
                    className="block rounded-full px-3 py-2 text-base font-medium text-primary-100 hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="#"
                    className="block rounded-full px-3 py-2 text-base font-medium text-primary-100 hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="#"
                    className="block rounded-full px-3 py-2 text-base font-medium text-primary-100 hover:bg-secondary-100 hover:bg-opacity-10 hover:text-primary-300"
                    onClick={logoutService}
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
