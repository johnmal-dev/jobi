import React from 'react'

import airbnbLogo from '../../assets/airbnb-logo.svg'
import backArrow from '../../assets/back-arrow.svg'
import dribbbleLogo from '../../assets/dribbble-logo.svg'
import googleLogo from '../../assets/google-logo.svg'
import mondayLogo from '../../assets/monday-logo.svg'
import nextArrow from '../../assets/next-arrow.svg'
import shipbobLogo2 from '../../assets/shipbob-logo-gray.svg'
import shipbobLogo from '../../assets/shipbob-logo.svg'
import slackLogo from '../../assets/slack-logo.svg'
import vineLogo from '../../assets/vine-logo.svg'
import StarsDisplay from '../../components/StarsDisplay'

const companies = [
  {
    name: 'monday.com',
    logo: mondayLogo,
    review: {
      text: 'Seattle opera simplifies performance planning with deski eSignature.',
      name: 'Rashed Kabir',
      position: 'Lead Designer',
    },
    rating: '4.5 Excellent',
  },
  {
    name: 'ShipBob',
    logo: shipbobLogo,
    review: {
      text: 'How DocuSign CLM helps Celonis scale its global business.',
      name: 'Mark Joge',
      position: 'Marketing Chief',
    },
    rating: '5.0 Awesome',
  },
]

const partners = [
  {
    name: 'Google',
    logo: googleLogo,
  },
  {
    name: 'ShipBob',
    logo: shipbobLogo2,
  },
  {
    name: 'Dribbble',
    logo: dribbbleLogo,
  },
  {
    name: 'Slack',
    logo: slackLogo,
  },
  {
    name: 'Vine',
    logo: vineLogo,
  },
  {
    name: 'airbnb',
    logo: airbnbLogo,
  },
]

export default function Reviews() {
  return (
    <div>
      <div className="container">
        {/* Top */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-0">
          <h3 className="flex-1 text-center font-heading text-5xl sm:text-left lg:text-7xl">
            Trusted by leading startups.
          </h3>
          {/* buttons */}
          <div className="flex flex-1 justify-end gap-6">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300 lg:h-20 lg:w-20">
              <img src={backArrow} alt="" />
            </button>
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300 lg:h-20 lg:w-20">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        {/* Feedback */}
        <div className="mt-12 flex flex-col items-stretch justify-center gap-10 md:flex-row">
          {companies.map((company, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 cursor-pointer flex-col items-stretch justify-between space-y-10 rounded-3xl border-2 border-black bg-primary-100 p-6 transition hover:bg-primary-300 xl:p-12"
              >
                {/* Logo */}
                <div>
                  <img src={company.logo} alt={company.name} />
                </div>
                {/* Quote */}
                <div className="text-2xl font-bold lg:text-3xl xl:text-4xl">
                  "{company.review.text}"
                </div>
                <div>
                  {/* Name */}
                  <span className="font-bold">{company.review.name}, </span>
                  {/* Position */}
                  <span>{company.review.position}</span>
                </div>
                {/* Bottom */}
                <div className="flex items-center justify-between border-t-2 border-black pt-10">
                  {/* Rating */}
                  <div className="font-bold">{company.rating}</div>
                  {/* Stars */}
                  <div className="flex">
                    <StarsDisplay rating={company.rating} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* Partners */}
        <div className="mt-24 flex flex-wrap items-center justify-center gap-16 border-b-2 border-secondary-400 pb-24 2xl:gap-20">
          {partners.map((partner, index) => {
            return (
              <div key={index} className="">
                <img src={partner.logo} alt={partner.name} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
