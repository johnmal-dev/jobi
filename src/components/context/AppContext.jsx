import React, { useState, createContext } from 'react'

const AppContext = createContext()

const jobCategories = ['Web Design', 'Art', 'Business', 'Video Editing']

export const AppProvider = ({ children }) => {
  const [jobsList, setJobsList] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredJobsList, setFilteredJobsList] = useState([])

  return (
    <AppContext.Provider
      value={{
        jobsList,
        setJobsList,
        jobCategories,
        filter,
        setFilter,
        filteredJobsList,
        setFilteredJobsList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
