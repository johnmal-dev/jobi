import React from 'react'
import { Link } from 'react-router-dom'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { salaryDisplay } from '../utils/helpers'

const JobCard = ({ job, jobsViewType = 'grid' }) => {
  // Grid View
  if (jobsViewType === 'grid') {
    return (
      <div className="col-span-1 flex flex-col items-start justify-between space-y-2 rounded-lg border border-secondary-500 bg-white p-6 shadow">
        <div className="flex w-full items-center justify-between">
          <div className="h-6 w-6 bg-secondary-500">
            <img src="#" alt="" />
          </div>
          <button
            type="button"
            className="rounded-full border-2 border-secondary-500 bg-white p-1 text-secondary-500 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Bookmark Job</span>
            <BookmarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="w-max bg-primary-100 px-1.5 py-1 text-sm font-bold">
          {job.contractType}
        </div>
        <div className="text-2xl">{job.title}</div>
        <div className="text-sm font-bold">{job.employer}</div>
        <div className="font-bold">
          ${salaryDisplay(job.salary.min)}-${salaryDisplay(job.salary.max)}{' '}
          <span className="font-normal text-secondary-500">/ Year</span>
        </div>
        <div className="flex w-full items-center justify-between pt-10 text-sm font-bold">
          <div>{`${job.location.city}, ${job.location.country}`}</div>
          <Link
            to={`/jobs/${job.key}`}
            type="button"
            className="btn rounded-full border-2 border-primary-500 bg-primary-500 px-3 py-0.5 font-medium uppercase text-white hover:bg-white hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Apply
          </Link>
        </div>
        <div className="text-sm italic">{job.date}</div>
      </div>
    )
  } else {
    // List View
    return (
      <div className="grid grid-cols-6 items-center justify-center gap-6 rounded-lg border border-secondary-500 bg-white p-3 shadow sm:grid-cols-10 sm:p-6">
        {/* Logo */}
        <div className="col-span-1 hidden items-center justify-center md:flex">
          <div className="h-14 w-14 bg-secondary-500">
            <img src="#" alt="" />
          </div>
        </div>
        {/* Title and Date */}
        <div className="col-span-2 sm:col-span-3">
          <div className="text-xs italic sm:text-sm">{job.date}</div>
          <div className="text-sm font-medium sm:text-lg">{job.title}</div>
        </div>
        {/* Contract Type and Pay */}
        <div className="hidden flex-col gap-1 sm:col-span-3 sm:flex md:col-span-2">
          <div className="w-max bg-primary-100 px-1.5 py-1 text-sm font-bold">
            {job.contractType}
          </div>
          <div className="text-sm font-bold">
            ${salaryDisplay(job.salary.min)}-${salaryDisplay(job.salary.max)}{' '}
            <span className="font-normal text-secondary-500">/ Year</span>
          </div>
        </div>
        {/* Location and Employer */}
        <div className="col-span-2 flex flex-col gap-1 text-sm text-xs sm:col-span-3 sm:text-base md:col-span-2">
          <div>{`${job.location.city}, ${job.location.country}`}</div>
          <div className="font-bold">{job.employer}</div>
        </div>
        {/* Buttons */}
        <div className="col-span-2 flex flex-col items-center justify-end gap-4 sm:col-span-1 md:col-span-2 md:flex-row">
          <button
            type="button"
            className="rounded-full border-2 border-secondary-500 bg-white p-1 text-secondary-500 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Bookmark Job</span>
            <BookmarkIcon
              className="h-4 w-4 sm:h-6  sm:w-6"
              aria-hidden="true"
            />
          </button>
          <Link
            to={`/jobs/${job.key}`}
            type="button"
            className="btn flex items-center justify-center rounded-full border-2 border-primary-500 bg-primary-500 px-3 py-2 text-xs font-medium uppercase text-white hover:bg-white hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Apply
          </Link>
        </div>
      </div>
    )
  }
}

export default JobCard
