import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../../assets/arrow-icon.svg'

const ErrorView = () => {
  return (
    <div>
      <div className="container my-24 grid grid-cols-2 gap-20">
        <div className="h-full w-full flex-1 bg-secondary-500">
          <img src="#" alt="" />
        </div>
        <div className="my-32 flex flex-col gap-12">
          <h1 className="font-heading text-8xl text-primary-500">
            404{' '}
            <span className="block text-7xl text-black">Page Not Found</span>
          </h1>
          <p className="text-2xl">
            Publishing industries for previewing layouts & visual mockups used.
          </p>
          <Link
            to="/"
            className="flex w-full items-center justify-between rounded-full bg-primary-300 py-4 px-8 font-medium uppercase leading-3 text-primary-700 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-gray-50 hover:text-primary-700 hover:ring-primary-700"
          >
            <div>Go Back</div>
            <div>
              <ArrowIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorView
