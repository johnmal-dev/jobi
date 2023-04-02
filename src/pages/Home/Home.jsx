import React from 'react'
import Reviews from './Reviews'
import CompanySpotlight from './CompanySpotlight'
import TalentSpotlight from './TalentSpotlight'
import EmployersCTA from './EmployersCTA'
import HomeBanner from './HomeBanner'
import HowItWorks from './HowItWorks'
import Categories from './Categories'
import JobGuides from './JobGuides'
import JobSeekerCTA from './JobSeekerCTA'

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
