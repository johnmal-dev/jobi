import React from 'react'
import { Link } from 'react-router-dom'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { salaryDisplay } from '../utils/helpers'

const JobCard = ({ job }) => {
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
      <div className="w-min bg-primary-100 text-sm font-bold">
        {job.contractType}
      </div>
      <div className="text-2xl">{job.title}</div>
      <div className="text-sm font-bold">{job.employer}</div>
      <div className="font-bold">
        ${salaryDisplay(job.salary.min)}-${salaryDisplay(job.salary.max)}{' '}
        <span className="font-normal text-secondary-500">/ Year</span>
      </div>
      <div className="mt-10 flex w-full items-center justify-between text-sm font-bold">
        <div>{`${job.location.city}, ${job.location.country}`}</div>
        <Link
          to={`/jobs/${job.key}`}
          type="button"
          className="btn rounded-full border-2 border-primary-500 bg-primary-500 px-3 py-0.5 uppercase text-white hover:bg-white hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
        >
          Apply
        </Link>
      </div>
      <div className="text-sm italic">{job.date}</div>
    </div>
  )
}

export default JobCard
