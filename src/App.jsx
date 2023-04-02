import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import UserContext from './components/context/UserContext'
import { auth } from './database/firebase'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import JobDetails from './pages/JobDetails/JobDetails'
import JobListings from './pages/JobListings/JobListings'
import PostJob from './pages/PostJob/PostJob'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

export default function App() {
  const { setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('logged in')
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
        console.log('logged out')
      }
    })
  }, [setCurrentUser])
  return (
    <div className="text-secondary-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/jobs/new"
          element={
            <PrivateRoute>
              <PostJob />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}
