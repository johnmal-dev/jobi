import React from 'react'

import Categories from './Categories'
import CompanySpotlight from './CompanySpotlight'
import EmployersCTA from './EmployersCTA'
import HomeBanner from './HomeBanner'
import HowItWorks from './HowItWorks'
import JobGuides from './JobGuides'
import JobSeekerCTA from './JobSeekerCTA'
import Reviews from './Reviews'
import TalentSpotlight from './TalentSpotlight'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Categories />
      <EmployersCTA />
      <HowItWorks />
      <TalentSpotlight />
      <Reviews />
      <CompanySpotlight />
      <JobGuides />
      <JobSeekerCTA />
    </>
  )
}
