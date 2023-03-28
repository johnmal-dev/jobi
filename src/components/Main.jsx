import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView'
import JobDetailsView from './views/JobDetailsView'
import JobsView from './views/JobsView'
import PostNewJobView from './views/PostNewJobView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import PrivateRoute from './PrivateRoute'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/jobs" element={<JobsView />} />
      <Route path="/jobs/:jobId" element={<JobDetailsView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/error" element={<ErrorView />} />
      <Route path="*" element={<ErrorView />} />
      <Route
        path="/jobs/new"
        element={
          <PrivateRoute>
            <PostNewJobView />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default Main
