import React from 'react'

const companies = [
  {
    name: 'monday.com',
    logo: '',
    review: {
      text: 'Seattle opera simplifies performance planning with deski eSignature',
      name: 'Rashed Kabir',
      position: 'Lead Designer',
    },
    rating: '4.5 Excellent',
  },
  {
    name: 'ShipBob',
    logo: '',
    review: {
      text: 'How DocuSign CLM helps Celonis scale its global business.',
      name: 'Mark Joge',
      position: 'Marketing Chief',
    },
    rating: '4.8 Awesome',
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
    </div>
  )
}

export default ClientFeedbackSection
