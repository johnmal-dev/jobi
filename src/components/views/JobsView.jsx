import React from 'react'
import { addJobService } from '../../utils/services'
import JobListingsSection from '../sections/JobListingsSection'
import JobsBannerSection from '../sections/JobsBannerSection'

const JobsView = () => {
  return (
    <>
      <JobsBannerSection />
      <JobListingsSection />
    </>
  )
}

export default JobsView
