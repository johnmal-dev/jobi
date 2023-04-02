import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { AppProvider } from './components/context/AppContext'
import { UserProvider } from './components/context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
