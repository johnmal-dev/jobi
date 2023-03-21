import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView'
import JobInfoView from './views/JobInfoView'
import JobsView from './views/JobsView'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/jobs" element={<JobsView />} />
      <Route path="/jobs/:jobId" element={<JobInfoView />} />
      <Route path="/error" element={<ErrorView />} />
      <Route path="*" element={<ErrorView />} />
    </Routes>
  )
}

export default Main