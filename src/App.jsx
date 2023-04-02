import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './database/firebase'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserContext from './components/context/UserContext'

function App() {
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
      <Main />
      <Footer />
    </div>
  )
}

export default App
