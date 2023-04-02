import React from 'react'
import JobDetailsBanner from './JobDetailsBanner'
import JobSpecifics from './JobSpecifics'
import RelatedJobs from './RelatedJobsSection'

export default function JobDetails() {
  return (
    <>
      <JobDetailsBanner />
      <JobSpecifics />
      <RelatedJobs />
    </>
  )
}
