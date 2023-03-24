import React from 'react'
import ClientFeedbackSection from '../sections/ClientFeedbackSection'
import CollaborationSection from '../sections/CollaborationSection'
import ExpertSection from '../sections/ExpertSection'
import GetTalentedExpertsSection from '../sections/GetTalentedExpertsSection'
import HomeBannerSection from '../sections/HomeBannerSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import JobCategoriesSection from '../sections/JobCategoriesSection'
import JobiGuidesSection from '../sections/JobiGuidesSection'
import UploadCVSection from '../sections/UploadCVSection'

const HomeView = () => {
  return (
    <>
      <HomeBannerSection />
      <JobCategoriesSection />
      <GetTalentedExpertsSection />
      <HowItWorksSection />
      <ExpertSection />
      <ClientFeedbackSection />
      <CollaborationSection />
      <JobiGuidesSection />
      <UploadCVSection />
    </>
  )
}

export default HomeView
