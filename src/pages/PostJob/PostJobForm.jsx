import React from 'react'
import InputDropdown from '../../components/InputDropdown'
import InputText from '../../components/InputText'
import {
  categoryDropdown as jobCategoryDropdown,
  jobTypeFilter as jobTypeDropdown,
  salaryFilter as salaryDropdown,
  jobKeywords,
  experienceFilter as experienceDropdown,
} from '../../data/categories'

const steps = [
  {
    text: 'Job Details',
    icon: 'before:content-paper-icon',
    active: true,
  },
  {
    text: 'Payment Info',
    icon: 'before:content-credit-card-icon',
    active: false,
  },
  {
    text: 'Confirmation',
    icon: 'before:content-tick-square-icon',
    active: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const jobTitleInput = {
  id: 'job-title',
  placeholder: 'Ex: Product Designer',
  label: 'Job Title*',
}

const jobDescriptionInput = {
  id: 'job-description',
  placeholder: 'Write about the job details...',
  label: 'Job Details*',
}

const minSalaryInput = {
  id: 'min-salary',
  placeholder: 'Min',
  label: null,
}
const maxSalaryInput = {
  id: 'max-salary',
  placeholder: 'Max',
  label: null,
}

const skillsInput = {
  id: 'skills',
  placeholder: 'Add Skills',
  label: 'Skills',
}

const qualificationDropdown = {
  id: 'qualification',
  name: 'Qualification',
  options: [{ value: 'qualification', label: 'Qualification' }],
}

const industryDropdown = {
  id: 'industry',
  name: 'Industry',
  options: [{ value: 'select-industry', label: 'Select industry' }],
}

const careerLevelDropdown = {
  id: 'career-level',
  name: 'Career Level',
  options: [{ value: 'select-career-level', label: 'Select Career' }],
}

const addressInput = {
  id: 'address',
  placeholder: 'Enter address',
  label: 'Address',
}

const countryDropdown = {
  id: 'country',
  name: 'Country',
  options: [{ value: 'select-country', label: 'Select Country' }],
}

const cityDropdown = {
  id: 'city-level',
  name: 'City',
  options: [{ value: 'select-city', label: 'Select City' }],
}

const stateProvinceDropdown = {
  id: 'state-province',
  name: 'State/Province',
  options: [{ value: 'select-state-province', label: 'Select State/Province' }],
}

const locationInput = {
  id: 'location',
  placeholder: 'Enter location',
  label: 'Map Location',
}

export default function PostJobForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit form')
  }

  return (
    <div className="bg-secondary-400">
      <div className="container py-12">
        {/* Steps */}
        <div className="flex items-stretch justify-center gap-4 py-12 xs:gap-12 sm:gap-24">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between gap-4"
              >
                <div
                  className={classNames(
                    step.icon,
                    step.active ? 'bg-primary-300' : 'bg-white',
                    'relative h-16 w-16 justify-stretch rounded-full before:absolute before:left-1/2 before:top-1/2 before:flex before:-translate-x-1/2 before:-translate-y-1/2 before:items-center before:justify-center xs:h-24 xs:w-24'
                  )}
                ></div>
                <div className="text-center text-xs xs:text-base">
                  Job Details
                </div>
              </div>
            )
          })}
        </div>
        {/* Form */}
        <div className="mx-auto my-12 max-w-6xl space-y-6 bg-white p-12 shadow sm:rounded-md">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Job Details Section*/}
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-primary-500">
                Job Details
              </h2>
              <InputText {...jobTitleInput} />
              {/* Job Description */}
              <InputText {...jobDescriptionInput} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Job Category */}
                <InputDropdown {...jobCategoryDropdown} />
                {/* Job Type */}
                <InputDropdown {...jobTypeDropdown} />
              </div>
              <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-4 sm:gap-4">
                {/* Salary */}
                <InputDropdown {...salaryDropdown} className="col-span-2" />
                {/* Min */}
                <InputText {...minSalaryInput} />
                {/* Max */}
                <InputText {...maxSalaryInput} />
              </div>
            </div>

            {/* Skills & Experience Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-primary-500">
                Skills & Experience
              </h2>
              {/* Skills */}
              <InputText {...skillsInput} />
              <div className="flex flex-wrap gap-2">
                {jobKeywords.map((word, index) => {
                  return (
                    <button
                      key={index}
                      className="block rounded-full bg-primary-100 px-2 py-1 text-center text-xs font-medium text-black text-opacity-50 ring-0 hover:bg-gray-50 hover:ring-2 hover:ring-inset hover:ring-primary-500"
                    >
                      {word}
                    </button>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Experience */}
                <InputDropdown {...experienceDropdown} />
                {/* Qualification */}
                <InputDropdown {...qualificationDropdown} />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Industry */}
                <InputDropdown {...industryDropdown} />
                {/* Career Level */}
                <InputDropdown {...careerLevelDropdown} />
              </div>
            </div>

            {/* Address & Location */}
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-primary-500">
                Address & Location
              </h2>
              {/* Address */}
              <InputText {...addressInput} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Country */}
                <InputDropdown {...countryDropdown} />
                {/* City */}
                <InputDropdown {...cityDropdown} />
                {/* State/Province */}
                <InputDropdown {...stateProvinceDropdown} />
              </div>
              <InputText {...locationInput} />
              <div className="h-32 w-full bg-secondary-100 xs:h-60 sm:h-80"></div>
            </div>

            {/* Buttons */}
            <div className="my-6 flex gap-6">
              <button
                type="submit"
                className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                Submit
              </button>
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
