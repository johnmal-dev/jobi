import React, { useContext } from 'react'
import AppContext from '../../components/context/AppContext'
import { useParams } from 'react-router-dom'
import JobCard from '../../components/JobCard'

export default function RelatedJobs() {
  const { jobId } = useParams()
  const { jobsList } = useContext(AppContext)
  const relatedJobsList = jobsList.filter((job) => job.key !== jobId)
  return (
    <div className="bg-primary-100 py-12">
      <div className="container">
        <h3 className="flex-1 text-center text-3xl font-medium sm:text-left lg:text-5xl">
          Related Jobs
        </h3>
        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {relatedJobsList.slice(0, 3).map((job) => {
            return <JobCard key={job.key} job={job} />
          })}
        </div>
      </div>
    </div>
  )
}
