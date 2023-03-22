import React from 'react'
import mondayLogo from '../../assets/monday-logo.svg'
import shipbobLogo from '../../assets/shipbob-logo.svg'
import googleLogo from '../../assets/google-logo.svg'
import shipbobLogo2 from '../../assets/shipbob-logo-gray.svg'
import dribbbleLogo from '../../assets/dribbble-logo.svg'
import slackLogo from '../../assets/slack-logo.svg'
import vineLogo from '../../assets/vine-logo.svg'
import airbnbLogo from '../../assets/airbnb-logo.svg'
import backArrow from '../../assets/back-arrow.svg'
import nextArrow from '../../assets/next-arrow.svg'

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
    rating: '4.8 Awesome',
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

const ClientFeedbackSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h3 className="font-eb-garamond text-7xl">
            Trusted by leading startups.
          </h3>
          {/* buttons */}
          <div className="flex gap-6 self-end">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={backArrow} alt="" />
            </button>
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-100 transition ease-in-out hover:bg-primary-300">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        {/* Feedback */}
        <div className="mt-12 flex items-stretch justify-center gap-10">
          {companies.map((company, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer space-y-10 rounded-3xl border-2 border-black bg-primary-100 p-12 transition hover:bg-primary-300"
              >
                {/* Logo */}
                <div>
                  <img src={company.logo} alt={company.name} />
                </div>
                {/* Quote */}
                <div className="text-4xl font-bold">
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
                  <div>Stars</div>
                </div>
              </div>
            )
          })}
        </div>
        {/* Partners */}
        <div className="mt-36 flex flex-wrap items-center justify-center border-b-2 border-secondary-400 pb-24">
          {partners.map((partner, index) => {
            return (
              <div key={index} className="m-11">
                <img src={partner.logo} alt={partner.name} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ClientFeedbackSection
