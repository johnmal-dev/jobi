import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useParams } from 'react-router-dom'
import JobCard from '../JobCard'

const RelatedJobsSection = () => {
  const { jobId } = useParams()
  const { jobsList } = useContext(AppContext)
  const relatedJobsList = jobsList.filter((job) => job.key !== jobId)
  return (
    <div className="bg-primary-100 py-12">
      <div className="container">
        <h3 className="text-5xl font-medium text-primary-700">Related Jobs</h3>
        {/* Cards */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          {relatedJobsList.slice(0, 3).map((job) => {
            return <JobCard key={job.key} job={job} />
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedJobsSection
