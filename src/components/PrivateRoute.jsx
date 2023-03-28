import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './context/UserContext'

function PrivateRoute({ children }) {
  const { currentUser } = useContext(UserContext)

  if (currentUser) {
    return children
  }

  return <Navigate to="/" />
}

export default PrivateRoute
