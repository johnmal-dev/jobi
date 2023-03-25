import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDatabase, ref, onValue } from 'firebase/database'
import app from '../../database/firebase'
import { FaFacebookF, FaTwitter, FaLink } from 'react-icons/fa'
import { salaryDisplay } from '../../utils/helpers'

const JobInfoSection = () => {
  const { jobId } = useParams()
  const [jobData, setJobData] = useState(null)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const db = getDatabase(app)
    const jobRef = ref(db, `/jobs/${jobId}`)
    onValue(jobRef, (snapshot) => {
      const data = snapshot.val()
      setJobData(data)
    })
  }, [])

  return (
    jobData && (
      <div className="container my-28 grid grid-cols-10 items-start gap-10">
        {/* Main */}
        <div className="col-span-7 space-y-4">
          <div className="font-bold">
            <span className="font-normal text-black text-opacity-50">
              {jobData.date} by
            </span>{' '}
            {jobData.employer}
          </div>
          <h2 className="text-4xl font-medium">{jobData.title}</h2>
          <div className="flex gap-2">
            <Link
              to={jobData.facebook}
              className="flex items-center  justify-center gap-2 rounded bg-white py-1  px-2 text-sm font-medium text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-gray-50"
            >
              <span>
                <FaFacebookF />
              </span>
              Facebook
            </Link>
            <Link
              to={jobData.twitter}
              className="flex items-center  justify-center gap-2 rounded bg-white py-1  px-2 text-sm font-medium leading-3 text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-gray-50"
            >
              <span>
                <FaTwitter />
              </span>
              Twitter
            </Link>
            <button
              className="flex items-center  justify-center gap-2 rounded bg-white py-1  px-2 text-sm font-medium text-primary-700 shadow-sm ring-1 ring-inset ring-primary-700 hover:bg-gray-50"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setIsCopied(true)
              }}
            >
              <span>
                <FaLink />
              </span>
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div>
            <h3 className="text-2xl">Overview</h3>
            <p className="">{jobData.overview}</p>
          </div>
          <div>
            <h3 className="text-2xl">Job Description</h3>
            <p className="">{jobData.description}</p>
          </div>
          <div>
            <h3 className="text-2xl">Responsibilities</h3>
            <ul>
              {jobData.responsibilities.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="leading-8 before:pr-3 before:content-check-icon"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Required Skills</h3>
            <ul>
              {jobData.requiredSkills.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="list-inside list-disc leading-8 before:mr-3"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Benefits</h3>
            <ul>
              {jobData.benefits.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="list-inside list-disc leading-8 before:mr-3"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-span-3 flex flex-col items-center justify-start gap-4 rounded-lg bg-primary-100 py-10 px-8 shadow">
          <div className="h-20 w-20 rounded-full bg-secondary-500">
            <img src="#" alt="" />
          </div>
          <div>{jobData.employer}</div>
          <Link
            to={jobData.twitter}
            className="rounded-full bg-primary-500 py-3  px-8 text-sm font-medium leading-3 text-white shadow-sm ring-1 ring-inset ring-primary-500 hover:bg-gray-50 hover:text-primary-500"
          >
            Visit Website
          </Link>
          <div className="grid w-full grid-cols-2 gap-4 text-sm">
            <div>
              <div>Salary</div>
              <div>
                {salaryDisplay(jobData.salary.min)}-
                {salaryDisplay(jobData.salary.max)}
                /year
              </div>
            </div>
            <div>
              <div>Expertise</div>
              <div>{jobData.expertiseLevel}</div>
            </div>
            <div>
              <div>Location</div>
              <div>
                {jobData.location.city}, {jobData.location.country}
              </div>
            </div>
            <div>
              <div>Job Type</div>
              <div>{jobData.contractType}</div>
            </div>
            <div>
              <div>Date</div>
              <div>{jobData.date}</div>
            </div>
            <div>
              <div>Experience</div>
              <div>{jobData.experienceYears} Years</div>
            </div>
          </div>
          {/* Keywords */}
          <div className="flex flex-wrap gap-2">
            {jobData.keywords.map((keyword, index) => {
              return (
                <Link
                  key={index}
                  to="/"
                  className="block rounded-full py-1 px-2 text-center text-xs font-medium text-black text-opacity-50 ring-1 ring-inset ring-primary-700 hover:bg-gray-50"
                >
                  {keyword
                    .split(' ')
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(' ')}
                </Link>
              )
            })}
          </div>
          <Link
            to={jobData.twitter}
            className="w-full rounded-full bg-primary-300 py-4 px-8 text-center text-sm font-medium leading-3 text-primary-700 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-gray-50 hover:text-primary-700 hover:ring-primary-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    )
  )
}

export default JobInfoSection
