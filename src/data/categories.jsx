import React from 'react'

import {
  TbPencil,
  TbCode,
  TbBriefcase,
  TbPhoneCall,
  TbEditCircle,
  TbBuildingBank,
} from 'react-icons/tb'

const randomJobCount = () => {
  return Math.floor(Math.random() * 1000)
}

export const jobData = [
  {
    name: 'UI/UX Design',
    icon: <TbPencil style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Development',
    icon: <TbCode style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Marketing',
    icon: <TbBriefcase style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Telemarketing',
    icon: <TbPhoneCall style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Editing',
    icon: <TbEditCircle style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Accounting',
    icon: <TbBuildingBank style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
]

export const jobTypeFilter = {
  id: 'job-type',
  name: 'Job Type',
  options: [
    { value: 'full-time', label: 'Full-time', checked: false },
    { value: 'hourly-contract', label: 'Hourly-Contract', checked: false },
    { value: 'part-time', label: 'Part-time', checked: false },
    { value: 'fixed-price', label: 'Fixed-Price', checked: false },
  ],
}

export const salaryFilter = {
  id: 'salary',
  name: 'Salary',
  options: [
    { value: 'yearly', label: 'Yearly', checked: false },
    { value: 'monthly', label: 'Monthly', checked: false },
    { value: 'hourly', label: 'Hourly', checked: false },
  ],
}

export const experienceFilter = {
  id: 'experience-level',
  name: 'Experience Level',
  options: [
    { value: 'beginner', label: 'Beginner (1-3yrs)', checked: false },
    {
      value: 'intermediate',
      label: 'Intermediate (1-5 yrs)',
      checked: false,
    },
    { value: 'expert', label: 'Expert (1-10yrs)', checked: false },
  ],
}

export const filters = [jobTypeFilter, experienceFilter]

export const categoryDropdown = {
  id: 'categories',
  name: 'Categories',
  options: [
    { value: 'web-development', label: 'Web Development' },
    { value: 'art', label: 'Art' },
    { value: 'business', label: 'Business' },
    { value: 'video-editing', label: 'Video Editing' },
  ],
}

export const fluencyDropdown = {
  id: 'fluency',
  name: 'English Fluency',
  options: [
    { value: 'fluent', label: 'Fluent' },
    { value: 'not-fluent', label: 'Not Fluent' },
  ],
}

export const jobKeywords = [
  'Design',
  'UI',
  'Digital',
  'Graphics',
  'Developer',
  'Product',
  'Microsoft',
  'Brand',
  'Photoshop',
  'Business',
  'IT & Technology',
  'Marketing',
  'Article',
  'Engineer',
  'HTML5',
  'Figma',
  'Automobile',
  'Account',
]
