import React from 'react'

const steps = [
  {
    text: 'Job Details',
    imgUrl: '',
  },
  {
    text: 'Payment Info',
    imgUrl: '',
  },
  {
    text: 'Confirmation',
    imgUrl: '',
  },
]

const PostNewJobFormSection = () => {
  return (
    <div className="bg-secondary-400">
      <div className="container">
        {/* Steps */}
        <div className="flex items-center justify-around py-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative h-12 w-12 rounded-full bg-white before:absolute before:top-1/2 before:left-1/2 before:flex before:h-6 before:w-6 before:-translate-x-1/2 before:-translate-y-1/2 before:items-center before:justify-center before:content-paper-icon"></div>
            <div>Job Details</div>
          </div>
        </div>
        {/* Form */}
      </div>
    </div>
  )
}

export default PostNewJobFormSection
