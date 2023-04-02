import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import PasswordChecklist from 'react-password-checklist'
import { Link, useNavigate } from 'react-router-dom'

import { Switch } from '@headlessui/react'
import Swal from 'sweetalert2'

import { registerService } from '../../utils/services'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [showValidator, setShowValidator] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isEmployer, setIsEmployer] = useState(false)
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    const formData = new FormData(e.target)
    const email = formData.get('email') ?? undefined
    const password = formData.get('password') ?? undefined
    const name = formData.get('name') ?? undefined
    const accountType = isEmployer ? 'employer' : 'candidate'
    console.log(formData, email, password)

    if (!isValid) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Invalid Password',
        showConfirmButton: false,
        timer: 1500,
        target: window,
      })
    } else {
      try {
        await registerService(email, password, name, accountType)
        navigate('/')
      } catch (err) {
        console.log('error', err)
      }
    }
  }

  return (
    <div className="bg-secondary-100">
      <div className="container flex min-h-full flex-col justify-center py-24 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg md:max-w-xl">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <h2 className="p-1 text-center font-heading text-6xl text-primary-700">
              Create Account
            </h2>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <Switch
                  checked={isEmployer}
                  onChange={setIsEmployer}
                  className={classNames(
                    'relative inline-flex h-12 w-full flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-secondary-100 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                  )}
                >
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="flex items-center justify-center text-base text-black text-opacity-50 sm:text-xl">
                      Candidate
                    </div>
                    <div className="flex items-center justify-center text-base text-black text-opacity-50 sm:text-xl">
                      Employer
                    </div>
                  </div>
                  <span className="sr-only">Candidate or Employer toggle</span>
                  <span
                    className={classNames(
                      isEmployer ? 'translate-x-full' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-11 w-1/2 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  >
                    <span
                      className={classNames(
                        isEmployer
                          ? 'opacity-0 duration-100 ease-out'
                          : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center text-base text-primary-500 transition-opacity sm:text-xl'
                      )}
                      aria-hidden="true"
                    >
                      Candidate
                    </span>
                    <span
                      className={classNames(
                        isEmployer
                          ? 'opacity-100 duration-200 ease-in'
                          : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center text-base text-primary-500 transition-opacity sm:text-xl'
                      )}
                      aria-hidden="true"
                    >
                      Employer
                    </span>
                  </span>
                </Switch>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm leading-6 text-primary-500"
                >
                  Name*
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 px-2 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 text-primary-500"
                >
                  Email*
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm leading-6 text-primary-500"
                >
                  Password*
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setShowValidator(true)}
                    onBlur={() => setShowValidator(false)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="passwordAgain"
                  className="block text-sm leading-6 text-primary-500"
                >
                  Password Confirmation*
                </label>
                <div className="relative mt-2">
                  <input
                    id="passwordAgain"
                    name="passwordAgain"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    onFocus={() => setShowValidator(true)}
                    onBlur={() => setShowValidator(false)}
                  />
                </div>
              </div>

              <div
                className={classNames(
                  showValidator ? 'h-full opacity-100' : 'h-0 opacity-0',
                  'transform overflow-hidden transition ease-in-out'
                )}
              >
                <PasswordChecklist
                  rules={['minLength', 'number', 'capital', 'match']}
                  minLength={5}
                  value={password}
                  valueAgain={passwordAgain}
                  onChange={(validity) => {
                    setIsValid(validity)
                  }}
                />
              </div>

              <div>
                <input
                  required
                  id="agreement"
                  aria-describedby="agreement-description"
                  name="agreement"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-500 checked:bg-primary-500 checked:hover:bg-primary-700 focus:ring-primary-500"
                />{' '}
                <span className="agreement-description text-sm">
                  By hitting the "Register" button, you agree to the{' '}
                  <Link
                    to="#"
                    className="text-primary-500 underline hover:text-primary-700"
                  >
                    Terms & Conditions
                  </Link>{' '}
                  &{' '}
                  <Link
                    to="#"
                    className="text-primary-500 underline hover:text-primary-700"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-3 text-sm uppercase text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">OR</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Link
                    to="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-base text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  >
                    <span className="sr-only">Signup with Google</span>
                    <FcGoogle /> <span>Signup with Google</span>
                  </Link>
                </div>

                <div>
                  <Link
                    to="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-base text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  >
                    <span className="sr-only">Signup with Facebook</span>
                    <FaFacebook color="#1877F2" />{' '}
                    <span>Signup with Facebook</span>
                  </Link>
                </div>
              </div>
              <div className="my-4">
                <div className="text-center text-sm">
                  Have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-primary-500 underline hover:text-primary-700"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
