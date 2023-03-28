import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './database/firebase'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserContext from './components/context/UserContext'
import { useNavigate } from 'react-router-dom'

function App() {
  const { setCurrentUser } = useContext(UserContext)
  let navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        navigate('/jobs')
      } else {
        setCurrentUser(null)
        navigate('/')
      }
    })
  }, [onAuthStateChanged])
  return (
    <div className="font-body text-secondary-900">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
