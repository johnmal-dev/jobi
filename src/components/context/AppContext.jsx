import React, { useState, createContext, useEffect } from 'react'

const AppContext = createContext()

const jobCategories = ['Web Design', 'Art', 'Business', 'Video Editing']

export const AppProvider = ({ children }) => {
  const [jobsList, setJobsList] = useState([])
  const [sortOrder, setSortOrder] = useState('Recent')
  const [filter, setFilter] = useState({
    keywords: '',
    minSalary: '',
    maxSalary: '',
    jobType: [],
    experienceLevel: [],
    location: '',
  })

  const filteredJobs = jobsList.filter((job) => {
    const locationMatch =
      !filter.location ||
      job.location.city.toLowerCase().includes(filter.location.toLowerCase()) ||
      job.location.country.toLowerCase().includes(filter.location.toLowerCase())
    const keywordsMatch =
      !filter.keywords ||
      job.title.toLowerCase().includes(filter.keywords.toLowerCase()) ||
      job.employer.toLowerCase().includes(filter.keywords.toLowerCase()) ||
      job.keywords
        .map((word) => word.toLowerCase())
        .some((word) => word.includes(filter.keywords.toLowerCase()))

    // TODO: Unfinished filters
    // const minSalaryMatch = job.salary >= filter.minSalary || !filter.minSalary
    // const maxSalaryMatch = job.salary <= filter.minSalary || !filter.maxSalary
    // const jobTypeMatch =
    //   filter.jobType.length === 0 || filter.jobType.includes(job.contractType)

    return keywordsMatch && locationMatch
  })

  return (
    <AppContext.Provider
      value={{
        jobsList,
        setJobsList,
        jobCategories,
        filter,
        setFilter,
        filteredJobs,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
