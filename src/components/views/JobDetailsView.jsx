import React from 'react'
import JobDetailsBannerSection from '../sections/JobDetailsBannerSection'
import JobInfoSection from '../sections/JobInfoSection'
import RelatedJobsSection from '../sections/RelatedJobsSection'

const JobDetailsView = () => {
  return (
    <>
      <JobDetailsBannerSection />
      <JobInfoSection />
      <RelatedJobsSection />
    </>
  )
}

export default JobDetailsView
