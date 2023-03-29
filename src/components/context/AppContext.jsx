import React, { useState, createContext } from 'react'

const AppContext = createContext()

const jobCategories = ['Web Design', 'Art', 'Business', 'Video Editing']

export const AppProvider = ({ children }) => {
  const [jobsList, setJobsList] = useState([])

  return (
    <AppContext.Provider value={{ jobsList, setJobsList, jobCategories }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
