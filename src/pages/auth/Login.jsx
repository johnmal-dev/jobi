import React from 'react'
import { loginService } from '../../utils/services'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    const formData = new FormData(e.target)
    const email = formData.get('email') ?? undefined
    const password = formData.get('password') ?? undefined
    console.log(formData, email, password)
    try {
      await loginService(email, password)
      navigate('/')
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <div className="bg-secondary-100">
      <div className="container flex min-h-full flex-col justify-center py-24 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg md:max-w-xl">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <h2 className="p-1 text-center font-heading text-6xl text-primary-700">
              Sign In
            </h2>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
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
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 px-2 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-3 text-sm uppercase text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Login
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
                    <span className="sr-only">Sign in with Google</span>
                    <FcGoogle /> <span>Sign in with Google</span>
                  </Link>
                </div>

                <div>
                  <Link
                    to="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-base text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <FaFacebook color="#1877F2" />{' '}
                    <span>Sign in with Facebook</span>
                  </Link>
                </div>
              </div>
              <div className="my-4">
                <div className="text-center text-sm">
                  No account?{' '}
                  <Link
                    to="/register"
                    className="font-medium text-primary-500 underline hover:text-primary-700"
                  >
                    Register Here
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
