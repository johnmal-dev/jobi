import React, { useEffect, useState, createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../database/firebase'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
