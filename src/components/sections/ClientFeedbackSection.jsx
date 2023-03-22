import React from 'react'
import mondayLogo from '../../assets/monday-logo.svg'
import shipbobLogo from '../../assets/shipbob-logo.svg'
import googleLogo from '../../assets/google-logo.svg'
import shipbobLogo2 from '../../assets/shipbob-logo-gray.svg'
import dribbbleLogo from '../../assets/dribbble-logo.svg'
import slackLogo from '../../assets/slack-logo.svg'
import vineLogo from '../../assets/vine-logo.svg'
import airbnbLogo from '../../assets/airbnb-logo.svg'

const companies = [
  {
    name: 'monday.com',
    logo: mondayLogo,
    review: {
      text: 'Seattle opera simplifies performance planning with deski eSignature',
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
      {/* Top */}
      <div>
        <h3>Trusted by leading startups.</h3>
        {/* Buttons */}
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
      {/* Feedback */}
      <div>
        {companies.map((company, index) => {
          return (
            <div key={index}>
              {/* Logo */}
              <div>
                <img src={company.logo} alt={company.name} />
              </div>
              {/* Quote */}
              <div>`"${company.review.text}"`</div>
              <div>
                {/* Name */}
                <span>{company.review.name}</span>
                {/* Position */}
                <span>{company.review.position}</span>
              </div>
              {/* Bottom */}
              <div>
                {/* Rating */}
                <div>{company.rating}</div>
                {/* Stars */}
                <div>Stars</div>
              </div>
            </div>
          )
        })}
      </div>
      {/* Partners */}
      {partners.map((partner, index) => {
        return (
          <div key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        )
      })}
    </div>
  )
}

export default ClientFeedbackSection
